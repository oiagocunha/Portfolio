import type { NormalizedCompany, WebsiteAnalysis } from "../src/types.js";

export function baseCompany(
  overrides: Partial<NormalizedCompany> = {},
): NormalizedCompany {
  return {
    placeId: "place-1",
    name: "Clínica Odonto X",
    category: "Clínica odontológica",
    address: "Rua A, 100 - Fortaleza",
    city: "Fortaleza, CE",
    phone: "(85) 99999-1234",
    phoneNormalized: "85999991234",
    website: null,
    domain: null,
    googleMapsUrl: "https://maps.google.com/?cid=1",
    rating: 4.9,
    reviewCount: 350,
    businessStatus: "OPERATIONAL",
    latitude: -3.7,
    longitude: -38.5,
    openingHours: null,
    whatsapp: "sim",
    instagram: null,
    facebook: null,
    linkedin: null,
    email: null,
    description: null,
    apparentlyActive: true,
    ...overrides,
  };
}

export function baseWebsite(
  overrides: Partial<WebsiteAnalysis> = {},
): WebsiteAnalysis {
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
    ...overrides,
  };
}
