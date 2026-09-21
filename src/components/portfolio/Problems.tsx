import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { spacing, typography } from "@/constants/design-tokens";

const Problems = () => {
  const { t } = useI18n();

  return (
    <section id="problemas" className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>{t.problems.title}</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
          {t.problems.subtitle}
        </p>
      </FadeInSection>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.problems.items.map((item, index) => (
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

      <FadeInSection delay={0.2}>
        <p className="mt-10 text-center text-base font-medium text-foreground/90 max-w-2xl mx-auto">
          {t.problems.bridge}
        </p>
      </FadeInSection>
    </section>
  );
};

export default Problems;
