import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { ROUTES, localizedPath } from "@/lib/paths";

/** First fold: who Iago is, then two explicit paths (recruiters, businesses). No motion. */
const HomeHero = () => {
  const { t, locale } = useI18n();
  const h = t.home;
  const paths = [
    { ...h.paths.recruiters, to: localizedPath(ROUTES.profile, locale) },
    { ...h.paths.companies, to: localizedPath(ROUTES.services, locale) },
  ];

  return (
    <section id="hero" aria-labelledby="hero-title" className="container pb-12 pt-24 md:pb-16 md:pt-32">
      <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-accent" />
        {h.status}
      </p>
      <h1 id="hero-title" className="mt-3 text-display font-semibold md:mt-4">
        {t.brand.professionalName}
      </h1>
      <p className="mt-2 text-xl font-medium leading-snug md:mt-3 md:text-2xl">{h.role}</p>
      <p className="mt-4 max-w-measure text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">{h.lede}</p>
      <p className="mt-3 font-mono text-xs text-muted-foreground md:mt-4">{h.meta}</p>

      <h2 className="sr-only">{h.pathsLabel}</h2>
      <div className="mt-6 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-4">
        {paths.map((path) => (
          <Link
            key={path.to}
            to={path.to}
            className="group flex flex-col gap-2 rounded-lg border bg-card p-4 transition-colors hover:border-accent md:gap-3 md:p-6"
          >
            <span className="font-mono text-xs text-muted-foreground">{path.eyebrow}</span>
            <span className="text-lg font-semibold leading-tight md:text-2xl">{path.title}</span>
            <span className="hidden text-muted-foreground md:block">{path.description}</span>
            <ul className="hidden flex-wrap gap-2 md:flex" aria-label={path.eyebrow}>
              {path.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <span className="mt-auto font-medium text-accent md:pt-2">
              {path.cta} <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
