import { recordConversion } from "@/lib/conversions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ConversionEvents() {
  const { pathname } = useLocation();
  useEffect(() => {
    const source = new URLSearchParams(window.location.search).get("utm_source");
    recordConversion("page_view", { page: pathname, source: source?.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 60) || "direct" });
  }, [pathname]);
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor?.href) return;
      try {
        const url = new URL(anchor.href, location.origin);
        const name =
          anchor.dataset.event ||
          (url.hostname === "wa.me"
            ? "whatsapp_click"
            : url.protocol === "mailto:" || url.hostname.includes("mail.google.com")
              ? "email_click"
              : url.pathname.includes("/case-study/")
                ? "case_open"
                : "");
        if (name) recordConversion(name, { page: location.pathname });
      } catch {
        // Ignore malformed hrefs so tracking never blocks navigation.
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
