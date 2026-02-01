import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { TalkCard } from "@/components/shared";
import { spacing, typography } from "@/constants/design-tokens";

const Talks = () => {
  const { t } = useI18n();

  return (
    <section id="palestras" className={`container ${spacing.section} bg-muted/30`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>
          {t.talks.title} <span className="gradient-text">{t.talks.subtitle}</span>.
        </h2>
      </FadeInSection>

      <div className="mt-12 space-y-6">
        {t.talks.items.map((talk, index) => (
          <FadeInSection key={index} delay={index * 0.1}>
            <TalkCard {...talk} attendeesLabel={t.talks.attendees} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Talks;
