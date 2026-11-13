import { useState } from "react";
import { Link } from "react-router-dom";
import { MermaidDiagram } from "@/components/shared/MermaidDiagram";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useI18n } from "@/i18n";
import { localizedPath } from "@/lib/paths";
import { accentLinkClass } from "@/lib/styles";

const WorkflowShowcase = () => {
  const { t, locale } = useI18n();
  const w = t.workflowShowcase;
  const [activeId, setActiveId] = useState(w.stages[0].id);
  const selected = w.stages.find((stage) => stage.id === activeId) ?? w.stages[0];

  return (
    <section id="fluxo" aria-labelledby="workflow-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="workflow-title" title={w.title}>
          {w.subtitle}
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-8">
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground">{w.cardTitle}</p>
            <ul className="space-y-2">
              {w.stages.map((stage) => {
                const active = stage.id === activeId;
                return (
                  <li key={stage.id}>
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setActiveId(stage.id)}
                      className={`min-h-11 w-full rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors ${
                        active ? "border-accent bg-card" : "hover:bg-secondary"
                      }`}
                    >
                      {stage.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold">{selected.title}</h3>
            <p className="mt-1 max-w-2xl text-muted-foreground">{selected.goal}</p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">{selected.tech.join(" · ")}</p>
            <div className="mt-4">
              <MermaidDiagram title={w.diagramTitle} chart={selected.diagram} />
            </div>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              <strong className="font-semibold text-foreground">{w.inPracticeLabel}</strong>{" "}
              {w.inPracticeText}
            </p>
            <Link
              to={localizedPath("/case-study/chat-platform", locale)}
              className={`${accentLinkClass} mt-4 text-sm`}
            >
              {w.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowShowcase;
