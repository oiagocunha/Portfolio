import { useEffect, useId, useRef, useState } from "react";
import { useDocumentTheme } from "@/hooks/use-document-theme";
import { useI18n } from "@/i18n";

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export const MermaidDiagram = ({ chart, title }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId().replace(/:/g, "");
  const theme = useDocumentTheme();
  const { t } = useI18n();
  const [sourceOpen, setSourceOpen] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let mounted = true;
    setFailed(false);

    const render = async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: theme === "dark" ? "dark" : "default",
        securityLevel: "strict",
        fontFamily: "inherit",
      });

      if (!mounted || !containerRef.current) return;

      const { svg } = await mermaid.render(`mermaid-${uniqueId}-${theme}`, chart.trim());
      if (!mounted || !containerRef.current) return;
      containerRef.current.innerHTML = svg;
    };

    render().catch((error) => {
      console.error("Mermaid render error:", error);
      setFailed(true);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    });

    return () => {
      mounted = false;
    };
  }, [chart, uniqueId, theme]);

  return (
    <figure className="rounded-lg border bg-muted/20 p-4">
      {title && (
        <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-foreground">
          <span>{title}</span>
          <button
            type="button"
            className="text-xs font-normal text-muted-foreground underline-offset-2 hover:underline"
            onClick={() => setSourceOpen((open) => !open)}
          >
            {sourceOpen ? t.a11y.hideDiagramSource : t.a11y.showDiagramSource}
          </button>
        </figcaption>
      )}
      {failed ? (
        <pre className="overflow-x-auto rounded-md bg-muted/40 p-4 text-xs text-destructive">
          {t.a11y.diagramError}
        </pre>
      ) : (
        <div ref={containerRef} className="overflow-x-auto [&_svg]:mx-auto" />
      )}
      {sourceOpen && (
        <pre className="mt-3 overflow-x-auto rounded-md border bg-background p-3 text-xs text-muted-foreground">
          {chart.trim()}
        </pre>
      )}
    </figure>
  );
};
