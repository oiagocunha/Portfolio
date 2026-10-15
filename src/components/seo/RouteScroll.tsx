import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return false;
  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height || 64) + 16;
  const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - offset);
  window.scrollTo({ top, behavior: "auto" });
  return true;
}

export function RouteScroll() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    let id: string;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }

    if (scrollToId(id)) return;

    // Lazy sections may mount after the first paint.
    const observer = new MutationObserver(() => {
      if (scrollToId(id)) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 10000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [pathname, hash, key]);

  return null;
}
