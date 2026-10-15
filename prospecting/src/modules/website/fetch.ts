import { getConfig } from "../../config.js";
import { logger } from "../../logger.js";
import { AppError, fetchWithTimeout, withRetry } from "../../utils/http.js";

export interface FetchWebsiteResult {
  ok: boolean;
  finalUrl: string | null;
  status: number | null;
  https: boolean | null;
  html: string | null;
  error: string | null;
  timedOut: boolean;
}

const USER_AGENT =
  "Mozilla/5.0 (compatible; ProspectingBot/1.0; +local-mvp; research)";

function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  try {
    const withProtocol = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : `https://${trimmed}`;
    const url = new URL(withProtocol);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

/**
 * Fetch HTTP seguro: timeout, redirects nativos (fetch), limite de tamanho.
 * Não contorna CAPTCHA/bloqueios.
 */
export async function fetchWebsite(websiteUrl: string): Promise<FetchWebsiteResult> {
  const config = getConfig();
  const url = normalizeUrl(websiteUrl);

  if (!url) {
    return {
      ok: false,
      finalUrl: null,
      status: null,
      https: null,
      html: null,
      error: "URL inválida",
      timedOut: false,
    };
  }

  try {
    const response = await withRetry(
      async () => {
        const res = await fetchWithTimeout(url, {
          method: "GET",
          redirect: "follow",
          timeoutMs: config.WEBSITE_TIMEOUT_MS,
          headers: {
            "User-Agent": USER_AGENT,
            Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
          },
        });

        // Retry só em 429/5xx
        if (res.status === 429 || res.status >= 500) {
          throw new AppError(`HTTP ${res.status}`, "WEBSITE_TRANSIENT");
        }
        return res;
      },
      {
        retries: Math.min(config.MAX_RETRIES, 2),
        delayMs: config.REQUEST_DELAY_MS * 3,
        label: `website fetch ${url}`,
        shouldRetry: (err) =>
          err instanceof AppError && err.code === "WEBSITE_TRANSIENT",
      },
    );

    const finalUrl = response.url || url;
    const https = finalUrl.startsWith("https://");
    const contentType = response.headers.get("content-type") ?? "";

    if (!response.ok) {
      return {
        ok: false,
        finalUrl,
        status: response.status,
        https,
        html: null,
        error: `HTTP ${response.status}`,
        timedOut: false,
      };
    }

    if (
      contentType &&
      !contentType.includes("text/html") &&
      !contentType.includes("application/xhtml") &&
      !contentType.includes("text/plain")
    ) {
      return {
        ok: false,
        finalUrl,
        status: response.status,
        https,
        html: null,
        error: `Content-Type não HTML: ${contentType}`,
        timedOut: false,
      };
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.byteLength > config.WEBSITE_MAX_HTML_BYTES) {
      logger.warn("HTML truncado por tamanho", {
        url: finalUrl,
        bytes: buffer.byteLength,
      });
    }

    const html = buffer
      .subarray(0, config.WEBSITE_MAX_HTML_BYTES)
      .toString("utf-8");

    return {
      ok: true,
      finalUrl,
      status: response.status,
      https,
      html,
      error: null,
      timedOut: false,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const timedOut =
      message.toLowerCase().includes("abort") ||
      message.toLowerCase().includes("timeout");

    logger.warn("Falha ao buscar website", { url, message });

    return {
      ok: false,
      finalUrl: url,
      status: null,
      https: url.startsWith("https://"),
      html: null,
      error: timedOut ? "timeout" : message.slice(0, 200),
      timedOut,
    };
  }
}
