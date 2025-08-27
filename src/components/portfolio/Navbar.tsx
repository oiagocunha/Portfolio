import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = language === 'pt'
    ? [
        { href: "#hero", label: "Início" },
        { href: "#especialidades", label: "Especialidades" },
        { href: "#tecnologias", label: "Tecnologias" },
        { href: "#sobre", label: "Sobre" },
        { href: "#projetos", label: "Projetos" },
        { href: "#contato", label: "Contato" },
      ]
    : [
        { href: "#hero", label: "Home" },
        { href: "#especialidades", label: "Specialties" },
        { href: "#tecnologias", label: "Technologies" },
        { href: "#sobre", label: "About" },
        { href: "#projetos", label: "Portfolio" },
        { href: "#contato", label: "Contact" },
      ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center space-x-2 font-bold text-xl">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold">
            IC
          </div>
          <span className="hidden sm:inline">Iago Cunha</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary story-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle language={language} setLanguage={setLanguage} />
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
            className="md:hidden border-t bg-background/95 backdrop-blur"
          >
            <div className="container py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
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