import { Button } from "@/components/ui/button";
import { Typewriter } from "./Typewriter";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { useI18n } from "@/i18n";
import { typography } from "@/constants/design-tokens";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useState } from "react";

const PROFILE_SRC = "/images/Perfil.jpg";

const Hero = () => {
  const { t } = useI18n();
  const reducedMotion = usePrefersReducedMotion();
  const [profileFailed, setProfileFailed] = useState(false);

  return (
    <section id="hero" className="relative container grid gap-8 pt-24 pb-12 md:grid-cols-2 lg:gap-10">
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

      <FadeInSection delay={0.1}>
        <article>
          <motion.h1
            className={typography.h1}
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            <span className="block text-lg font-normal text-muted-foreground sm:text-xl">
              {t.hero.greeting}
            </span>
            <span className="gradient-text">Iago Cunha</span>
            <span className="mt-2 block text-xl font-semibold text-foreground/90 sm:text-2xl">
              {t.hero.role}
            </span>
          </motion.h1>

          <motion.p
            className="mt-3 text-lg font-semibold text-foreground/90 sm:text-xl"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            {t.hero.headline}
          </motion.p>

          <motion.p
            className="mt-3 text-lg font-medium text-accent sm:text-xl"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            <Typewriter words={t.hero.typewriter} />
          </motion.p>

          <motion.p
            className="mt-4 text-base text-muted-foreground max-w-prose md:text-lg lg:mt-6"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            {t.hero.description}
          </motion.p>

          <motion.ul
            className="mt-5 space-y-2 text-sm text-muted-foreground md:text-base"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            {t.hero.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <a href="#contato">{t.hero.primaryCta}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="/case-study/chat-platform">{t.hero.secondaryCta}</a>
            </Button>
          </motion.div>
        </article>
      </FadeInSection>

      <FadeInSection delay={0.3} direction="right">
        <aside className="flex items-center justify-center order-first md:order-last">
          {profileFailed ? (
            <div
              className="flex w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 items-center justify-center rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary to-accent text-4xl font-bold text-primary-foreground shadow-[0_0_40px_hsl(var(--accent)/0.35)]"
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
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[2rem] md:rounded-[2.5rem] object-cover shadow-[0_0_40px_hsl(var(--accent)/0.35)]"
              whileHover={reducedMotion ? undefined : { scale: 1.02 }}
              animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </aside>
      </FadeInSection>
    </section>
  );
};

export default Hero;
