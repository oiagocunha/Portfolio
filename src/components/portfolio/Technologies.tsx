import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Technologies = () => {
  const { t } = useI18n();

  return (
    <section id="tecnologias" aria-labelledby="stack-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="stack-title" title={t.technologies.title} />
        <dl className="grid gap-x-8 gap-y-4 md:grid-cols-[14rem_1fr]">
          {t.technologies.categories.map((category) => (
            <div key={category.title} className="contents">
              <dt className="font-mono text-xs text-muted-foreground md:pt-1">{category.title}</dt>
              <dd className="-mt-3 md:mt-0">{category.content}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Technologies;
