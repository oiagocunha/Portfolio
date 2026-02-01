import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";

const Certifications = () => {
  const { t } = useI18n();

  return (
    <section id="certificacoes" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t.certifications.title} <span className="gradient-text">{t.certifications.subtitle}</span>.
        </h2>
      </FadeInSection>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {t.certifications.items.map((cert, index) => (
          <FadeInSection key={index} delay={index * 0.1}>
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 text-lg md:text-xl mb-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="line-clamp-2">{cert.title}</span>
                    </CardTitle>
                    <p className="text-sm font-medium text-accent">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">{cert.credential}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group-hover:translate-x-1 duration-300"
                  >
                    {t.certifications.viewCert}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
