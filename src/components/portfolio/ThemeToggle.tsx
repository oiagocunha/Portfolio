import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/i18n";
import { useDocumentTheme } from "@/hooks/use-document-theme";

// The initial theme is applied by the inline script in index.html, before first paint.
const ThemeToggle = () => {
  const { t } = useI18n();
  const theme = useDocumentTheme();

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the choice then lasts for this page view only.
    }
  };

  return (
    <button
      type="button"
      aria-label={t.a11y.toggleTheme}
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border bg-background text-foreground transition-colors hover:bg-secondary lg:h-9 lg:w-9"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
