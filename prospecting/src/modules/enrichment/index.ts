import { logger } from "../../logger.js";
import type { NormalizedCompany, WebsiteAnalysis } from "../../types.js";

/**
 * Enrichment Fase 2: mescla sinais públicos do website na empresa
 * (Instagram, Facebook, email, WhatsApp) sem inventar dados.
 */
export async function enrichCompanies(
  companies: NormalizedCompany[],
): Promise<NormalizedCompany[]> {
  logger.info("Enrichment: passando empresas para análise de site", {
    count: companies.length,
  });
  return companies;
}

export function mergeWebsiteIntoCompanies(
  companies: NormalizedCompany[],
  websites: Map<string, WebsiteAnalysis>,
): NormalizedCompany[] {
  return companies.map((company) => {
    const w = websites.get(company.placeId);
    if (!w) return company;

    const whatsapp: NormalizedCompany["whatsapp"] =
      w.whatsappFound === "true"
        ? "sim"
        : company.whatsapp === "sim"
          ? "sim"
          : w.whatsappFound === "false"
            ? "não"
            : company.whatsapp;

    return {
      ...company,
      instagram: w.instagram ?? company.instagram,
      facebook: w.facebook ?? company.facebook,
      linkedin: w.linkedin ?? company.linkedin,
      email: w.email ?? company.email,
      whatsapp,
    };
  });
}
