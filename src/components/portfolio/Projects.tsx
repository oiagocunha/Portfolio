import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Globe, ShoppingCart, GraduationCap, QrCode, Boxes } from "lucide-react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Simulador CLT - Sistema Governamental",
    desc: "Ferramenta oficial para beneficiários do Bolsa Família. Interface responsiva e validações complexas.",
    demo: "https://simuladorclt.observatorio.ind.br/",
    repo: undefined,
    Icon: Globe,
  img: "/images/simuladorCLT.png",
    alt: "Thumbnail do projeto Simulador CLT",
  },
  {
    title: "Xuxiê - E-commerce",
    desc: "Loja virtual responsiva com integração ViaCEP e pedidos via WhatsApp.",
    demo: "https://xuxie-croche.vercel.app/",
    repo: undefined,
    Icon: ShoppingCart,
  img: "/images/xuxie-croche.png",
    alt: "Thumbnail do projeto Xuxiê E-commerce",
  },
  {
    title: "Sistema de Gestão de Notas",
    desc: "Aplicação desktop com Python/Tkinter para gerenciamento de notas.",
    demo: undefined,
    repo: "https://github.com/oiagocunha/sistema_notas",
    Icon: GraduationCap,
    img: "/images/sistema_notas.png",
    alt: "Thumbnail do Sistema de Gestão de Notas",
  },
  {
    title: "QR Code Generator",
    desc: "Geração de QR Codes com exportação de imagens.",
    demo: "https://link-to-qr-code.vercel.app/",
    repo: "https://github.com/oiagocunha/link-to-qrCode",
    Icon: QrCode,
  img: "/images/QRCode.png",
    alt: "Thumbnail do QR Code Generator",
  },
  {
    title: "Sistema de Gestão de Produtos",
    desc: "CRUD com persistência local em LocalStorage.",
    demo: "https://oiagocunha.github.io/Cadastro_Produtos/",
    repo: "https://github.com/oiagocunha/Cadastro_Produtos",
    Icon: Boxes,
  img: "/images/CRUD.png",
    alt: "Thumbnail do Sistema de Gestão de Produtos",
  },
] as const;

const Projects = () => {
  return (
    <section id="projetos" className="container py-16 md:py-24">
      <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">MEU PORTFÓLIO.</h2>
      </FadeInSection>
      
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, desc, demo, repo, Icon, img, alt }, index) => (
          <FadeInSection key={title} delay={index * 0.1}>
            <motion.a 
              href={demo || repo} 
              target="_blank" 
              rel="noreferrer" 
              className="group block"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                <CardContent className="p-0">
                  <AspectRatio ratio={16/9} className="overflow-hidden">
                    <motion.img 
                      src={img} 
                      alt={alt} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </AspectRatio>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3">
                      <motion.div 
                        className="rounded-md border p-1.5 md:p-2 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-4 w-4 md:h-5 md:w-5" />
                      </motion.div>
                      <h3 className="font-semibold text-sm md:text-base transition-colors duration-300 group-hover:text-primary">{title}</h3>
                    </div>
                    <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground line-clamp-2">{desc}</p>
                    <div className="mt-3 md:mt-4 flex gap-2 md:gap-3 text-xs md:text-sm">
                      {demo && <span className="story-link">Demo</span>}
                      {repo && (
                        <a href={repo} target="_blank" rel="noreferrer" className="story-link">Código</a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Projects;
