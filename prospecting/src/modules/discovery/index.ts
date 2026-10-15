import { getConfig } from "../../config.js";
import { logger } from "../../logger.js";
import type { ProspectInput, RawPlace } from "../../types.js";
import { AppError, fetchWithTimeout, sleep, withRetry } from "../../utils/http.js";

const PLACES_SEARCH_URL =
  "https://places.googleapis.com/v1/places:searchText";

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.nationalPhoneNumber",
  "places.internationalPhoneNumber",
  "places.websiteUri",
  "places.rating",
  "places.userRatingCount",
  "places.googleMapsUri",
  "places.businessStatus",
  "places.types",
  "places.location",
  "places.regularOpeningHours",
  "places.primaryTypeDisplayName",
  "nextPageToken",
].join(",");

interface PlacesApiPlace {
  id?: string;
  displayName?: { text?: string };
  formattedAddress?: string;
  nationalPhoneNumber?: string;
  internationalPhoneNumber?: string;
  websiteUri?: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  businessStatus?: string;
  types?: string[];
  location?: { latitude?: number; longitude?: number };
  regularOpeningHours?: { weekdayDescriptions?: string[] };
  primaryTypeDisplayName?: { text?: string };
}

interface SearchTextResponse {
  places?: PlacesApiPlace[];
  nextPageToken?: string;
}

function mapPlace(place: PlacesApiPlace, fallbackCity: string): RawPlace | null {
  const placeId = place.id?.replace(/^places\//, "") ?? null;
  const name = place.displayName?.text?.trim();
  if (!placeId || !name) return null;

  const hours = place.regularOpeningHours?.weekdayDescriptions?.join(" | ") ?? null;

  return {
    placeId,
    name,
    category: place.primaryTypeDisplayName?.text ?? place.types?.[0] ?? null,
    address: place.formattedAddress ?? null,
    city: fallbackCity,
    phone: place.nationalPhoneNumber ?? place.internationalPhoneNumber ?? null,
    website: place.websiteUri ?? null,
    googleMapsUrl: place.googleMapsUri ?? null,
    rating: place.rating ?? null,
    reviewCount: place.userRatingCount ?? null,
    businessStatus: place.businessStatus ?? null,
    latitude: place.location?.latitude ?? null,
    longitude: place.location?.longitude ?? null,
    openingHours: hours,
    types: place.types ?? [],
  };
}

async function searchPage(
  textQuery: string,
  pageToken: string | undefined,
  pageSize: number,
): Promise<SearchTextResponse> {
  const config = getConfig();

  const body: Record<string, unknown> = {
    textQuery,
    languageCode: "pt-BR",
    regionCode: "BR",
    pageSize: Math.min(pageSize, 20),
  };
  if (pageToken) body.pageToken = pageToken;

  return withRetry(
    async () => {
      const response = await fetchWithTimeout(PLACES_SEARCH_URL, {
        method: "POST",
        timeoutMs: config.REQUEST_TIMEOUT_MS,
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": config.GOOGLE_PLACES_API_KEY,
          "X-Goog-FieldMask": FIELD_MASK,
        },
        body: JSON.stringify(body),
      });

      if (response.status === 429 || response.status >= 500) {
        throw new AppError(
          `Places API HTTP ${response.status}`,
          "PLACES_TRANSIENT",
        );
      }

      if (!response.ok) {
        const text = await response.text();
        throw new AppError(
          `Places API erro ${response.status}: ${text.slice(0, 400)}`,
          "PLACES_ERROR",
        );
      }

      return (await response.json()) as SearchTextResponse;
    },
    {
      retries: config.MAX_RETRIES,
      delayMs: config.REQUEST_DELAY_MS * 5,
      label: "Places searchText",
      shouldRetry: (err) =>
        err instanceof AppError && err.code === "PLACES_TRANSIENT",
    },
  );
}

/**
 * Discovery via Google Places API (New) — Text Search oficial.
 * Respeita pageSize da API (máx. 20) e pagina até atingir a quantidade.
 */
export async function discoverPlaces(input: ProspectInput): Promise<RawPlace[]> {
  const config = getConfig();
  const textQuery = `${input.niche} em ${input.city}`;
  const results: RawPlace[] = [];
  const seen = new Set<string>();
  let pageToken: string | undefined;
  let pages = 0;
  const maxPages = Math.ceil(input.quantity / 20) + 2;

  logger.info("Discovery iniciado", { textQuery, quantity: input.quantity });

  while (results.length < input.quantity && pages < maxPages) {
    const remaining = input.quantity - results.length;
    const page = await searchPage(textQuery, pageToken, Math.min(20, remaining));
    pages += 1;

    const places = page.places ?? [];
    if (places.length === 0) {
      logger.warn("Nenhum resultado nesta página", { pages });
      break;
    }

    for (const place of places) {
      const mapped = mapPlace(place, input.city);
      if (!mapped || seen.has(mapped.placeId)) continue;
      seen.add(mapped.placeId);
      results.push(mapped);
      if (results.length >= input.quantity) break;
    }

    pageToken = page.nextPageToken;
    if (!pageToken) break;

    await sleep(config.REQUEST_DELAY_MS);
  }

  logger.info("Discovery concluído", {
    encontrados: results.length,
    paginas: pages,
  });

  return results.slice(0, input.quantity);
}
