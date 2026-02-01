import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { CertificationCard } from "@/components/shared";
import { spacing, typography } from "@/constants/design-tokens";

const Certifications = () => {
  const { t } = useI18n();

  return (
    <section id="certificacoes" className={`container ${spacing.section}`}>
      <FadeInSection>
        <h2 className={`text-center ${typography.h2}`}>
          {t.certifications.title} <span className="gradient-text">{t.certifications.subtitle}</span>.
        </h2>
      </FadeInSection>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {t.certifications.items.map((cert, index) => (
          <FadeInSection key={index} delay={index * 0.1}>
            <CertificationCard {...cert} viewCertLabel={t.certifications.viewCert} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
