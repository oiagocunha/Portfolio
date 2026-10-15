import { getConfig } from "../../config.js";
import { logger } from "../../logger.js";
import type {
  AiQualification,
  NormalizedCompany,
  WebsiteAnalysis,
} from "../../types.js";
import { fetchWithTimeout, sleep } from "../../utils/http.js";
import {
  buildAiSystemPrompt,
  buildAiUserPayload,
  parseAiJson,
  shouldCallAi,
} from "./prompt.js";

function skipped(reason: string): AiQualification {
  return {
    opportunity: "",
    recommendedService: "NENHUM",
    confidence: 0,
    evidence: [],
    inference: [],
    summary: "",
    skipped: true,
    skipReason: reason,
  };
}

async function callOpenAi(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
): Promise<AiQualification> {
  const config = getConfig();
  const apiKey = config.OPENAI_API_KEY;
  if (!apiKey) return skipped("sem_api_key");

  const body = {
    model: config.AI_MODEL,
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: buildAiSystemPrompt() },
      {
        role: "user",
        content: JSON.stringify(buildAiUserPayload(company, website)),
      },
    ],
  };

  const response = await fetchWithTimeout(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      timeoutMs: config.AI_TIMEOUT_MS,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    const text = await response.text();
    logger.warn("IA HTTP erro", {
      status: response.status,
      body: text.slice(0, 200),
    });
    return skipped(`http_${response.status}`);
  }

  const json = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = json.choices?.[0]?.message?.content;
  if (!content) return skipped("resposta_vazia");

  const parsed = parseAiJson(content);
  if (!parsed) {
    logger.warn("IA JSON inválido", { preview: content.slice(0, 200) });
    return skipped("json_invalido");
  }

  return parsed;
}

/**
 * Qualificação por IA (Fase 2).
 * Só chama API quando habilitada, com chave e dados suficientes.
 * Falhas não interrompem o pipeline.
 */
export async function qualifyWithAi(
  companies: NormalizedCompany[],
  websites: Map<string, WebsiteAnalysis>,
): Promise<Map<string, AiQualification>> {
  const config = getConfig();
  const results = new Map<string, AiQualification>();

  if (!config.AI_ENABLED) {
    logger.info("IA desabilitada (AI_ENABLED=false)");
    for (const c of companies) results.set(c.placeId, skipped("disabled"));
    return results;
  }

  if (!config.OPENAI_API_KEY) {
    logger.info("IA pulada — OPENAI_API_KEY ausente; usando fallback determinístico");
    for (const c of companies) results.set(c.placeId, skipped("sem_api_key"));
    return results;
  }

  let calls = 0;
  logger.info("AI qualification iniciado", {
    total: companies.length,
    max: config.AI_MAX_PER_RUN,
  });

  for (const company of companies) {
    const website = websites.get(company.placeId);
    if (!website) {
      results.set(company.placeId, skipped("sem_website_analysis"));
      continue;
    }

    const gate = shouldCallAi(company, website);
    if (!gate.yes) {
      results.set(company.placeId, skipped(gate.reason));
      continue;
    }

    if (calls >= config.AI_MAX_PER_RUN) {
      results.set(company.placeId, skipped("limite_ai_atingido"));
      continue;
    }

    try {
      const ai = await callOpenAi(company, website);
      results.set(company.placeId, ai);
      if (!ai.skipped) calls += 1;
    } catch (error) {
      logger.warn("IA falhou para empresa", {
        name: company.name,
        error: error instanceof Error ? error.message : String(error),
      });
      results.set(company.placeId, skipped("erro_rede"));
    }

    await sleep(config.REQUEST_DELAY_MS);
  }

  logger.info("AI qualification concluído", {
    chamadas: calls,
    total: companies.length,
  });

  return results;
}
