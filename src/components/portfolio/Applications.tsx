import { useI18n } from "@/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";

const Applications = () => {
  const { t } = useI18n();

  return (
    <section id="aplicacoes" aria-labelledby="applications-title" className="border-t py-16 md:py-20">
      <div className="container">
        <SectionHeading id="applications-title" title={t.applications.title} />
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {t.applications.items.map((item) => (
            <li key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Applications;
