import { ReactNode } from "react";
import Navbar from "@/components/portfolio/Navbar";
import ScrollTop from "@/components/portfolio/ScrollTop";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import WhatsAppFloat from "@/components/portfolio/WhatsAppFloat";
import { useI18n } from "@/i18n";
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { t } = useI18n();
  const whatsappHref = `https://wa.me/${t.contact.whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;

  const footerLinks = [
    { href: "https://github.com/oiagocunha", label: "GitHub", icon: Github },
    { href: "https://linkedin.com/in/oiagocunha", label: "LinkedIn", icon: Linkedin },
    { href: "https://instagram.com/oiagocunha", label: "Instagram", icon: Instagram },
    { href: "mailto:dev.iagocunha@gmail.com", label: "Email", icon: Mail },
    { href: whatsappHref, label: "WhatsApp", icon: MessageCircle },
  ];

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
      <WhatsAppFloat />
      <footer className="border-t py-10">
        <div className="container flex flex-col items-center gap-4 text-center">
          <div>
            <p className="font-semibold text-foreground">{t.brand.name}</p>
            <p className="text-sm text-muted-foreground">{t.brand.byline}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {footerLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-accent/40"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {label}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};
