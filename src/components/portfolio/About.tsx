import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { SocialLinks, StatCard } from "@/components/shared";

const About = () => {
  const { t, locale } = useI18n();

  return (
    <section id="sobre" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">{t.about.title}</h2>
      </FadeInSection>

      {/* Stats Section */}
      <FadeInSection delay={0.2}>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {t.about.stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </FadeInSection>

      <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
        <FadeInSection delay={0.1} direction="left">
          <div className="order-2 md:order-1">
            <img
              src="/images/Conquista.png"
              alt={locale === 'pt' ? "Conquista ou certificado de Iago Cunha" : "Iago Cunha's achievement or certificate"}
              loading="lazy"
              className="h-[60dvh] max-w-md mx-auto md:max-w-none rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} direction="right">
          <article className="space-y-4 order-1 md:order-2">
            {t.about.paragraphs.map((p, i) => (
              <p className="text-base md:text-lg text-muted-foreground" key={i}>{p}</p>
            ))}

            <SocialLinks />
          </article>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;