import { Download } from "lucide-react";
import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EMAIL, LINKEDIN_URL, whatsappUrl } from "@/lib/contact";

const HomeContact = () => {
  const { t } = useI18n();
  const whatsappHref = whatsappUrl(t.contact.whatsappNumber, t.contact.whatsappMessage);
  const channels = [
    { label: t.contact.email, detail: EMAIL, href: `mailto:${EMAIL}` },
    { label: "LinkedIn", detail: "/in/oiagocunha", href: LINKEDIN_URL },
    { label: t.contact.whatsapp, detail: t.home.whatsappNote, href: whatsappHref },
  ];

  return (
    <section id="contato" aria-labelledby="contact-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="contact-title" title={t.home.contactTitle}>
          {t.home.contactSubtitle}
        </SectionHeading>
        <ul className="grid gap-4 md:grid-cols-3">
          {channels.map((channel) => {
            const external = !channel.href.startsWith("mailto:");
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="block rounded-lg border bg-card p-4 transition-colors hover:border-accent"
                >
                  <span className="block font-semibold">{channel.label}</span>
                  <span className="block break-all font-mono text-xs text-muted-foreground">
                    {channel.detail}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={t.professional.resumeHref}
          download
          data-event="resume_download"
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Download className="h-4 w-4" aria-hidden />
          {t.professional.resumeLabel}
        </a>
      </div>
    </section>
  );
};

export default HomeContact;
