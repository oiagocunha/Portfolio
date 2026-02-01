import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/i18n";
import { spacing, typography } from "@/constants/design-tokens";

const Technologies = () => {
  const { t } = useI18n();
  return (
    <section id="tecnologias" className={`container ${spacing.section}`}>
      <h2 className={`text-center ${typography.h2}`}>
        {t.technologies.title} <span className="gradient-text">{t.technologies.subtitle}</span>.
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {t.technologies.categories.map((category, index) => (
          <Card key={index} className="animate-fade-in">
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {category.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
