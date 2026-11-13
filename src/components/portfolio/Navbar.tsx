import { ROUTES, isProfessionalPath, isServicesPath, localizedPath } from "@/lib/paths";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "@/i18n";
import { Link, useLocation, useNavigate } from "react-router-dom";

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return false;
  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height || 64) + 16;
  window.scrollTo({
    top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - offset),
    behavior: "smooth",
  });
  return true;
}

const linkClass =
  "inline-flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground";

const Navbar = () => {
  const { t, locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const professional = isProfessionalPath(location.pathname);
  const services = isServicesPath(location.pathname);
  const home = localizedPath(ROUTES.home, locale);
  const profile = localizedPath(ROUTES.profile, locale);
  const servicesPage = localizedPath(ROUTES.services, locale);
  // Page whose sections the "#..." items point to.
  const base = professional ? profile : services ? servicesPage : home;

  const rawItems = professional
    ? t.navbar.professionalItems
    : services
      ? t.navbar.servicesItems
      : t.navbar.items;
  const items = rawItems.map((item) =>
    item.href.startsWith("/") ? { ...item, href: localizedPath(item.href, locale) } : item,
  );

  // The business brand only appears on its own page; everywhere else the site is Iago's.
  const brandName = services ? t.brand.name : t.brand.professionalName;
  const brandByline = services ? t.brand.byline : t.brand.professionalByline;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const destination = (href: string) => (href.startsWith("#") ? `${base}${href}` : href);

  const goTo = (href: string) => {
    setIsOpen(false);

    if (!href.startsWith("#") && !href.includes("#")) {
      navigate(href);
      return;
    }

    const full = destination(href);
    const [pathPart, hashPart = ""] = full.split("#");
    const targetPath = pathPart || home;

    if (targetPath === base && hashPart) {
      const scrolled = scrollToSection(hashPart);
      if (scrolled) {
        navigate(`${targetPath}#${hashPart}`, { replace: true });
        return;
      }
    }

    navigate(full);
  };

  const renderLinks = (mobile: boolean, list = items) =>
    list.map((item) => {
      const to = destination(item.href);
      const isCurrentPage = !to.includes("#") && to === location.pathname;
      return (
        <Link
          key={`${item.href}-${item.label}${mobile ? "-mobile" : ""}`}
          to={to}
          aria-current={isCurrentPage ? "page" : undefined}
          onClick={(event) => {
            event.preventDefault();
            goTo(item.href);
          }}
          className={mobile ? `${linkClass} flex w-full text-base` : linkClass}
        >
          {item.label}
        </Link>
      );
    });

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85`}
    >
      <nav className="container flex h-16 items-center justify-between gap-4" aria-label={t.navbar.navLabel}>
        <Link
          to={base}
          className="flex min-h-11 flex-col justify-center leading-tight"
          onClick={() => setIsOpen(false)}
        >
          <span className="whitespace-nowrap text-base font-semibold text-foreground">{brandName}</span>
          <span className="hidden whitespace-nowrap font-mono text-xs text-muted-foreground sm:block">
            {brandByline}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">{renderLinks(false)}</div>
        {/* Tablets: the two main destinations of each page (items 2-3) stay visible next to the menu. */}
        <div className="hidden items-center gap-1 sm:flex lg:hidden">{renderLinks(false, items.slice(1, 3))}</div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border bg-background text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label={t.a11y.toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t bg-background lg:hidden">
          <div className="container flex flex-col py-2">{renderLinks(true)}</div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
