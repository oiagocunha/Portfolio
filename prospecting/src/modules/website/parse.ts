import * as cheerio from "cheerio";
import type { WebsiteSignals } from "../../types.js";

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const PHONE_RE =
  /(?:\+?55\s?)?(?:\(?\d{2}\)?\s?)?(?:9\s?\d{4}|\d{4})[-\s]?\d{4}/g;

const CTA_WORDS = [
  "agendar",
  "agende",
  "marcar",
  "marque",
  "orçamento",
  "orcamento",
  "contato",
  "fale conosco",
  "whatsapp",
  "solicitar",
  "saiba mais",
  "comece",
  "cadastre",
  "inscreva",
  "comprar",
  "reserve",
  "reservar",
];

const BOOKING_HINTS = [
  "agendamento",
  "agendar",
  "booking",
  "calendly",
  "doctoralia",
  "trinks",
  "clinicorp",
  "feegow",
  "reservar",
  "marque sua",
];

const CONTACT_HINTS = ["contato", "fale-conosco", "fale conosco", "contact"];
const SERVICES_HINTS = [
  "servicos",
  "serviços",
  "services",
  "tratamentos",
  "especialidades",
];

function unique(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))];
}

function absUrl(href: string, base: string | null): string {
  try {
    return new URL(href, base ?? undefined).toString();
  } catch {
    return href;
  }
}

export function parseHtml(
  html: string,
  baseUrl: string | null,
): WebsiteSignals {
  let $: cheerio.CheerioAPI;
  try {
    $ = cheerio.load(html);
  } catch {
    return emptySignals(baseUrl, html.length);
  }

  const title = $("title").first().text().trim() || null;
  const metaDescription =
    $('meta[name="description"]').attr("content")?.trim() ||
    $('meta[property="og:description"]').attr("content")?.trim() ||
    null;

  const viewport = $('meta[name="viewport"]').attr("content") ?? null;
  const hasViewport = Boolean(viewport && viewport.toLowerCase().includes("width"));

  const h1 = $("h1").first().text().replace(/\s+/g, " ").trim() || null;

  const hrefs: string[] = [];
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (href) hrefs.push(absUrl(href, baseUrl));
  });

  const text = $("body").text().replace(/\s+/g, " ").toLowerCase();
  const htmlLower = html.toLowerCase();

  const whatsappLinks = unique(
    hrefs.filter(
      (h) =>
        /wa\.me\//i.test(h) ||
        /api\.whatsapp\.com/i.test(h) ||
        /whatsapp\.com\/send/i.test(h),
    ),
  );

  const instagramLinks = unique(
    hrefs.filter((h) => /instagram\.com\//i.test(h)),
  );
  const facebookLinks = unique(
    hrefs.filter((h) => /facebook\.com\//i.test(h) || /fb\.com\//i.test(h)),
  );
  const linkedinLinks = unique(
    hrefs.filter((h) => /linkedin\.com\//i.test(h)),
  );

  const emails = unique([
    ...(html.match(EMAIL_RE) ?? []),
    ...hrefs
      .filter((h) => h.toLowerCase().startsWith("mailto:"))
      .map((h) => h.replace(/^mailto:/i, "").split("?")[0] ?? ""),
  ]).filter((e) => !e.endsWith(".png") && !e.endsWith(".jpg"));

  const telLinks = hrefs
    .filter((h) => h.toLowerCase().startsWith("tel:"))
    .map((h) => h.replace(/^tel:/i, "").trim());
  const phonesFromText = html.match(PHONE_RE) ?? [];
  const phones = unique([...telLinks, ...phonesFromText]).slice(0, 8);

  const hasForm = $("form").length > 0;

  const hasBookingLink =
    hrefs.some((h) => BOOKING_HINTS.some((b) => h.toLowerCase().includes(b))) ||
    BOOKING_HINTS.some((b) => text.includes(b));

  const hasCta =
    $("a, button")
      .toArray()
      .some((el) => {
        const t = $(el).text().replace(/\s+/g, " ").trim().toLowerCase();
        return CTA_WORDS.some((w) => t.includes(w));
      }) || whatsappLinks.length > 0;

  const hasAddressHint =
    /rua |av\.|avenida |cep\s*\d|bairro /i.test(text) ||
    $('a[href*="maps.google"], a[href*="google.com/maps"]').length > 0;

  const hasServicesHint =
    hrefs.some((h) => SERVICES_HINTS.some((s) => h.toLowerCase().includes(s))) ||
    SERVICES_HINTS.some((s) => text.includes(s));

  const hasContactPageHint =
    hrefs.some((h) => CONTACT_HINTS.some((c) => h.toLowerCase().includes(c))) ||
    CONTACT_HINTS.some((c) => text.includes(c));

  const techHints: string[] = [];
  if (/wp-content|wordpress/i.test(htmlLower)) techHints.push("WordPress");
  if (/wix\.com|wixstatic/i.test(htmlLower)) techHints.push("Wix");
  if (/cdn\.shopify|shopify/i.test(htmlLower)) techHints.push("Shopify");
  if (/webflow/i.test(htmlLower)) techHints.push("Webflow");
  if (html.includes("__NEXT_DATA__") || html.includes("/_next/")) {
    techHints.push("Next.js");
  }
  if (/data-reactroot|__REACT/i.test(html)) {
    techHints.push("React");
  }

  const fixedWidthHint =
    /width\s*:\s*\d{4,}px/i.test(html) ||
    /<table[^>]*width=["']?\d{3,}/i.test(html) ||
    /<meta[^>]*name=["']viewport["'][^>]*content=["'][^"']*width\s*=\s*\d{3,}/i.test(
      html,
    );

  return {
    https: baseUrl ? baseUrl.startsWith("https://") : null,
    httpStatus: null,
    finalUrl: baseUrl,
    title,
    metaDescription,
    hasViewport,
    h1,
    phones,
    emails,
    whatsappLinks,
    instagramLinks,
    facebookLinks,
    linkedinLinks,
    hasForm,
    hasBookingLink,
    hasCta,
    hasAddressHint,
    hasServicesHint,
    hasContactPageHint,
    techHints,
    fixedWidthHint,
    htmlBytes: html.length,
  };
}

function emptySignals(baseUrl: string | null, bytes: number): WebsiteSignals {
  return {
    https: baseUrl ? baseUrl.startsWith("https://") : null,
    httpStatus: null,
    finalUrl: baseUrl,
    title: null,
    metaDescription: null,
    hasViewport: null,
    h1: null,
    phones: [],
    emails: [],
    whatsappLinks: [],
    instagramLinks: [],
    facebookLinks: [],
    linkedinLinks: [],
    hasForm: false,
    hasBookingLink: false,
    hasCta: false,
    hasAddressHint: false,
    hasServicesHint: false,
    hasContactPageHint: false,
    techHints: [],
    fixedWidthHint: false,
    htmlBytes: bytes,
  };
}

/** Expõe para testes unitários de parsing. */
export function parseHtmlForTest(html: string, baseUrl = "https://example.com") {
  return parseHtml(html, baseUrl);
}
