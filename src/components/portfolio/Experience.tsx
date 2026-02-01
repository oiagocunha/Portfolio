import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";

const Experience = () => {
  const { t } = useI18n();

  return (
    <section id="experiencia" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t.experience.title} <span className="gradient-text">{t.experience.subtitle}</span>.
        </h2>
      </FadeInSection>

      <div className="mt-12 space-y-8">
        {t.experience.items.map((exp, index) => (
          <FadeInSection key={index} delay={index * 0.1}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.role}
                    </CardTitle>
                    <p className="text-lg font-semibold text-accent mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Experience;
