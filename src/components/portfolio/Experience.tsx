import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { ExperienceCard } from "@/components/shared";

const Experience = () => {
  const { t } = useI18n();

  return (
    <section id="experiencia" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t.experience.title} <span className="gradient-text">{t.experience.subtitle}</span>.
        </h2>
      </FadeInSection>

      <div className="mt-12 space-y-8">
        {t.experience.items.map((exp, index) => (
          <FadeInSection key={index} delay={index * 0.1}>
            <ExperienceCard {...exp} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Experience;
