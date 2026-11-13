import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WorkEntry } from "@/components/shared/WorkEntry";
import { pickProjects } from "@/lib/projects";

/** Curated mix of technical and business work, in the order set by `home.selectedWork`. */
const SelectedWork = () => {
  const { t } = useI18n();
  const projects = pickProjects([...t.projects.earlyWork, ...t.projects.featured], t.home.selectedWork);

  return (
    <section id="trabalho" aria-labelledby="work-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="work-title" title={t.home.workTitle}>
          {t.home.workSubtitle}
        </SectionHeading>
        <ol>
          {projects.map((project) => (
            <WorkEntry key={project.iconKey} project={project} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SelectedWork;
