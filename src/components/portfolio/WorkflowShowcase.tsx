import { useMemo, useState } from "react";
import FadeInSection from "./FadeInSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { spacing, typography } from "@/constants/design-tokens";
import { useI18n } from "@/i18n";

const WorkflowShowcase = () => {
  const { t } = useI18n();
  const { stages } = t.workflowShowcase;
  const [activeStage, setActiveStage] = useState(stages[0].id);

  const selected = useMemo(
    () => stages.find((stage) => stage.id === activeStage) ?? stages[0],
    [activeStage, stages],
  );

  return (
    <section className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>{t.workflowShowcase.title}</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
          {t.workflowShowcase.subtitle}
        </p>
      </FadeInSection>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <FadeInSection delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle>{t.workflowShowcase.cardTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {stages.map((stage) => {
                const isActive = stage.id === activeStage;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    className={`w-full rounded-lg border p-3 text-left transition ${
                      isActive ? "border-primary bg-primary/10" : "hover:bg-muted/40"
                    }`}
                  >
                    <p className="font-medium">{stage.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stage.goal}</p>
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{selected.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{selected.goal}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
                <p>
                  <strong>{t.workflowShowcase.inPracticeLabel}</strong>{" "}
                  {t.workflowShowcase.inPracticeText}
                </p>
              </div>
              <Button asChild variant="hero">
                <Link to="/case-study/chat-platform">{t.workflowShowcase.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>
    </section>
  );
};

export default WorkflowShowcase;
