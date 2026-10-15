import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { spacing, typography } from "@/constants/design-tokens";

const Applications = () => {
  const { t } = useI18n();

  return (
    <section id="aplicacoes" className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>{t.applications.title}</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
          {t.applications.subtitle}
        </p>
      </FadeInSection>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.applications.items.map((item, index) => (
          <FadeInSection key={item.title} delay={index * 0.05}>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Applications;
