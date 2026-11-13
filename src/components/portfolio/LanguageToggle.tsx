import { Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n, Locale } from "@/i18n";

const LanguageToggle = () => {
  const { locale, setLocale, t } = useI18n();

  const languages = [
    { code: "pt" as Locale, label: "Português", short: "PT" },
    { code: "en" as Locale, label: "English", short: "EN" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t.a11y.changeLanguage}
          className="inline-flex h-11 min-w-11 items-center justify-center rounded-md border bg-background px-2 font-mono text-xs font-medium text-foreground transition-colors hover:bg-secondary lg:h-9 lg:min-w-9"
        >
          {currentLanguage?.short}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            lang={lang.code === "pt" ? "pt-BR" : "en"}
            className="flex min-h-11 cursor-pointer items-center justify-between"
          >
            <span className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">{lang.short}</span>
              <span>{lang.label}</span>
            </span>
            {locale === lang.code && <Check className="h-4 w-4 text-accent" aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
