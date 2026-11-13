import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { MainLayout } from "@/layouts/MainLayout";
import { ROUTES, localizedPath } from "@/lib/paths";
import { accentLinkClass } from "@/lib/styles";

const NotFound = () => {
  const { t, locale } = useI18n();

  return (
    <MainLayout>
      <section className="container min-h-[60vh] pb-16 pt-28 md:pt-32">
        <p className="font-mono text-xs text-muted-foreground">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{t.notFound.title}</h1>
        <p className="mt-4 max-w-measure text-muted-foreground">{t.notFound.description}</p>
        <Link to={localizedPath(ROUTES.home, locale)} className={`${accentLinkClass} mt-4`}>
          {t.notFound.backHome}
        </Link>
      </section>
    </MainLayout>
  );
};

export default NotFound;
