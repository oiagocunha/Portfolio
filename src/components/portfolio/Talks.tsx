import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation, Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";

const Talks = () => {
  const { t } = useI18n();

  return (
    <section id="palestras" className="container py-16 md:py-24 bg-muted/30">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t.talks.title} <span className="gradient-text">{t.talks.subtitle}</span>.
        </h2>
      </FadeInSection>

      <div className="mt-12 space-y-6">
        {t.talks.items.map((talk, index) => (
          <FadeInSection key={index} delay={index * 0.1}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-start gap-3 text-xl md:text-2xl mb-2">
                      <Presentation className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>{talk.title}</span>
                    </CardTitle>
                    <p className="text-base font-semibold text-accent">{talk.event}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {talk.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {talk.location}
                    </div>
                    {talk.attendees && (
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {talk.attendees} {t.talks.attendees}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">{talk.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {talk.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
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

export default Talks;
