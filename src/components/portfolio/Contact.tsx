import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EMAIL, LINKEDIN_URL, whatsappUrl } from "@/lib/contact";
import { mutedLinkClass } from "@/lib/styles";

/** Contact block of /servicos: WhatsApp first, then the other channels. */
const Contact = () => {
  const { t } = useI18n();
  const whatsappHref = whatsappUrl(t.contact.whatsappNumber, t.contact.whatsappMessage);

  const channels = [
    { label: t.contact.whatsapp, value: t.contact.whatsappDisplay, href: whatsappHref },
    { label: t.contact.email, value: EMAIL, href: `mailto:${EMAIL}` },
    { label: "LinkedIn", value: "/in/oiagocunha", href: LINKEDIN_URL },
    { label: t.contact.location, value: t.contact.locationText },
  ];

  return (
    <section id="contato" aria-labelledby="services-contact-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="services-contact-title" title={t.contact.title}>
          {t.contact.reassurance}
        </SectionHeading>
        <div className="md:ml-[16rem]">
          <Button asChild variant="hero" size="lg">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden />
              {t.contact.whatsappCta}
            </a>
          </Button>
          <dl className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {channels.map(({ label, value, href }) => {
              const external = href && !href.startsWith("mailto:");
              return (
                <div key={label}>
                  <dt className="font-mono text-xs text-muted-foreground">{label}</dt>
                  <dd>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className={`${mutedLinkClass} break-all text-foreground`}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-11 items-center">{value}</span>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Contact;
