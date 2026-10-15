import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { spacing, typography } from "@/constants/design-tokens";

const Services = () => {
  const { t, locale } = useI18n();

  return (
    <section id="servicos" className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>{t.services.title}</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
          {t.services.subtitle}
        </p>
      </FadeInSection>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {t.services.items.map((service, index) => (
          <FadeInSection key={service.title} delay={index * 0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div>
                  <p className="mb-2 text-sm font-medium text-foreground">{t.services.whenLabel}</p>
                  <ul className="space-y-1.5">
                    {service.examples.map((example) => (
                      <li key={example} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  className="inline-block text-sm text-accent underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://wa.me/${t.contact.whatsappNumber}?text=${encodeURIComponent(
                    (locale === "pt"
                      ? "Olá, Iago! Quero conversar sobre: "
                      : "Hi Iago! I would like to discuss: ") + service.title,
                  )}`}
                >
                  {locale === "pt" ? "Conversar sobre esta entrega" : "Discuss this delivery"}
                </a>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>
      <p className="mt-8 max-w-3xl mx-auto text-sm text-muted-foreground text-center">
        {locale === "pt"
          ? "A proposta define entregáveis, prazo, investimento, revisões e suporte após a entrega. Hospedagem, domínio e serviços externos entram discriminados quando o projeto exigir."
          : "The proposal covers deliverables, timeline, investment, revisions, and post-delivery support. Hosting, domain, and third-party costs are listed when the project needs them."}
      </p>
    </section>
  );
};

export default Services;
