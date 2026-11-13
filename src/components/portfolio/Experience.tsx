import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Experience = () => {
  const { t } = useI18n();

  return (
    <section id="experiencia" aria-labelledby="experience-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="experience-title" title={t.experience.title} />
        <ol>
          {t.experience.items.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="grid gap-3 border-t py-6 last:border-b md:grid-cols-[14rem_1fr] md:gap-8"
            >
              <p className="font-mono text-xs text-muted-foreground md:pt-1.5">{job.period}</p>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{job.role}</h3>
                <p className="mt-0.5 text-muted-foreground">{job.company}</p>
                <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 marker:text-muted-foreground">
                  {job.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {job.technologies.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
