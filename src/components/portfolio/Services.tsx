import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { whatsappUrl } from "@/lib/contact";
import { accentLinkClass } from "@/lib/styles";

const Services = () => {
  const { t } = useI18n();

  return (
    <section id="servicos" aria-labelledby="services-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="services-title" title={t.services.title}>
          {t.services.subtitle}
        </SectionHeading>

        <ul className="grid gap-4 lg:grid-cols-3">
          {t.services.items.map((service) => (
            <li key={service.title} className="flex flex-col rounded-lg border bg-card p-5 md:p-6">
              <h3 className="text-lg font-semibold leading-snug">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
              <p className="mt-4 font-mono text-xs text-muted-foreground">{t.services.whenLabel}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm marker:text-muted-foreground">
                {service.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <a
                className={`${accentLinkClass} mt-auto pt-3 text-sm`}
                target="_blank"
                rel="noreferrer"
                href={whatsappUrl(t.contact.whatsappNumber, t.services.whatsappPrefix + service.title)}
              >
                {t.services.talkCta}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">{t.services.footnote}</p>
      </div>
    </section>
  );
};

export default Services;
