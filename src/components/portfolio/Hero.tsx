import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { typography } from "@/constants/design-tokens";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

const PROFILE_SRC = "/images/Perfil.jpg";

const Hero = () => {
  const { t } = useI18n();
  const reducedMotion = usePrefersReducedMotion();
  const [profileFailed, setProfileFailed] = useState(false);

  const whatsappHref = `https://wa.me/${t.contact.whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;

  return (
    <section
      id="hero"
      className="relative container grid gap-6 pt-20 pb-10 md:grid-cols-2 md:gap-10 md:pt-24 md:pb-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-10 -z-10 flex justify-center">
        <motion.div
          className="h-56 w-[36rem] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.35),transparent_60%)] blur-2xl"
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <FadeInSection delay={0.05}>
        <article>
          <motion.h1
            className={typography.h1}
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            <span className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {t.brand.name}
            </span>
            <span className="mt-1 block text-base font-medium text-muted-foreground sm:text-lg">
              {t.brand.byline}
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-xl font-semibold leading-snug text-foreground sm:text-2xl md:mt-5"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            {t.hero.headline}
          </motion.p>

          <motion.p
            className="mt-3 max-w-prose text-base text-muted-foreground md:text-lg"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.hero.primaryCta}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#projetos">{t.hero.secondaryCta}</a>
            </Button>
          </motion.div>
        </article>
      </FadeInSection>

      <FadeInSection delay={0.15} direction="right">
        <aside className="hidden items-center justify-center md:flex">
          {profileFailed ? (
            <div
              className="flex h-64 w-64 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-primary to-accent text-4xl font-bold text-primary-foreground shadow-[0_0_40px_hsl(var(--accent)/0.35)] lg:h-72 lg:w-72"
              role="img"
              aria-label={t.hero.alt}
            >
              IC
            </div>
          ) : (
            <motion.img
              src={PROFILE_SRC}
              alt={t.hero.alt}
              loading="eager"
              fetchPriority="high"
              width={288}
              height={288}
              onError={() => setProfileFailed(true)}
              className="h-64 w-64 rounded-[2.5rem] object-cover shadow-[0_0_40px_hsl(var(--accent)/0.35)] lg:h-72 lg:w-72"
              whileHover={reducedMotion ? undefined : { scale: 1.02 }}
              animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </aside>
      </FadeInSection>
    </section>
  );
};

export default Hero;
