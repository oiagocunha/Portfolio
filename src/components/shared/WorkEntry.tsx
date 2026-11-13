import { Link } from "react-router-dom";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { useI18n } from "@/i18n";
import { localizedPath } from "@/lib/paths";
import { projectTag } from "@/lib/projects";
import { accentLinkClass } from "@/lib/styles";
import type { ProjectItem, ProjectTag } from "@/i18n/types";

const tagTone: Record<ProjectTag, string> = {
  internal: "text-foreground",
  client: "text-accent",
  authored: "text-accent",
  demo: "text-warn",
};

const linkClass = `${accentLinkClass} text-sm`;

interface WorkEntryProps {
  project: ProjectItem;
  /** Client-facing pages also show the screenshot and what the delivery includes. */
  forClients?: boolean;
  /** Extra call to action, e.g. "request something similar" on WhatsApp. */
  contact?: { href: string; label: string };
}

/** One project as a list row: tag, summary, Problem · Role · Stack · Evidence · Limits, then links. */
export const WorkEntry = ({ project, forClients = false, contact }: WorkEntryProps) => {
  const { t, locale } = useI18n();
  const p = t.projects;
  const tag = projectTag(project);

  const facts = [
    [p.problemLabel, project.problem],
    // `solution` describes what I did when no shorter `role` was written.
    [p.roleLabel, project.role ?? project.solution],
    [p.deliveryLabel, forClients && project.impact.length > 0 ? project.impact.join(" · ") : undefined],
    [p.stackLabel, project.technologies.join(" · ")],
    [p.evidenceLabel, project.evidence],
    [p.limitationLabel, project.limitation],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]));

  return (
    <li className="grid gap-3 border-t py-6 last:border-b md:grid-cols-[14rem_1fr] md:gap-8">
      <div className="flex flex-col items-start gap-3">
        {tag && (
          <span
            className={`inline-block rounded border border-current px-2 py-0.5 font-mono text-xs font-medium ${tagTone[tag]}`}
          >
            {p.tagLabels[tag]}
          </span>
        )}
        {forClients && project.image && (
          <ResponsiveImage
            src={project.image}
            alt={project.alt}
            sizes="(min-width: 768px) 224px, calc(100vw - 2rem)"
            loading="lazy"
            width={640}
            height={360}
            className="aspect-video w-full rounded-md border object-cover"
          />
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="mt-2 max-w-2xl">{project.description}</p>
        <dl className="mt-3 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-sm">
          {facts.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="pt-0.5 font-mono text-xs text-muted-foreground">{label}</dt>
              <dd className="max-w-2xl">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-2 flex flex-wrap gap-x-5">
          {project.caseStudyPath && (
            <Link className={linkClass} to={localizedPath(project.caseStudyPath, locale)}>
              {p.caseStudy}
            </Link>
          )}
          {project.demo && (
            <a className={linkClass} href={project.demo} target="_blank" rel="noreferrer">
              {p.demo}
            </a>
          )}
          {project.repo && (
            <a className={linkClass} href={project.repo} target="_blank" rel="noreferrer">
              {p.code}
            </a>
          )}
          {contact && (
            <a className={linkClass} href={contact.href} target="_blank" rel="noreferrer">
              {contact.label}
            </a>
          )}
        </div>
        {project.demo && project.demoNote && (
          <p className="mt-1 max-w-2xl font-mono text-xs text-muted-foreground">{project.demoNote}</p>
        )}
      </div>
    </li>
  );
};
