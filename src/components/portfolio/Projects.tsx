import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { ProjectCard } from "@/components/shared";
import { projectIcons } from "@/constants/icons";
import { spacing, typography } from "@/constants/design-tokens";

const Projects = () => {
  const { t } = useI18n();

  return (
    <section id="projetos" className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>{t.projects.title}</h2>
      </FadeInSection>
      
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, index) => (
          <FadeInSection key={project.title} delay={index * 0.1}>
            <ProjectCard {...project} icon={projectIcons[index]} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Projects;
