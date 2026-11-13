import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  title: string;
  children?: ReactNode;
}

/** Left-aligned section title with an optional intro, in the two-column rhythm of the redesign. */
export const SectionHeading = ({ id, title, children }: SectionHeadingProps) => (
  <div className="mb-8 grid gap-2 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-8">
    <h2 id={id} className="text-2xl font-semibold tracking-tight md:text-3xl">
      {title}
    </h2>
    {children && <p className="max-w-measure text-muted-foreground">{children}</p>}
  </div>
);
