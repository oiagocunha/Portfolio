import type { Locale } from "@/i18n/types";

/** Route paths without the locale prefix. */
export const ROUTES = {
  home: "/",
  profile: "/perfil",
  services: "/servicos",
} as const;

/** Strip locale prefix and trailing slash so `/perfil/` and `/en/perfil/` match. */
export function withoutLocale(path: string) {
  const bare = path.replace(/^\/en(?=\/|$)/, "") || "/";
  if (bare === "/") return "/";
  return bare.replace(/\/+$/, "") || "/";
}

export function localizedPath(path: string, locale: Locale) {
  const base = withoutLocale(path);
  return locale === "en" ? `/en${base === "/" ? "" : base}` : base;
}

export function isProfessionalPath(path: string) {
  return withoutLocale(path) === ROUTES.profile;
}

export function isServicesPath(path: string) {
  return withoutLocale(path) === ROUTES.services;
}

/** Home anchors that moved to /servicos when the home became the two-paths page. */
const MOVED_HOME_SECTIONS = new Set(["servicos", "projetos", "como-trabalho", "sobre"]);

/** Where an old `/#section` link should go now, or null when nothing moved. */
export function legacyHomeAnchorTarget(pathname: string, hash: string) {
  if (withoutLocale(pathname) !== ROUTES.home) return null;
  const section = hash.replace(/^#/, "");
  if (!MOVED_HOME_SECTIONS.has(section)) return null;
  const locale: Locale = /^\/en(?:\/|$)/.test(pathname) ? "en" : "pt";
  return `${localizedPath(ROUTES.services, locale)}#${section}`;
}
