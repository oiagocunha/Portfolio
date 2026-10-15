/** Strip locale prefix and trailing slash so `/perfil/` and `/en/perfil/` match. */
export function withoutLocale(path: string) {
  const bare = path.replace(/^\/en(?=\/|$)/, "") || "/";
  if (bare === "/") return "/";
  return bare.replace(/\/+$/, "") || "/";
}

export function localizedPath(path: string, locale: "pt" | "en") {
  const base = withoutLocale(path);
  return locale === "en" ? `/en${base === "/" ? "" : base}` : base;
}

export function isProfessionalPath(path: string) {
  return withoutLocale(path) === "/perfil";
}
