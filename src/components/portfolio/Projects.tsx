import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WorkEntry } from "@/components/shared/WorkEntry";
import { whatsappUrl } from "@/lib/contact";

/**
 * Project list. `professional` (/perfil) shows technical cases;
 * `commercial` (/servicos) shows client and demo work with screenshots and a WhatsApp link.
 */
const Projects = ({ audience = "commercial" }: { audience?: "commercial" | "professional" }) => {
  const { t } = useI18n();
  const professional = audience === "professional";
  const projects = professional ? t.projects.earlyWork : t.projects.featured;

  return (
    <section id="projetos" aria-labelledby="projects-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading
          id="projects-title"
          title={professional ? t.projects.earlyWorkLabel : t.projects.title}
        >
          {professional ? t.projects.professionalSubtitle : t.projects.subtitle}
        </SectionHeading>
        <ol>
          {projects.map((project) => (
            <WorkEntry
              key={project.iconKey}
              project={project}
              forClients={!professional}
              contact={
                professional
                  ? undefined
                  : {
                      href: whatsappUrl(t.contact.whatsappNumber, project.whatsappMessage, t.contact.whatsappMessage),
                      label: t.projects.similarWhatsappCta,
                    }
              }
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
