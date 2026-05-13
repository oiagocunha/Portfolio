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
    const pageKey = routeToPageKey(pathname);
    const page = t.seo.pages[pageKey];
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const htmlLang = locale === "pt" ? "pt-BR" : "en";

    document.documentElement.lang = htmlLang;
    document.title = page.title;

    upsertMeta("name", "description", page.description);
    upsertMeta("name", "keywords", t.seo.keywords);
    upsertMeta("name", "author", "Iago Cunha");
    upsertMeta("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large");

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
