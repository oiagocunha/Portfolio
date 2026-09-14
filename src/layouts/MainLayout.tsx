import { ReactNode } from "react";
import Navbar from "@/components/portfolio/Navbar";
import ScrollTop from "@/components/portfolio/ScrollTop";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import { useI18n } from "@/i18n";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow-lg"
      >
        {t.a11y.skipToContent}
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">{children}</main>
      <ScrollTop />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Iago Cunha. {t.footer.rights}
      </footer>
    </div>
  );
};
