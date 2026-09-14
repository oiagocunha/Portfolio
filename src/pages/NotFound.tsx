import { useI18n } from "@/i18n";

const NotFound = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-2">{t.notFound.title}</p>
        <p className="text-sm text-muted-foreground mb-6">{t.notFound.description}</p>
        <a href="/" className="text-accent underline hover:opacity-90">
          {t.notFound.backHome}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
