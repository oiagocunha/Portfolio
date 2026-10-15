import type {
  AiQualification,
  NormalizedCompany,
  PriorityLabel,
  ScoreBreakdown,
  ScoredLead,
  WebsiteAnalysis,
} from "../../types.js";
import { logger } from "../../logger.js";
import {
  buildOpportunityDeterministic,
  normalizeSiteStatus,
  opportunityPoints,
  suggestServiceDeterministic,
} from "./helpers.js";

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

function scoreReputation(
  rating: number | null,
  reviews: number | null,
): number {
  let points = 0;

  if (rating !== null) {
    if (rating >= 4.8) points += 15;
    else if (rating >= 4.5) points += 10;
  }

  if (reviews !== null) {
    if (reviews > 500) points += 20;
    else if (reviews > 300) points += 15;
    else if (reviews > 100) points += 10;
  }

  return Math.min(points, 30);
}

function scorePresence(website: WebsiteAnalysis): number {
  const status = normalizeSiteStatus(website.siteStatus);
  switch (status) {
    case "INEXISTENT":
      return 30;
    case "POOR":
      return 25;
    case "FAIR":
      return 10;
    case "UNAVAILABLE":
      // Não tratar como "ruim" — oportunidade fraca/diagnóstico
      return 5;
    case "GOOD":
    case "UNKNOWN":
    default:
      return 0;
  }
}

function scoreActivity(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
): number {
  let points = 0;
  if (company.instagram || website.instagram) points += 5;
  if (
    company.whatsapp === "sim" ||
    website.whatsappFound === "true"
  ) {
    points += 5;
  }
  if (company.apparentlyActive) points += 5;
  return Math.min(points, 15);
}

function scorePenalties(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
): { points: number; reasons: string[] } {
  const reasons: string[] = [];
  let points = 0;
  const status = normalizeSiteStatus(website.siteStatus);

  if (company.businessStatus === "CLOSED_PERMANENTLY") {
    reasons.push("negócio aparentemente encerrado");
    points += 40;
  } else if (company.businessStatus === "CLOSED_TEMPORARILY") {
    reasons.push("negócio temporariamente fechado");
    points += 20;
  }

  if (!company.apparentlyActive && status === "INEXISTENT") {
    reasons.push("sem site e sinais de inatividade");
    points += 15;
  }

  if (
    company.rating === null &&
    company.reviewCount === null &&
    !company.phone &&
    !company.website
  ) {
    reasons.push("dados insuficientes para qualificação");
    points += 20;
  }

  if (
    company.reviewCount !== null &&
    company.reviewCount < 5 &&
    company.rating !== null &&
    company.rating < 3.5
  ) {
    reasons.push("poucas avaliações e reputação baixa");
    points += 10;
  }

  return { points: Math.min(points, 50), reasons };
}

function derivePriority(score: number): PriorityLabel {
  if (score >= 90) return "🟢 MUITO ALTA";
  if (score >= 75) return "🔵 ALTA";
  if (score >= 60) return "🟡 MÉDIA";
  if (score >= 40) return "🟠 BAIXA";
  return "🔴 DESCARTAR";
}

function emptyWebsite(): WebsiteAnalysis {
  return {
    siteExists: false,
    siteStatus: "UNKNOWN",
    siteReason: "Análise indisponível.",
    https: null,
    mobileStatus: "UNKNOWN",
    siteMobile: "desconhecido",
    siteUpdated: "desconhecido",
    whatsappFound: "unknown",
    instagram: null,
    facebook: null,
    linkedin: null,
    email: null,
    sitePhone: null,
    opportunities: ["UNKNOWN"],
    hasWhatsAppButton: null,
    hasCta: null,
    hasContact: null,
    hasForm: null,
    hasBooking: null,
    signals: null,
    fetchError: null,
  };
}

