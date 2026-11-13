import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
import { ROUTES, localizedPath } from "@/lib/paths";
import { whatsappUrl } from "@/lib/contact";
import { accentLinkClass } from "@/lib/styles";

/** First fold of /servicos: the business offer, with WhatsApp as the main action. No motion. */
const Hero = () => {
  const { t, locale } = useI18n();
  const whatsappHref = whatsappUrl(t.contact.whatsappNumber, t.contact.whatsappMessage);

  return (
    <section id="hero" aria-labelledby="services-hero-title" className="container pb-12 pt-24 md:pb-16 md:pt-32">
      <p className="font-mono text-xs text-muted-foreground">
        {t.brand.name} · {t.brand.byline}
      </p>
      <h1 id="services-hero-title" className="mt-3 max-w-3xl text-display font-semibold">
        {t.hero.headline}
      </h1>
      <p className="mt-5 max-w-measure text-lg leading-relaxed text-muted-foreground">{t.hero.description}</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="hero" size="lg">
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden />
            {t.hero.primaryCta}
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#projetos">{t.hero.secondaryCta}</a>
        </Button>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        {t.hero.recruitersLabel}
        <Link
          className={accentLinkClass}
          to={localizedPath(ROUTES.profile, locale)}
        >
          {t.hero.recruitersLink}
        </Link>
      </p>
    </section>
  );
};

export default Hero;
