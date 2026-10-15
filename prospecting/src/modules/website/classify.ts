import type {
  MobileStatus,
  NormalizedCompany,
  OpportunityCode,
  SiteStatus,
  WebsiteAnalysis,
  WebsiteSignals,
  WhatsAppFound,
} from "../../types.js";
import type { FetchWebsiteResult } from "./fetch.js";

function mobileLabel(status: MobileStatus): WebsiteAnalysis["siteMobile"] {
  switch (status) {
    case "GOOD":
      return "bom";
    case "POOR":
      return "ruim";
    case "INEXISTENT":
      return "inexistente";
    default:
      return "desconhecido";
  }
}

function assessMobile(signals: WebsiteSignals | null): MobileStatus {
  if (!signals) return "UNKNOWN";
  if (signals.hasViewport === true && !signals.fixedWidthHint) return "GOOD";
  if (signals.hasViewport === false) return "POOR";
  if (signals.fixedWidthHint && signals.hasViewport !== true) return "POOR";
  // Heurística fraca → não afirmar POOR
  return "UNKNOWN";
}

function looksOutdated(signals: WebsiteSignals): boolean {
  const htmlHints =
    signals.techHints.length === 0 &&
    !signals.hasViewport &&
    signals.fixedWidthHint;
  const thinContent =
    !signals.metaDescription &&
    !signals.hasCta &&
    !signals.hasForm &&
    (signals.htmlBytes ?? 0) < 8_000;
  return htmlHints || thinContent;
}

function bookingRelevant(category: string): boolean {
  const c = category.toLowerCase();
  return (
    c.includes("clinic") ||
    c.includes("odont") ||
    c.includes("dent") ||
    c.includes("médic") ||
    c.includes("medic") ||
    c.includes("saúde") ||
    c.includes("saude") ||
    c.includes("salon") ||
    c.includes("beleza") ||
    c.includes("estetic") ||
    c.includes("fisiot") ||
    c.includes("veterin")
  );
}

export function buildOpportunities(
  company: NormalizedCompany,
  siteStatus: SiteStatus,
  signals: WebsiteSignals | null,
  whatsappFound: WhatsAppFound,
  mobileStatus: MobileStatus,
): OpportunityCode[] {
  const ops = new Set<OpportunityCode>();

  if (siteStatus === "INEXISTENT" || siteStatus === "NONE") {
    ops.add("NO_WEBSITE");
    ops.add("WEAK_DIGITAL_PRESENCE");
    return [...ops];
  }

  if (siteStatus === "UNAVAILABLE") {
    // Não inventar OUTDATED — só sinal fraco
    ops.add("UNKNOWN");
    return [...ops];
  }

  if (!signals) {
    ops.add("UNKNOWN");
    return [...ops];
  }

  if (siteStatus === "POOR" || looksOutdated(signals)) {
    ops.add("OUTDATED_WEBSITE");
  }

  if (mobileStatus === "POOR") {
    ops.add("POOR_MOBILE");
  }

  if (whatsappFound === "false") {
    ops.add("NO_WHATSAPP");
  }

  if (signals.hasCta === false) {
    ops.add("NO_CLEAR_CTA");
  }

  if (!signals.hasForm) {
    ops.add("NO_FORM");
  }

  if (
    bookingRelevant(company.category) &&
    !signals.hasBookingLink
  ) {
    ops.add("NO_ONLINE_SCHEDULING");
  }

  const weakContact =
    !signals.hasContactPageHint &&
    signals.emails.length === 0 &&
    whatsappFound !== "true" &&
    signals.phones.length === 0;
  if (weakContact) {
    ops.add("WEAK_CONTACT_FLOW");
  }

  if (
    whatsappFound === "true" &&
    !signals.hasForm &&
    !signals.hasBookingLink
  ) {
    ops.add("AUTOMATION_POTENTIAL");
  }

  if (
    !signals.hasCta &&
    !signals.hasForm &&
    siteStatus !== "GOOD"
  ) {
    ops.add("WEAK_DIGITAL_PRESENCE");
  }

  return [...ops];
}

