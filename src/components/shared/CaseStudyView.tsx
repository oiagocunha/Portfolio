import { useI18n } from "@/i18n";
import { localizedPath } from "@/lib/paths";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { MermaidDiagram } from "@/components/shared/MermaidDiagram";
import { CaseStudyText } from "@/components/shared/CaseStudyText";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import type { CaseStudyPage } from "@/i18n/types";
import { useState } from "react";

interface CaseStudyViewProps {
  content: CaseStudyPage;
  highlightTag?: string;
}

const FALLBACK_IMAGE = "/images/placeholder-project.svg";

export const CaseStudyView = ({ content, highlightTag }: CaseStudyViewProps) => {
  const { locale } = useI18n();
  const [imgSrc, setImgSrc] = useState(content.image || FALLBACK_IMAGE);
  const cs = content;
  const contactPath = `${localizedPath("/", locale)}#contato`;

  return (
    <MainLayout>
      <header className="container pb-12 pt-24 md:pb-16 md:pt-32">
        <p className="font-mono text-xs text-muted-foreground">{cs.label}</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          {cs.title}
        </h1>
        <p className="mt-5 max-w-measure text-lg leading-relaxed text-muted-foreground">{cs.subtitle}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
          {cs.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded border px-2 py-0.5 font-mono text-xs ${
                tag === highlightTag ? "border-accent text-accent" : "text-muted-foreground"
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <section className="border-t py-12 md:py-16">
        <div className="container grid gap-8 lg:grid-cols-3">
          {cs.summaryCards.map((card) => (
            <div key={card.title}>
              <h2 className="font-semibold">{card.title}</h2>
              <div className="mt-2 space-y-2 text-muted-foreground">
                {card.paragraphs.map((paragraph) => (
                  <CaseStudyText key={paragraph} text={paragraph} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {(cs.image || cs.media) && (
        <section className="container pb-12">
          {cs.media && /\.(mp4|webm)$/i.test(cs.media) ? (
            <video
              src={cs.media}
              poster={cs.image}
              controls
              className="w-full max-w-4xl rounded-lg border"
              aria-label={cs.imageAlt}
            />
          ) : (
            <ResponsiveImage
              src={cs.media || imgSrc}
              sizes="(min-width: 1024px) 896px, calc(100vw - 2rem)"
              alt={cs.imageAlt || cs.title}
              className="w-full max-w-4xl rounded-lg border"
              loading="lazy"
              width={1280}
              height={720}
              onError={() => setImgSrc(FALLBACK_IMAGE)}
            />
          )}
        </section>
      )}

      <section aria-labelledby="architecture-title" className="border-t py-12 md:py-16">
        <div className="container space-y-6">
          <SectionHeading id="architecture-title" title={cs.architectureTitle} />
          <MermaidDiagram title={cs.diagramTitles.systemFlow} chart={cs.charts.systemFlow} />
          <MermaidDiagram
            title={cs.diagramTitles.backendArchitecture}
            chart={cs.charts.backendArchitecture}
          />
          <MermaidDiagram title={cs.diagramTitles.sequence} chart={cs.charts.sequence} />
          {cs.charts.failureTree && cs.diagramTitles.failureTree && (
            <MermaidDiagram title={cs.diagramTitles.failureTree} chart={cs.charts.failureTree} />
          )}
        </div>
      </section>

      <section className="border-t py-12 md:py-16">
        <div className="container grid gap-8 lg:grid-cols-2">
          {cs.detailCards.map((card) => (
            <div key={card.title}>
              <h2 className="font-semibold">{card.title}</h2>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-muted-foreground">
                {card.items.map((item) => (
                  <li key={item}>
                    <CaseStudyText text={item} className="inline" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="role-title" className="border-t pb-20 pt-12 md:pt-16">
        <div className="container">
          <SectionHeading id="role-title" title={cs.roleTitle} />
          <dl className="grid gap-x-8 gap-y-4 md:grid-cols-[14rem_1fr]">
            {cs.roles.map((role) => (
              <div key={role.label} className="contents">
                <dt className="font-mono text-xs text-muted-foreground md:pt-1">{role.label}</dt>
                <dd className="-mt-3 max-w-3xl md:mt-0">{role.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            {cs.cta.demo && cs.demoUrl && (
              <Button asChild variant="hero" size="lg">
                <a href={cs.demoUrl} target="_blank" rel="noreferrer">
                  {cs.cta.demo}
                </a>
              </Button>
            )}
            {cs.cta.github && cs.githubUrl && (
              <Button asChild variant="outline" size="lg">
                <a href={cs.githubUrl} target="_blank" rel="noreferrer">
                  {cs.cta.github}
                </a>
              </Button>
            )}
            <Button asChild variant={cs.cta.demo ? "outline" : "hero"} size="lg">
              <Link to={contactPath}>{cs.cta.contact}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to={`${localizedPath("/perfil", locale)}#projetos`}>{cs.cta.backToProjects}</Link>
            </Button>
          </div>
          {cs.cta.demo && cs.demoUrl && cs.demoNote && (
            <p className="mt-3 max-w-2xl font-mono text-xs text-muted-foreground">{cs.demoNote}</p>
          )}
        </div>
      </section>
    </MainLayout>
  );
};
