import { getConfig } from "../../config.js";
import { logger } from "../../logger.js";
import type { NormalizedCompany, WebsiteAnalysis } from "../../types.js";
import { sleep } from "../../utils/http.js";
import { buildWebsiteAnalysis } from "./classify.js";
import { fetchWebsite } from "./fetch.js";
import { parseHtml } from "./parse.js";

export { buildWebsiteAnalysis, buildOpportunities, classifySiteStatus } from "./classify.js";
export { parseHtml, parseHtmlForTest } from "./parse.js";
export { fetchWebsite } from "./fetch.js";

async function analyzeOne(company: NormalizedCompany): Promise<WebsiteAnalysis> {
  if (!company.website) {
    return buildWebsiteAnalysis({
      company,
      fetchResult: null,
      signals: null,
    });
  }

  const fetchResult = await fetchWebsite(company.website);

  if (!fetchResult.ok || !fetchResult.html) {
    return buildWebsiteAnalysis({
      company,
      fetchResult,
      signals: null,
    });
  }

  let signals = null;
  try {
    signals = parseHtml(fetchResult.html, fetchResult.finalUrl);
    signals.https = fetchResult.https;
    signals.httpStatus = fetchResult.status;
    signals.finalUrl = fetchResult.finalUrl;
  } catch (error) {
    logger.warn("HTML inválido / parse falhou", {
      placeId: company.placeId,
      error: error instanceof Error ? error.message : String(error),
    });
    return buildWebsiteAnalysis({
      company,
      fetchResult: {
        ...fetchResult,
        error: "html_parse_error",
      },
      signals: null,
    });
  }

  return buildWebsiteAnalysis({ company, fetchResult, signals });
}

/**
 * Análise real de websites (Fase 2).
 * Concorrência limitada + delay; falhas por empresa não derrubam o pipeline.
 */
export async function analyzeWebsites(
  companies: NormalizedCompany[],
): Promise<Map<string, WebsiteAnalysis>> {
  const config = getConfig();
  const concurrency = Math.max(1, config.WEBSITE_CONCURRENCY);
  const map = new Map<string, WebsiteAnalysis>();

  logger.info("Website analysis (Fase 2)", {
    count: companies.length,
    concurrency,
  });

  let index = 0;

  async function worker(): Promise<void> {
    while (index < companies.length) {
      const current = index++;
      const company = companies[current]!;
      try {
        const analysis = await analyzeOne(company);
        map.set(company.placeId, analysis);
        logger.debug("Website analisado", {
          name: company.name,
          status: analysis.siteStatus,
        });
      } catch (error) {
        logger.error("Erro inesperado na análise de site", {
          name: company.name,
          error: error instanceof Error ? error.message : String(error),
        });
        map.set(
          company.placeId,
          buildWebsiteAnalysis({
            company,
            fetchResult: {
              ok: false,
              finalUrl: company.website,
              status: null,
              https: null,
              html: null,
              error: "unexpected_error",
              timedOut: false,
            },
            signals: null,
          }),
        );
      }
      await sleep(config.REQUEST_DELAY_MS);
    }
  }

  const workers = Array.from(
    { length: Math.min(concurrency, companies.length || 1) },
    () => worker(),
  );
  await Promise.all(workers);

  return map;
}
