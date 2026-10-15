import type {
  AiQualification,
  NormalizedCompany,
  SuggestedService,
  WebsiteAnalysis,
} from "../../types.js";

const SERVICES: SuggestedService[] = [
  "SITE",
  "LANDING_PAGE",
  "AUTOMACAO",
  "WHATSAPP",
  "INTEGRACAO",
  "SISTEMA",
  "IA",
  "DIAGNOSTICO",
  "NENHUM",
];

export function buildAiUserPayload(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
): Record<string, unknown> {
  return {
    empresa: {
      nome: company.name,
      categoria: company.category,
      cidade: company.city,
      telefone_google: company.phone,
      website_google: company.website,
      rating: company.rating,
      avaliacoes: company.reviewCount,
      status_negocio: company.businessStatus,
    },
    website_analysis: {
      site_status: website.siteStatus,
      site_reason: website.siteReason,
      https: website.https,
      mobile_status: website.mobileStatus,
      whatsapp_found: website.whatsappFound,
      instagram: website.instagram,
      facebook: website.facebook,
      email: website.email,
      site_phone: website.sitePhone,
      opportunities: website.opportunities,
      has_cta: website.hasCta,
      has_form: website.hasForm,
      has_booking: website.hasBooking,
      fetch_error: website.fetchError,
    },
  };
}

export function buildAiSystemPrompt(): string {
  return `Você é um analista de prospecção comercial B2B.
Recebe APENAS dados já coletados sobre uma empresa local.
Sua tarefa é qualificar a oportunidade de serviços de desenvolvimento, automação, integração ou IA.

REGRAS OBRIGATÓRIAS:
1. NÃO invente fatos. Use somente o JSON fornecido.
2. Separe claramente EVIDÊNCIA (fatos observados) de INFERÊNCIA (hipótese cautelosa).
3. Nunca escreva que a empresa "precisa" de algo. Use "possível oportunidade".
4. recommended_service deve ser UM de: ${SERVICES.join(", ")}.
5. confidence é 0-100 (quão confiável é a leitura com os dados dados).
6. Responda SOMENTE JSON válido, sem markdown.

Formato:
{
  "opportunity": "string curta",
  "recommended_service": "SITE|LANDING_PAGE|AUTOMACAO|WHATSAPP|INTEGRACAO|SISTEMA|IA|DIAGNOSTICO|NENHUM",
  "confidence": 0,
  "evidence": ["..."],
  "inference": ["..."],
  "summary": "1-2 frases"
}`;
}

export function parseAiJson(raw: string): AiQualification | null {
  const cleaned = raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "");

  try {
    const data = JSON.parse(cleaned) as Record<string, unknown>;
    const service = String(data.recommended_service ?? "DIAGNOSTICO");
    const recommendedService = SERVICES.includes(service as SuggestedService)
      ? (service as SuggestedService)
      : "DIAGNOSTICO";

    const evidence = Array.isArray(data.evidence)
      ? data.evidence.map(String).slice(0, 8)
      : [];
    const inference = Array.isArray(data.inference)
      ? data.inference.map(String).slice(0, 8)
      : [];

    const confidence = Number(data.confidence);
    return {
      opportunity: String(data.opportunity ?? "").slice(0, 500),
      recommendedService,
      confidence: Number.isFinite(confidence)
        ? Math.max(0, Math.min(100, Math.round(confidence)))
        : 50,
      evidence,
      inference,
      summary: String(data.summary ?? "").slice(0, 800),
      skipped: false,
      skipReason: null,
    };
  } catch {
    return null;
  }
}

export function shouldCallAi(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
): { yes: boolean; reason: string } {
  // Sempre há valor em NO_WEBSITE / POOR / FAIR com oportunidades
  if (
    website.siteStatus === "INEXISTENT" ||
    website.siteStatus === "NONE" ||
    website.siteStatus === "POOR" ||
    website.siteStatus === "FAIR"
  ) {
    return { yes: true, reason: "status_relevante" };
  }

  if (website.opportunities.some((o) => o !== "UNKNOWN")) {
    return { yes: true, reason: "oportunidades_detectadas" };
  }

  if (company.rating !== null || company.website) {
    return { yes: true, reason: "dados_basicos" };
  }

  return { yes: false, reason: "dados_insuficientes" };
}
