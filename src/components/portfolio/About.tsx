import { useI18n } from "@/i18n";
import { SocialLinks } from "@/components/shared";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";

const About = () => {
  const { t } = useI18n();

  return (
    <section id="sobre" aria-labelledby="about-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="about-title" title={t.about.title}>
          {t.about.subtitle}
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-[14rem_1fr] md:gap-8">
          <ResponsiveImage
            src="/images/Conquista.png"
            alt={t.about.imageAlt}
            sizes="(min-width: 768px) 224px, 320px"
            loading="lazy"
            width={780}
            height={1138}
            className="w-full max-w-xs rounded-lg border object-cover md:max-w-none"
          />
          <div className="space-y-4">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-measure">
                {paragraph}
              </p>
            ))}
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
