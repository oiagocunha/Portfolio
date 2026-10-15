import type { NormalizedCompany, RawPlace } from "../../types.js";
import { extractDomain, normalizePhone } from "../../utils/normalize.js";

function detectWhatsAppHint(phone: string | null): "sim" | "não" | "não encontrado" {
  if (!phone) return "não encontrado";
  // Na Fase 1 não há scraping de site; telefone celular BR (11 dígitos com DDD) é sinal fraco.
  const digits = normalizePhone(phone);
  if (!digits) return "não encontrado";
  // Celular BR: 10–11 dígitos locais ou 12–13 com 55
  const local =
    digits.startsWith("55") && digits.length >= 12
      ? digits.slice(2)
      : digits;
  if (local.length === 11 && local[2] === "9") return "sim";
  return "não encontrado";
}

function isApparentlyActive(place: RawPlace): boolean {
  if (place.businessStatus === "CLOSED_PERMANENTLY") return false;
  if (place.businessStatus === "CLOSED_TEMPORARILY") return false;
  return true;
}

function humanizeCategory(raw: string | null, niche: string): string {
  if (!raw) return niche;
  return raw
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function normalizePlace(
  place: RawPlace,
  niche: string,
  cityFallback: string,
): NormalizedCompany {
  const phone = place.phone;
  return {
    placeId: place.placeId,
    name: place.name.trim(),
    category: humanizeCategory(place.category, niche),
    address: place.address,
    city: place.city?.trim() || cityFallback,
    phone,
    phoneNormalized: normalizePhone(phone),
    website: place.website,
    domain: extractDomain(place.website),
    googleMapsUrl: place.googleMapsUrl,
    rating: place.rating,
    reviewCount: place.reviewCount,
    businessStatus: place.businessStatus,
    latitude: place.latitude,
    longitude: place.longitude,
    openingHours: place.openingHours,
    whatsapp: detectWhatsAppHint(phone),
    instagram: null,
    facebook: null,
    linkedin: null,
    email: null,
    description: null,
    apparentlyActive: isApparentlyActive(place),
  };
}

export function normalizePlaces(
  places: RawPlace[],
  niche: string,
  city: string,
): NormalizedCompany[] {
  return places.map((p) => normalizePlace(p, niche, city));
}
