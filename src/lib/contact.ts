/** Contact channels shown across the site. Messages live in the locales. */
export const EMAIL = "dev.iagocunha@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/oiagocunha";
export const GITHUB_URL = "https://github.com/oiagocunha";
export const INSTAGRAM_URL = "https://instagram.com/oiagocunha";

/** WhatsApp chat link with a prefilled message; empty messages fall back to `fallback`. */
export function whatsappUrl(number: string, message?: string, fallback = "") {
  const text = message?.trim() || fallback;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
