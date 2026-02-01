import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n";
import { zIndex, transitions, iconSizes, borderRadius } from "@/constants/design-tokens";

const Navbar = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full ${zIndex.fixed} border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg`}>
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center space-x-2 font-bold text-xl">
          <div className={`h-8 w-8 ${borderRadius.full} bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold`}>
            IC
          </div>
          <span className="hidden sm:inline">Iago Cunha</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          {t.navbar.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${transitions.colors} hover:text-primary story-link`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="hidden md:flex">
            <a href={t.navbar.cvPath} download className="flex items-center gap-2">
              <Download className={iconSizes.sm} />
              {t.navbar.downloadCV}
            </a>
          </Button>
          <ThemeToggle />
          <LanguageToggle />
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden inline-flex h-9 w-9 items-center justify-center ${borderRadius.md} border bg-background text-foreground ${transitions.colors} hover:bg-accent hover:text-accent-foreground`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className={iconSizes.sm} /> : <Menu className={iconSizes.sm} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
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
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-sm font-medium ${transitions.colors} hover:text-primary`}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild size="sm" variant="outline" className="w-full">
                <a href={t.navbar.cvPath} download className="flex items-center justify-center gap-2">
                  <Download className={iconSizes.sm} />
                  {t.navbar.downloadCV}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;