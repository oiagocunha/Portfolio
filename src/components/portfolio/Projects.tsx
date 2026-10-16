import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { ProjectCard } from "@/components/shared";
import { projectIcons } from "@/constants/icons";
import { spacing, typography } from "@/constants/design-tokens";
import type { ProjectItem, ProjectStatus } from "@/i18n/types";

const Projects = ({ audience = "commercial" }: { audience?: "commercial" | "professional" }) => {
  const { t } = useI18n();

  const buildWhatsappHref = (message?: string) => {
    const text = message?.trim() || t.contact.whatsappMessage;
    return `https://wa.me/${t.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const renderGrid = (
    items: ProjectItem[],
    mode: "commercial" | "technical",
    withWhatsapp: boolean,
  ) => (
    <div
      className={`mt-8 grid gap-4 ${
        mode === "commercial"
          ? "grid-cols-1 md:grid-cols-2"
          : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((project, index) => {
        const status = project.status as ProjectStatus | undefined;
        const statusLabel =
          status && status !== "live" ? t.projects.statusLabels[status] : undefined;
        const kindLabel = project.kind ? t.projects.kindLabels[project.kind] : undefined;

        return (
          <FadeInSection key={project.title} delay={index * 0.1}>
            <ProjectCard
              {...project}
              icon={projectIcons[project.iconKey]}
              demoLabel={t.projects.demo}
              docsLabel={t.projects.docs}
              codeLabel={t.projects.code}
              caseStudyLabel={t.projects.caseStudy}
              problemLabel={t.projects.problemLabel}
              solutionLabel={t.projects.solutionLabel}
              deliveryLabel={t.projects.deliveryLabel}
              statusLabel={statusLabel}
              kindLabel={kindLabel}
              mediaPlayLabel={t.a11y.openMedia}
              mode={mode}
              whatsappHref={withWhatsapp ? buildWhatsappHref(project.whatsappMessage) : undefined}
              whatsappCta={withWhatsapp ? t.projects.similarWhatsappCta : undefined}
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
          {audience === "professional" ? t.projects.professionalSubtitle : t.projects.subtitle}
        </p>
      </FadeInSection>

      {audience === "commercial" && renderGrid(t.projects.featured, "commercial", true)}

      {audience === "professional" && t.projects.earlyWork.length > 0 && (
        <>
          <FadeInSection delay={0.05}>
            <h3 className="mt-14 text-lg font-semibold tracking-wide text-foreground/90">
              {t.projects.earlyWorkLabel}
            </h3>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              {t.projects.earlyWorkSubtitle}
            </p>
          </FadeInSection>
          {renderGrid(t.projects.earlyWork, "technical", false)}
        </>
      )}
    </section>
  );
};

export default Projects;
