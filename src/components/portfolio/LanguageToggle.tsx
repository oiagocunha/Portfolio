import { useState } from "react";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
}

const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  const toggleLanguage = () => {
    const nextLang = language === "pt" ? "en" : "pt";
    setLanguage(nextLang);
  };

  return (
    <button
      aria-label="Change language"
      onClick={toggleLanguage}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">{language === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}</span>
    </button>
  );
};

export default LanguageToggle;
