import { useMemo, useState } from "react";
import FadeInSection from "./FadeInSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { spacing, typography } from "@/constants/design-tokens";

const workflowStages = [
  {
    id: "ingestion",
    title: "1. Ingestao de evento",
    tech: ["Kafka", "Webhook", "FastAPI"],
    goal: "Receber eventos com idempotencia e rastreabilidade.",
  },
  {
    id: "orchestration",
    title: "2. Orquestracao resiliente",
    tech: ["Temporal", "Retry", "Backoff"],
    goal: "Executar workflow distribuido com controle de falhas transientes.",
  },
  {
    id: "automation",
    title: "3. Automacao operacional",
    tech: ["n8n", "Integracoes", "Notificacoes"],
    goal: "Disparar automacoes de negocio com reducao de tarefas manuais.",
  },
  {
    id: "recovery",
    title: "4. Recuperacao e observabilidade",
    tech: ["DLQ", "Logs", "Metricas"],
    goal: "Isolar falhas, reprocessar mensagens e manter SLOs de confiabilidade.",
  },
];

const WorkflowShowcase = () => {
  const [activeStage, setActiveStage] = useState(workflowStages[0].id);

  const selected = useMemo(
    () => workflowStages.find((stage) => stage.id === activeStage) ?? workflowStages[0],
    [activeStage],
  );

  return (
    <section className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>Visualização de Workflow</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
          Simulacao interativa do tipo de arquitetura que eu implemento em producao para automacao, resiliencia e escalabilidade.
        </p>
      </FadeInSection>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <FadeInSection delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle>Fluxo Temporal + Kafka + n8n</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {workflowStages.map((stage) => {
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
                <p><strong>Impacto esperado:</strong> menor taxa de erro operacional, maior confiabilidade em workflows assíncronos e recuperação rápida de falhas.</p>
              </div>
              <Button asChild variant="hero">
                <Link to="/case-study/Chat-platform">Ver arquitetura detalhada</Link>
              </Button>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>
    </section>
  );
};

export default WorkflowShowcase;
