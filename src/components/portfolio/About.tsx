import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "./FadeInSection";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  return (
    <section id="sobre" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">SOBRE MIM.</h2>
      </FadeInSection>

      {/* Stats Section */}
      <FadeInSection delay={0.2}>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              <AnimatedCounter value={1} suffix="+" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              <AnimatedCounter value={13} suffix="+" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">Projetos Concluídos</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              <AnimatedCounter value={5} suffix="+" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">Tecnologias</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              <AnimatedCounter value={100} suffix="%" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">Dedicação</p>
          </div>
        </div>
      </FadeInSection>

      <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
        <FadeInSection delay={0.1} direction="left">
          <div className="order-2 md:order-1">
            <img
              src="/images/Conquista.png"
              alt="Conquista ou certificado de Iago Cunha"
              loading="lazy"
              className="h-[60dvh] max-w-md mx-auto md:max-w-none rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} direction="right">
          <article className="space-y-4 order-1 md:order-2">
            <p className="text-base md:text-lg text-muted-foreground">
              Sou <strong className="text-foreground">Iago Cunha</strong>, desenvolvedor Fullstack com foco em frontend.
              Crio interfaces modernas e funcionais usando <strong>React, TypeScript e Tailwind CSS</strong>, integrando aplicações
              a backends reais em <strong>Node.js com Express e MongoDB</strong> e automatizando fluxos sempre que possível com <strong>n8n</strong>.
            </p>

            <p className="text-base md:text-lg text-muted-foreground">
              Minha prática diária envolve transformar requisitos em soluções claras e escaláveis, sempre priorizando performance,
              acessibilidade e código limpo. Integro testes automatizados, otimizações de SEO e boas práticas de código diretamente no fluxo de desenvolvimento.
            </p>

            <p className="text-base md:text-lg text-muted-foreground">
              Gosto de trabalhar com metodologias ágeis e explorar novas ferramentas que tragam resultados.
              Meu objetivo é entregar produtos digitais que façam diferença para quem os usa.
            </p>


            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="flex-1 sm:flex-none transition-all duration-300 hover:scale-105 hover:shadow-md">
                <a href="https://github.com/oiagocunha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 sm:flex-none transition-all duration-300 hover:scale-105 hover:shadow-md">
                <a href="https://linkedin.com/in/oiagocunha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 sm:flex-none transition-all duration-300 hover:scale-105 hover:shadow-md">
                <a href="https://instagram.com/oiagocunha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </Button>
              <Button asChild variant="hero" className="w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <a href="public\Currículo - Iago Cunha - Desenvolvedor FullStack.pdf" download className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Baixar CV (PT-BR)
                </a>
              </Button>
            </div>
          </article>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;