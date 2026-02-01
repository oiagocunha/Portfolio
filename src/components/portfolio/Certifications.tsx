import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { CertificationCard } from "@/components/shared";

const Certifications = () => {
  const { t } = useI18n();

  return (
    <section id="certificacoes" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
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
