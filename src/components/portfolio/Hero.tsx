import { Button } from "@/components/ui/button";
import { Typewriter } from "./Typewriter";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const Hero = () => {
  return (
    <section id="hero" className="relative container grid gap-8 py-12 md:grid-cols-2 md:py-24 lg:gap-10">
      {/* Animated gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-10 -z-10 flex justify-center">
        <motion.div 
          className="h-56 w-[36rem] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.35),transparent_60%)] blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
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
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            Olá! Me chamo <span className="gradient-text">Iago Cunha</span>!
          </motion.h1>
          
          <motion.p 
            className="mt-3 text-lg font-medium text-accent sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            <Typewriter
              words={[
                "Desenvolvedor Fullstack",
                "Criador de Experiências Digitais",
                "Focado em Performance",
                "Construindo Soluções Escaláveis",
              ]}
            />
          </motion.p>
          
          <motion.p 
            className="mt-4 text-base text-muted-foreground max-w-prose md:text-lg lg:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            Transformo ideias em experiências digitais extraordinárias. Como desenvolvedor Fullstack,
            crio soluções que conectam pessoas, impulsionam negócios e fazem a diferença no mundo digital.
          </motion.p>
          
          <motion.div 
            className="mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href="#contato">Entre em Contato</a>
              </Button>
            </motion.div>
          </motion.div>
        </article>
      </FadeInSection>

      <FadeInSection delay={0.3} direction="right">
        <aside className="flex items-center justify-center order-first md:order-last">
          <motion.img
            src="/images/Perfil.jpg"
            alt="Foto de Iago Cunha, desenvolvedor Fullstack"
            loading="lazy"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[2rem] md:rounded-[2.5rem] object-cover shadow-[0_0_40px_hsl(var(--accent)/0.35)]"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 60px hsl(var(--accent)/0.5)"
            }}
            transition={{ duration: 0.3 }}
            animate={{
              y: [0, -10, 0],
            }}
            style={{
              animationDuration: "3s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        </aside>
      </FadeInSection>
    </section>
  );
};

export default Hero;
