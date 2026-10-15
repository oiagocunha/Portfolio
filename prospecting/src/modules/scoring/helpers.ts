import type {
  NormalizedCompany,
  OpportunityCode,
  SuggestedService,
  WebsiteAnalysis,
} from "../../types.js";

/** Fallback determinístico de serviço (sem IA). */
export function suggestServiceDeterministic(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
): SuggestedService {
  const ops = new Set(website.opportunities);

  if (ops.has("NO_WEBSITE")) return "SITE";
  if (ops.has("OUTDATED_WEBSITE") || website.siteStatus === "POOR") {
    return "SITE";
  }
  if (ops.has("AUTOMATION_POTENTIAL") || ops.has("NO_ONLINE_SCHEDULING")) {
    return "AUTOMACAO";
  }
  if (ops.has("NO_WHATSAPP") && website.siteStatus !== "INEXISTENT") {
    return "WHATSAPP";
  }
  if (ops.has("NO_CLEAR_CTA") || ops.has("WEAK_CONTACT_FLOW")) {
    return "LANDING_PAGE";
  }
  if (website.siteStatus === "UNAVAILABLE" || website.siteStatus === "UNKNOWN") {
    return "DIAGNOSTICO";
  }
  if (ops.size === 0 || (ops.size === 1 && ops.has("UNKNOWN"))) {
    return "NENHUM";
  }
  return "DIAGNOSTICO";
}

export function buildOpportunityDeterministic(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
): string {
  const ops = website.opportunities;

  if (ops.includes("NO_WEBSITE")) {
    const reputation =
      company.rating !== null && company.reviewCount !== null
        ? `reputação ${company.rating.toFixed(1)} (${company.reviewCount} avaliações)`
        : "presença no Google Maps";
    return `Empresa possui ${reputation}, mas não foi encontrado website próprio. Possível oportunidade de presença digital.`;
  }

  if (website.siteStatus === "UNAVAILABLE") {
    return "Website listado no Google, porém inacessível no momento. Possível oportunidade depende de verificação manual.";
  }

  if (website.siteStatus === "POOR") {
    const bits: string[] = [];
    if (ops.includes("POOR_MOBILE")) bits.push("sinais de baixa experiência mobile");
    if (ops.includes("NO_CLEAR_CTA")) bits.push("CTA pouco evidente");
    if (ops.includes("NO_WHATSAPP")) bits.push("sem WhatsApp no site");
    const detail =
      bits.length > 0
        ? bits.join(" e ")
        : "qualidade digital aparentemente limitada";
    return `Website existente apresenta ${detail}. Possível oportunidade de melhoria da presença digital.`;
  }

  if (ops.includes("AUTOMATION_POTENTIAL")) {
    return "Site com WhatsApp e pouco fluxo estruturado de contato/agendamento. Possível oportunidade de automação.";
  }

  if (ops.length > 0 && !ops.includes("UNKNOWN")) {
    return `Sinais observados no site: ${ops.slice(0, 3).join(", ")}. Possível oportunidade comercial.`;
  }

  return "Dados públicos insuficientes para uma oportunidade clara; vale diagnóstico manual.";
}

export function normalizeSiteStatus(
  status: WebsiteAnalysis["siteStatus"],
): WebsiteAnalysis["siteStatus"] {
  return status === "NONE" ? "INEXISTENT" : status;
}

export function opportunityPoints(ops: OpportunityCode[]): {
  points: number;
  signals: string[];
} {
  const weights: Partial<Record<OpportunityCode, number>> = {
    NO_WEBSITE: 12,
    OUTDATED_WEBSITE: 10,
    POOR_MOBILE: 6,
    NO_CLEAR_CTA: 5,
    NO_ONLINE_SCHEDULING: 5,
    WEAK_CONTACT_FLOW: 5,
    NO_FORM: 3,
    NO_WHATSAPP: 3,
    WEAK_DIGITAL_PRESENCE: 4,
    AUTOMATION_POTENTIAL: 6,
    UNKNOWN: 0,
  };

  let points = 0;
  const signals: string[] = [];
  for (const op of ops) {
    const w = weights[op] ?? 0;
    if (w > 0) {
      points += w;
      signals.push(op);
    }
  }
  return { points: Math.min(points, 25), signals };
}
