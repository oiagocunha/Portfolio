import { isProfessionalPath, localizedPath } from "@/lib/paths";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n";
import { zIndex, transitions, iconSizes, borderRadius } from "@/constants/design-tokens";
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

const Navbar = () => {
  const { t, locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const professional = isProfessionalPath(location.pathname);
  const home = localizedPath("/", locale);
  const profile = localizedPath("/perfil", locale);

  const items = professional
    ? t.navbar.professionalItems.map((item) =>
        item.href === "/" ? { ...item, href: home } : item,
      )
    : [...t.navbar.items, { href: profile, label: t.navbar.profileLink }];

  const brandName = professional ? t.brand.professionalName : t.brand.name;
  const brandByline = professional ? t.brand.professionalByline : t.brand.byline;

  const destination = (href: string) => {
    if (!href.startsWith("#")) return href;
    const base = professional ? profile : home;
    return `${base}${href}`;
  };

  const goTo = (href: string) => {
    setIsOpen(false);

    if (!href.startsWith("#") && !href.includes("#")) {
      navigate(href);
      return;
    }

    const full = destination(href);
    const [pathPart, hashPart = ""] = full.split("#");
    const targetPath = pathPart || home;
    const onTargetPage =
      (targetPath === home && !professional) ||
      (targetPath === profile && professional);

    if (onTargetPage && hashPart) {
      const scrolled = scrollToSection(hashPart);
      if (scrolled) {
        navigate(`${targetPath}#${hashPart}`, { replace: true });
        return;
      }
    }

    navigate(full);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full ${zIndex.fixed} border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg`}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label={t.navbar.navLabel}>
        <Link
          to={professional ? profile : home}
          className="flex items-center space-x-2 font-bold text-xl"
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`h-8 w-8 ${borderRadius.full} bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold`}
          >
            IC
          </div>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-base">{brandName}</span>
            <span className="text-[11px] font-medium text-muted-foreground">{brandByline}</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          {items.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              to={destination(item.href)}
              onClick={(event) => {
                event.preventDefault();
                goTo(item.href);
              }}
              className={`text-sm font-medium ${transitions.colors} hover:text-primary story-link`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden inline-flex h-9 w-9 items-center justify-center ${borderRadius.md} border bg-background text-foreground ${transitions.colors} hover:bg-accent hover:text-accent-foreground`}
            aria-label={t.a11y.toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className={iconSizes.sm} /> : <Menu className={iconSizes.sm} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t bg-background/95 backdrop-blur"
          >
            <div className="container py-4 space-y-3">
              {items.map((item) => (
                <Link
                  key={`${item.href}-${item.label}-mobile`}
                  to={destination(item.href)}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(item.href);
                  }}
                  className={`block py-2 text-sm font-medium ${transitions.colors} hover:text-primary`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