export function scoreCompany(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
  ai: AiQualification | null,
): ScoredLead {
  const presence = scorePresence(website);
  const reputation = scoreReputation(company.rating, company.reviewCount);
  const activity = scoreActivity(company, website);
  const { points: opportunityPts, signals } = opportunityPoints(
    website.opportunities,
  );

  // Bônus reputação + sem site (Fase 1)
  const bonusSignals = [...signals];
  let bonus = 0;
  if (
    normalizeSiteStatus(website.siteStatus) === "INEXISTENT" &&
    company.rating !== null &&
    company.rating >= 4.5 &&
    (company.reviewCount ?? 0) >= 50
  ) {
    bonus += 5;
    bonusSignals.push("boa reputação local sem presença web própria");
  }
  if (
    (company.whatsapp === "sim" || website.whatsappFound === "true") &&
    normalizeSiteStatus(website.siteStatus) === "INEXISTENT"
  ) {
    bonus += 3;
  }

  const opportunity = Math.min(opportunityPts + bonus, 25);
  const { points: penalties, reasons } = scorePenalties(company, website);

  const raw = presence + reputation + activity + opportunity - penalties;
  const total = clamp(Math.round(raw), 0, 100);

  const breakdown: ScoreBreakdown = {
    presence,
    reputation,
    activity,
    opportunity,
    penalties,
    total,
  };

  const deterministicOpportunity = buildOpportunityDeterministic(
    company,
    website,
  );
  const deterministicService = suggestServiceDeterministic(company, website);

  const evidence =
    ai && !ai.skipped && ai.evidence.length > 0
      ? ai.evidence
      : buildEvidence(company, website);
  const inference =
    ai && !ai.skipped && ai.inference.length > 0
      ? ai.inference
      : bonusSignals.length > 0
        ? [`Possível oportunidade: ${bonusSignals[0]}`]
        : ["Inferência limitada com os dados atuais."];

  const opportunityText =
    ai && !ai.skipped && ai.opportunity
      ? ai.opportunity
      : deterministicOpportunity;

  const suggestedService =
    ai && !ai.skipped && ai.recommendedService
      ? ai.recommendedService
      : deterministicService;

  const summary =
    ai && !ai.skipped && ai.summary
      ? ai.summary
      : opportunityText;

  const justification = [
    ...evidence.map((e) => `EVIDÊNCIA: ${e}`),
    ...inference.map((i) => `INFERÊNCIA: ${i}`),
    reasons.length > 0 ? `PENALIDADE: ${reasons.join("; ")}.` : null,
    `SCORE: presença ${breakdown.presence}, reputação ${breakdown.reputation}, atividade ${breakdown.activity}, oportunidade ${breakdown.opportunity}, penalidades -${breakdown.penalties}.`,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    company,
    website,
    ai,
    score: total,
    breakdown,
    priority: derivePriority(total),
    opportunity: opportunityText,
    suggestedService,
    justification,
    evidence,
    inference,
    summary,
    aiConfidence: ai && !ai.skipped ? ai.confidence : null,
    opportunities: website.opportunities,
    discoveredAt: new Date().toISOString().slice(0, 10),
    commercialStatus: "NOVO",
  };
}

function buildEvidence(
  company: NormalizedCompany,
  website: WebsiteAnalysis,
): string[] {
  const evidence: string[] = [];

  if (company.rating !== null && company.reviewCount !== null) {
    evidence.push(
      `${company.rating.toFixed(1)} estrelas e ${company.reviewCount} avaliações no Google.`,
    );
  }

  const status = normalizeSiteStatus(website.siteStatus);
  if (status === "INEXISTENT") {
    evidence.push("Website não encontrado no Google Business Profile.");
  } else if (company.website) {
    evidence.push(`Website listado: ${company.website}.`);
    evidence.push(`SITE_STATUS=${status}. ${website.siteReason}`);
  }

  if (website.whatsappFound === "true") {
    evidence.push("Link de WhatsApp encontrado no site.");
  } else if (website.whatsappFound === "false") {
    evidence.push("Nenhum link de WhatsApp encontrado no HTML do site.");
  }

  if (website.instagram) {
    evidence.push(`Instagram encontrado: ${website.instagram}.`);
  }

  if (website.https === true) evidence.push("HTTPS ativo.");
  if (website.https === false) evidence.push("HTTPS não confirmado.");

  if (evidence.length === 0) {
    evidence.push("Dados públicos limitados para esta empresa.");
  }

  return evidence;
}

export function scoreCompanies(
  companies: NormalizedCompany[],
  websites: Map<string, WebsiteAnalysis>,
  aiByPlaceId: Map<string, AiQualification> = new Map(),
): ScoredLead[] {
  logger.info("Scoring (Fase 2)", { count: companies.length });
  const scored = companies.map((company) => {
    const website = websites.get(company.placeId) ?? emptyWebsite();
    const ai = aiByPlaceId.get(company.placeId) ?? null;
    return scoreCompany(company, website, ai);
  });

  return scored.sort((a, b) => b.score - a.score);
}
