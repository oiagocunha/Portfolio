export type SiteStatus =
  | "GOOD"
  | "FAIR"
  | "POOR"
  | "INEXISTENT"
  | "UNAVAILABLE"
  | "UNKNOWN"
  /** @deprecated use INEXISTENT — mantido para compat Fase 1 */
  | "NONE";

export type MobileStatus = "GOOD" | "POOR" | "UNKNOWN" | "INEXISTENT";

export type OpportunityCode =
  | "NO_WEBSITE"
  | "OUTDATED_WEBSITE"
  | "POOR_MOBILE"
  | "NO_WHATSAPP"
  | "NO_CLEAR_CTA"
  | "NO_ONLINE_SCHEDULING"
  | "WEAK_CONTACT_FLOW"
  | "NO_FORM"
  | "WEAK_DIGITAL_PRESENCE"
  | "AUTOMATION_POTENTIAL"
  | "UNKNOWN";

export type PriorityLabel =
  | "🟢 MUITO ALTA"
  | "🔵 ALTA"
  | "🟡 MÉDIA"
  | "🟠 BAIXA"
  | "🔴 DESCARTAR";

export type CommercialStatus =
  | "NOVO"
  | "CONTATADO"
  | "RESPONDEU"
  | "CONVERSANDO"
  | "PROPOSTA"
  | "NEGOCIAÇÃO"
  | "FECHADO"
  | "SEM INTERESSE"
  | "SEM RESPOSTA"
  | "DESCARTADO";

export type SuggestedService =
  | "SITE"
  | "LANDING_PAGE"
  | "AUTOMACAO"
  | "WHATSAPP"
  | "INTEGRACAO"
  | "SISTEMA"
  | "IA"
  | "DIAGNOSTICO"
  | "NENHUM";

export type WhatsAppFound = "true" | "false" | "unknown";

export interface ProspectInput {
  niche: string;
  city: string;
  quantity: number;
}

export interface RawPlace {
  placeId: string;
  name: string;
  category: string | null;
  address: string | null;
  city: string | null;
  phone: string | null;
  website: string | null;
  googleMapsUrl: string | null;
  rating: number | null;
  reviewCount: number | null;
  businessStatus: string | null;
  latitude: number | null;
  longitude: number | null;
  openingHours: string | null;
  types: string[];
}

export interface NormalizedCompany {
  placeId: string;
  name: string;
  category: string;
  address: string | null;
  city: string;
  phone: string | null;
  phoneNormalized: string | null;
  website: string | null;
  domain: string | null;
  googleMapsUrl: string | null;
  rating: number | null;
  reviewCount: number | null;
  businessStatus: string | null;
  latitude: number | null;
  longitude: number | null;
  openingHours: string | null;
  whatsapp: "sim" | "não" | "não encontrado";
  instagram: string | null;
  facebook: string | null;
  linkedin: string | null;
  email: string | null;
  description: string | null;
  apparentlyActive: boolean;
}

export interface WebsiteSignals {
  https: boolean | null;
  httpStatus: number | null;
  finalUrl: string | null;
  title: string | null;
  metaDescription: string | null;
  hasViewport: boolean | null;
  h1: string | null;
  phones: string[];
  emails: string[];
  whatsappLinks: string[];
  instagramLinks: string[];
  facebookLinks: string[];
  linkedinLinks: string[];
  hasForm: boolean;
  hasBookingLink: boolean;
  hasCta: boolean;
  hasAddressHint: boolean;
  hasServicesHint: boolean;
  hasContactPageHint: boolean;
  techHints: string[];
  fixedWidthHint: boolean;
  htmlBytes: number | null;
}

export interface WebsiteAnalysis {
  siteExists: boolean;
  siteStatus: SiteStatus;
  siteReason: string;
  https: boolean | null;
  mobileStatus: MobileStatus;
  /** Alias legível para Sheets (compat Fase 1) */
  siteMobile: "bom" | "ruim" | "desconhecido" | "inexistente";
  siteUpdated: "sim" | "provavelmente" | "não" | "desconhecido";
  whatsappFound: WhatsAppFound;
  instagram: string | null;
  facebook: string | null;
  linkedin: string | null;
  email: string | null;
  sitePhone: string | null;
  opportunities: OpportunityCode[];
  hasWhatsAppButton: boolean | null;
  hasCta: boolean | null;
  hasContact: boolean | null;
  hasForm: boolean | null;
  hasBooking: boolean | null;
  signals: WebsiteSignals | null;
  fetchError: string | null;
}

export interface AiQualification {
  opportunity: string;
  recommendedService: SuggestedService;
  confidence: number;
  evidence: string[];
  inference: string[];
  summary: string;
  skipped: boolean;
  skipReason: string | null;
}

export interface ScoreBreakdown {
  presence: number;
  reputation: number;
  activity: number;
  opportunity: number;
  penalties: number;
  total: number;
}

export interface ScoredLead {
  company: NormalizedCompany;
  website: WebsiteAnalysis;
  ai: AiQualification | null;
  score: number;
  breakdown: ScoreBreakdown;
  priority: PriorityLabel;
  opportunity: string;
  suggestedService: SuggestedService;
  justification: string;
  evidence: string[];
  inference: string[];
  summary: string;
  aiConfidence: number | null;
  opportunities: OpportunityCode[];
  discoveredAt: string;
  commercialStatus: CommercialStatus;
}
