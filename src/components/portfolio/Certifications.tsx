import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { CertificationCard } from "@/components/shared";

const Certifications = () => {
  const { t } = useI18n();

  return (
    <section id="certificacoes" className="container py-10 md:py-14">
      <FadeInSection>
        <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight">
          {t.certifications.title}{" "}
          <span className="gradient-text">{t.certifications.subtitle}</span>.
        </h2>
      </FadeInSection>

      <div className="mt-8 grid gap-4 md:grid-cols-2 opacity-90">
        {t.certifications.items.map((cert, index) => (
          <FadeInSection key={index} delay={index * 0.05}>
            <CertificationCard {...cert} viewCertLabel={t.certifications.viewCert} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
