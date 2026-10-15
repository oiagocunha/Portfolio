import { localizedPath, withoutLocale } from "@/lib/paths";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "@/i18n";
import { SITE_IMAGE, SITE_URL, upsertLink, upsertMeta } from "@/lib/seo";

const routeToPageKey = (pathname: string) => {
  if (pathname === "/case-study/chat-platform") return "chatCaseStudy" as const;
  if (pathname === "/case-study/public-data-monitor") return "publicDataCaseStudy" as const;
  return "home" as const;
};

export const SeoManager = () => {
  const { locale, t } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    const pageKey = routeToPageKey(withoutLocale(pathname));
    const page = withoutLocale(pathname) === "/perfil" ? {
      title: locale === "pt" ? "Iago Cunha | Backend, IA Generativa e Automação" : "Iago Cunha | Backend, Generative AI & Automation",
      description: locale === "pt" ? "Experiência com Python, FastAPI, Temporal, RAG e Kubernetes. Conheça os projetos, a experiência e o currículo de Iago Cunha." : "Experience with Python, FastAPI, Temporal, RAG and Kubernetes. Explore Iago Cunha's projects, experience and résumé.",
    } : t.seo.pages[pageKey];
    for (const lang of ["pt", "en"] as const) {
      const code = lang === "pt" ? "pt-BR" : "en";
      let link = document.head.querySelector<HTMLLinkElement>(`link[hreflang="${code}"]`);
      if (!link) { link = document.createElement("link"); link.rel = "alternate"; link.hreflang = code; document.head.appendChild(link); }
      link.href = SITE_URL + localizedPath(pathname, lang);
    }
    const defaultLink = document.head.querySelector<HTMLLinkElement>('link[hreflang="x-default"]');
    if (defaultLink) defaultLink.href = SITE_URL + localizedPath(pathname, "pt");
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const htmlLang = locale === "pt" ? "pt-BR" : "en";

    document.documentElement.lang = htmlLang;
    document.title = page.title;

    upsertMeta("name", "description", page.description);
    upsertMeta("name", "keywords", t.seo.keywords);
    upsertMeta("name", "author", "Iago Cunha");
    const known = ["/", "/perfil", "/case-study/chat-platform", "/case-study/public-data-monitor"].includes(withoutLocale(pathname));
    upsertMeta("name", "robots", known ? "index, follow, max-snippet:-1, max-image-preview:large" : "noindex, follow");

    upsertLink("canonical", canonical);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", t.seo.siteName);
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", SITE_IMAGE);
    upsertMeta("property", "og:locale", locale === "pt" ? "pt_BR" : "en_US");
    upsertMeta("property", "og:locale:alternate", locale === "pt" ? "en_US" : "pt_BR");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", SITE_IMAGE);
    upsertMeta("name", "twitter:creator", "@oiagocunha");
  }, [locale, pathname, t]);

  return null;
};
