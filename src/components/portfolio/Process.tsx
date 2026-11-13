import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Process = () => {
  const { t } = useI18n();

  return (
    <section id="como-trabalho" aria-labelledby="process-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="process-title" title={t.process.title}>
          {t.process.subtitle}
        </SectionHeading>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="border-t pt-4">
              <p className="font-mono text-xs text-muted-foreground" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-semibold">{step.title}</h3>
              <p className="mt-1 text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
