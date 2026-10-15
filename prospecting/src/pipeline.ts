import { discoverPlaces } from "./modules/discovery/index.js";
import {
  enrichCompanies,
  mergeWebsiteIntoCompanies,
} from "./modules/enrichment/index.js";
import { qualifyWithAi } from "./modules/ai/index.js";
import { dedupeBatch } from "./modules/normalization/dedupe.js";
import { normalizePlaces } from "./modules/normalization/index.js";
import { scoreCompanies } from "./modules/scoring/index.js";
import { upsertLeadsToSheet } from "./modules/sheets/index.js";
import { analyzeWebsites } from "./modules/website/index.js";
import { logger } from "./logger.js";
import type { ProspectInput, ScoredLead } from "./types.js";

export interface PipelineResult {
  leads: ScoredLead[];
  inserted: number;
  updated: number;
}

/**
 * Pipeline Fase 2:
 * Discovery → Normalization → Dedupe → Enrichment → Website Analysis
 * → AI Qualification → Scoring → Sheets Upsert
 */
export async function runProspectingPipeline(
  input: ProspectInput,
): Promise<PipelineResult> {
  logger.info("Pipeline iniciado", input);

  const raw = await discoverPlaces(input);
  const normalized = normalizePlaces(raw, input.niche, input.city);
  const unique = dedupeBatch(normalized);
  const prepared = await enrichCompanies(unique);
  const websites = await analyzeWebsites(prepared);
  const enriched = mergeWebsiteIntoCompanies(prepared, websites);
  const aiByPlaceId = await qualifyWithAi(enriched, websites);
  const scored = scoreCompanies(enriched, websites, aiByPlaceId);
  const { inserted, updated } = await upsertLeadsToSheet(scored);

  logger.info("Pipeline concluído", {
    leads: scored.length,
    inserted,
    updated,
  });

  return { leads: scored, inserted, updated };
}
