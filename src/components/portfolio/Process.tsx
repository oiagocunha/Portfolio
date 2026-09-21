import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { spacing, typography } from "@/constants/design-tokens";

const Process = () => {
  const { t } = useI18n();

  return (
    <section id="como-trabalho" className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>{t.process.title}</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
          {t.process.subtitle}
        </p>
      </FadeInSection>

      <ol className="mt-10 mx-auto max-w-3xl space-y-6">
        {t.process.steps.map((step, index) => (
          <FadeInSection key={step.title} delay={index * 0.06}>
            <li className="flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-sm font-bold text-primary-foreground"
                aria-hidden
              >
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-muted-foreground">{step.description}</p>
              </div>
            </li>
          </FadeInSection>
        ))}
      </ol>
    </section>
  );
};

export default Process;
