import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "./FadeInSection";
import AnimatedCounter from "./AnimatedCounter";
import CVPortugues from "@/assets/cv/Currículo - Iago Cunha - Desenvolvedor FullStack.pdf";
import CVIngles from "@/assets/cv/[EN] Currículo - Iago Cunha - Desenvolvedor FullStack.pdf";

interface AboutProps {
  language: 'pt' | 'en';
}

const About = ({ language }: AboutProps) => {
  const content = {
    pt: {
      title: 'SOBRE MIM.',
      stats: [
        { value: 1, suffix: '+', label: 'Anos de Experiência' },
        { value: 13, suffix: '+', label: 'Projetos Concluídos' },
        { value: 5, suffix: '+', label: 'Tecnologias' },
        { value: 100, suffix: '%', label: 'Dedicação' },
      ],
      about: [
        'Sou Iago Cunha, desenvolvedor Fullstack com foco em frontend. Crio interfaces modernas e funcionais usando React, TypeScript e Tailwind CSS, integrando aplicações a backends reais em Node.js com Express e MongoDB e automatizando fluxos sempre que possível com n8n.',
        'Minha prática diária envolve transformar requisitos em soluções claras e escaláveis, sempre priorizando performance, acessibilidade e código limpo. Integro testes automatizados, otimizações de SEO e boas práticas de código diretamente no fluxo de desenvolvimento.',
        'Gosto de trabalhar com metodologias ágeis e explorar novas ferramentas que tragam resultados. Meu objetivo é entregar produtos digitais que façam diferença para quem os usa.',
      ],
      cv: {
        path: CVPortugues,
        label: 'Baixar CV (PT-BR)',
      },
    },
    en: {
      title: 'ABOUT ME.',
      stats: [
        { value: 1, suffix: '+', label: 'Years of Experience' },
        { value: 13, suffix: '+', label: 'Completed Projects' },
        { value: 5, suffix: '+', label: 'Technologies' },
        { value: 100, suffix: '%', label: 'Dedication' },
      ],
      about: [
        'I am Iago Cunha, a Fullstack developer focused on frontend. I create modern and functional interfaces using React, TypeScript, and Tailwind CSS, integrating real backends with Node.js, Express, and MongoDB, and automating workflows whenever possible with n8n.',
        'My daily practice involves turning requirements into clear and scalable solutions, always prioritizing performance, accessibility, and clean code. I integrate automated tests, SEO optimizations, and best coding practices directly into the development flow.',
        'I enjoy working with agile methodologies and exploring new tools that deliver results. My goal is to deliver digital products that make a difference for their users.',
      ],
      cv: {
        path: CVIngles,
        label: 'Download CV (EN)',
      },
    },
  };

  const c = content[language];

  return (
    <section id="sobre" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">{c.title}</h2>
      </FadeInSection>

      {/* Stats Section */}
      <FadeInSection delay={0.2}>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {c.stats.map((stat) => (
            <div className="space-y-1" key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeInSection>

      <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
        <FadeInSection delay={0.1} direction="left">
          <div className="order-2 md:order-1">
            <img
              src="/images/Conquista.png"
              alt={language === 'pt' ? "Conquista ou certificado de Iago Cunha" : "Iago Cunha's achievement or certificate"}
              loading="lazy"
              className="h-[60dvh] max-w-md mx-auto md:max-w-none rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} direction="right">
          <article className="space-y-4 order-1 md:order-2">
            {c.about.map((p, i) => (
              <p className="text-base md:text-lg text-muted-foreground" key={i}>{p}</p>
            ))}

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
                <a href={c.cv.path} download className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {c.cv.label}
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