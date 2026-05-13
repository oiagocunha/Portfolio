import { useEffect, useId, useRef } from "react";

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export const MermaidDiagram = ({ chart, title }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId().replace(/:/g, "");

  useEffect(() => {
    let mounted = true;

    const render = async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        securityLevel: "strict",
        fontFamily: "inherit",
      });

      if (!mounted || !containerRef.current) return;

      const { svg } = await mermaid.render(`mermaid-${uniqueId}`, chart.trim());
      containerRef.current.innerHTML = svg;
    };

    render().catch((error) => {
      console.error("Mermaid render error:", error);
      if (containerRef.current) {
        containerRef.current.innerHTML = `<pre class="text-xs overflow-x-auto p-4 text-destructive">Erro ao renderizar diagrama.</pre>`;
      }
    });

    return () => {
      mounted = false;
    };
  }, [chart, uniqueId]);

  return (
    <figure className="rounded-lg border bg-muted/20 p-4">
      {title && <figcaption className="mb-3 text-sm font-medium text-foreground">{title}</figcaption>}
      <div ref={containerRef} className="overflow-x-auto [&_svg]:mx-auto" />
    </figure>
  );
};
