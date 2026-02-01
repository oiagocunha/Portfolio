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
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <ScrollTop />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Iago Cunha. {t.footer.rights}
      </footer>
    </div>
  );
};