export function classifySiteStatus(
  fetchResult: FetchWebsiteResult | null,
  signals: WebsiteSignals | null,
): { status: SiteStatus; reason: string } {
  if (!fetchResult) {
    return {
      status: "INEXISTENT",
      reason: "Website não informado no Google Business Profile.",
    };
  }

  if (!fetchResult.ok || !fetchResult.html) {
    return {
      status: "UNAVAILABLE",
      reason: `Site listado, mas inacessível no momento (${fetchResult.error ?? "erro desconhecido"}). Não se assume qualidade ruim.`,
    };
  }

  if (!signals) {
    return {
      status: "UNKNOWN",
      reason: "HTML obtido, mas não foi possível analisar com confiança.",
    };
  }

  let score = 0;
  const notes: string[] = [];

  if (fetchResult.https) {
    score += 2;
    notes.push("HTTPS ok");
  } else {
    score -= 1;
    notes.push("sem HTTPS");
  }

  if (signals.title) score += 1;
  if (signals.metaDescription) score += 1;
  if (signals.hasViewport) {
    score += 2;
    notes.push("viewport presente");
  } else {
    score -= 2;
    notes.push("sem meta viewport");
  }

  if (signals.hasCta) {
    score += 2;
    notes.push("CTA detectado");
  } else {
    score -= 1;
    notes.push("CTA pouco evidente");
  }

  if (signals.hasForm || signals.hasBookingLink) score += 1;
  if (signals.whatsappLinks.length > 0) {
    score += 1;
    notes.push("WhatsApp no site");
  }

  if (
    signals.emails.length > 0 ||
    signals.phones.length > 0 ||
    signals.hasContactPageHint
  ) {
    score += 1;
    notes.push("contato encontrado");
  }

  if (signals.fixedWidthHint) {
    score -= 2;
    notes.push("indício de layout de largura fixa");
  }

  if (looksOutdated(signals)) {
    score -= 2;
    notes.push("sinais de site enxuto/desatualizado");
  }

  let status: SiteStatus;
  if (score >= 6) status = "GOOD";
  else if (score >= 3) status = "FAIR";
  else status = "POOR";

  return {
    status,
    reason: `Site acessível. ${notes.join("; ")}.`,
  };
}

export function buildWebsiteAnalysis(params: {
  company: NormalizedCompany;
  fetchResult: FetchWebsiteResult | null;
  signals: WebsiteSignals | null;
}): WebsiteAnalysis {
  const { company, fetchResult, signals } = params;

  if (!company.website) {
    return {
      siteExists: false,
      siteStatus: "INEXISTENT",
      siteReason: "Website não informado no Google Business Profile.",
      https: null,
      mobileStatus: "INEXISTENT",
      siteMobile: "inexistente",
      siteUpdated: "desconhecido",
      whatsappFound: "unknown",
      instagram: null,
      facebook: null,
      linkedin: null,
      email: null,
      sitePhone: null,
      opportunities: ["NO_WEBSITE", "WEAK_DIGITAL_PRESENCE"],
      hasWhatsAppButton: null,
      hasCta: null,
      hasContact: null,
      hasForm: null,
      hasBooking: null,
      signals: null,
      fetchError: null,
    };
  }

  const { status, reason } = classifySiteStatus(fetchResult, signals);
  const mobileStatus =
    status === "UNAVAILABLE" || status === "UNKNOWN"
      ? ("UNKNOWN" as MobileStatus)
      : assessMobile(signals);

  const whatsappFound: WhatsAppFound = signals
    ? signals.whatsappLinks.length > 0
      ? "true"
      : "false"
    : "unknown";

  const opportunities = buildOpportunities(
    company,
    status,
    signals,
    whatsappFound,
    mobileStatus,
  );

  const https = fetchResult?.https ?? signals?.https ?? null;

  let siteUpdated: WebsiteAnalysis["siteUpdated"] = "desconhecido";
  if (status === "POOR" && signals && looksOutdated(signals)) {
    siteUpdated = "não";
  } else if (status === "GOOD") {
    siteUpdated = "provavelmente";
  }

  return {
    siteExists: true,
    siteStatus: status,
    siteReason: reason,
    https,
    mobileStatus,
    siteMobile: mobileLabel(mobileStatus),
    siteUpdated,
    whatsappFound,
    instagram: signals?.instagramLinks[0] ?? null,
    facebook: signals?.facebookLinks[0] ?? null,
    linkedin: signals?.linkedinLinks[0] ?? null,
    email: signals?.emails[0] ?? null,
    sitePhone: signals?.phones[0] ?? null,
    opportunities,
    hasWhatsAppButton: signals ? signals.whatsappLinks.length > 0 : null,
    hasCta: signals?.hasCta ?? null,
    hasContact: signals
      ? Boolean(
          signals.hasContactPageHint ||
            signals.emails.length ||
            signals.phones.length ||
            signals.whatsappLinks.length,
        )
      : null,
    hasForm: signals?.hasForm ?? null,
    hasBooking: signals?.hasBookingLink ?? null,
    signals: signals
      ? {
          ...signals,
          https,
          httpStatus: fetchResult?.status ?? null,
          finalUrl: fetchResult?.finalUrl ?? signals.finalUrl,
        }
      : null,
    fetchError: fetchResult?.error ?? null,
  };
}
