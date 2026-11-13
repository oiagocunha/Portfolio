import { useLocation } from "react-router-dom";
import { isServicesPath } from "@/lib/paths";
import { ReactNode } from "react";
import Navbar from "@/components/portfolio/Navbar";
import ScrollTop from "@/components/portfolio/ScrollTop";
import WhatsAppFloat from "@/components/portfolio/WhatsAppFloat";
import { useI18n } from "@/i18n";
import { EMAIL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, whatsappUrl } from "@/lib/contact";
import { mutedLinkClass } from "@/lib/styles";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const services = isServicesPath(useLocation().pathname);
  const { t } = useI18n();
  const whatsappHref = whatsappUrl(t.contact.whatsappNumber, t.contact.whatsappMessage);
  const footerName = services ? t.brand.name : t.brand.professionalName;
  const footerByline = services ? t.brand.byline : t.brand.professionalByline;
  const footerTagline = services ? t.footer.tagline : undefined;

  const footerLinks = [
    { href: GITHUB_URL, label: "GitHub" },
    { href: LINKEDIN_URL, label: "LinkedIn" },
    { href: INSTAGRAM_URL, label: "Instagram" },
    { href: `mailto:${EMAIL}`, label: "Email" },
    { href: whatsappHref, label: "WhatsApp" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow-lg"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <ScrollTop raised={services} />
      {services && <WhatsAppFloat />}
      <footer className="border-t py-10">
        <div className="container grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="font-semibold text-foreground">{footerName}</p>
            <p className="font-mono text-xs text-muted-foreground">{footerByline}</p>
            {footerTagline && <p className="mt-2 text-sm text-muted-foreground">{footerTagline}</p>}
          </div>
          <ul className="flex flex-wrap gap-x-4 md:justify-end">
            {footerLinks.map(({ href, label }) => {
              const external = !href.startsWith("mailto:");
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className={`${mutedLinkClass} text-sm`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="font-mono text-xs text-muted-foreground md:col-span-2">
            © {new Date().getFullYear()} {footerName}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};
