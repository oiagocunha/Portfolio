import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n";
import { zIndex, transitions, iconSizes, borderRadius } from "@/constants/design-tokens";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleSectionNav = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();

    if (location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full ${zIndex.fixed} border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg`}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#hero" className="flex items-center space-x-2 font-bold text-xl" onClick={(e) => handleSectionNav(e, "#hero")}>
          <div
            className={`h-8 w-8 ${borderRadius.full} bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold`}
          >
            IC
          </div>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-base">{t.brand.name}</span>
            <span className="text-[11px] font-medium text-muted-foreground">{t.brand.byline}</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center space-x-4">
          {t.navbar.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleSectionNav(event, item.href)}
              className={`text-sm font-medium ${transitions.colors} hover:text-primary story-link`}
            >
              {item.label}
            </a>
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
              {t.navbar.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    handleSectionNav(event, item.href);
                    setIsOpen(false);
                  }}
                  className={`block py-2 text-sm font-medium ${transitions.colors} hover:text-primary`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
