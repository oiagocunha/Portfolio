import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/i18n";

const Specialties = () => {
  const { t } = useI18n();
  return (
    <section id="especialidades" className="container py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
        {t.specialties.title} <span className="gradient-text">{t.specialties.subtitle}</span>.
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.specialties.items.map((s) => (
          <Card key={s.title} className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden>
                  {s.emoji}
                </span>
                <span>{s.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
