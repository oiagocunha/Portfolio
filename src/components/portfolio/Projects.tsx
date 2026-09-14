import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { ProjectCard } from "@/components/shared";
import { projectIcons } from "@/constants/icons";
import { spacing, typography } from "@/constants/design-tokens";
import type { ProjectItem, ProjectStatus } from "@/i18n/types";

const Projects = () => {
  const { t } = useI18n();

  const renderGrid = (items: ProjectItem[]) => (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => {
        const status = project.status as ProjectStatus | undefined;
        const statusLabel =
          status && status !== "live" ? t.projects.statusLabels[status] : undefined;

        return (
          <FadeInSection key={project.title} delay={index * 0.1}>
            <ProjectCard
              {...project}
              icon={projectIcons[project.iconKey]}
              demoLabel={t.projects.demo}
              docsLabel={t.projects.docs}
              codeLabel={t.projects.code}
              caseStudyLabel={t.projects.caseStudy}
              complexityLabel={t.projects.complexityLabel}
              complexityValue={t.projects.complexity[project.complexity]}
              statusLabel={statusLabel}
              mediaPlayLabel={t.a11y.openMedia}
            />
          </FadeInSection>
        );
      })}
    </div>
  );

  return (
    <section id="projetos" className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>{t.projects.title}</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
          {t.projects.subtitle}
        </p>
      </FadeInSection>

      <FadeInSection delay={0.05}>
        <h3 className="mt-10 text-lg font-semibold tracking-wide text-foreground/90">
          {t.projects.featuredLabel}
        </h3>
      </FadeInSection>
      {renderGrid(t.projects.featured)}

      <FadeInSection delay={0.05}>
        <h3 className="mt-14 text-lg font-semibold tracking-wide text-foreground/90">
          {t.projects.earlyWorkLabel}
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          {t.projects.earlyWorkSubtitle}
        </p>
      </FadeInSection>
      {renderGrid(t.projects.earlyWork)}
    </section>
  );
};

export default Projects;
