import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projetos = [
    {
      id: 1,
      title: "Sistema de Permissões",
      description: "Aplicação desktop com interface gráfica para gerenciamento de notas escolares, feita em Python. Permite adicionar, editar, visualizar e excluir notas, com persistência local via SQLite.",
      image: "/assets/img/images/sistema_notas.png",
      technologies: ["Python", "Tkinter", "SQLite3", "ttk"],
      githubUrl: "https://github.com/oiagocunha/sistema_notas",
      liveUrl: null
    },
    {
      id: 2,
      title: "QR Code Generator",
      description: "Aplicação React moderna e responsiva que transforma links em QR Codes exportáveis. Desenvolvida com foco na experiência do usuário, oferecendo interface intuitiva e funcionalidades práticas para geração e download de códigos QR.",
      image: "/assets/img/images/QRCode.png",
      technologies: ["React", "Vite", "JavaScript", "HTML2Canvas"],
      githubUrl: "https://github.com/oiagocunha/link-to-qrCode",
      liveUrl: "https://link-to-qr-code.vercel.app/"
    },
    {
      id: 3,
      title: "Cadastro de Produtos",
      description: "Sistema completo de gestão de produtos com operações CRUD (Create, Read, Update, Delete). Desenvolvido com JavaScript puro, demonstrando domínio em manipulação do DOM e persistência de dados no navegador através do localStorage.",
      image: "/assets/img/images/CRUD.png",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      githubUrl: "https://github.com/oiagocunha/Cadastro_Produtos",
      liveUrl: "https://oiagocunha.github.io/Cadastro_Produtos/"
    },
    {
      id: 4,
      title: "Simulador CLT",
      description: "Ajuda beneficiários do Bolsa Família a simularem o impacto de aceitar um emprego com carteira assinada. Sistema completo desenvolvido como Fullstack e publicado pela FIEC.",
      image: "/assets/img/images/simuladorCLT.png",
      technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "shadcn/ui", "React Hook Form", "zod", "Docker", "Node", "Express", "MongoDB"],
      githubUrl: null,
      liveUrl: "https://simuladorclt.observatorio.ind.br/"
    },
    {
      id: 5,
      title: "Xuxiê",
      description: "Loja virtual responsiva para venda de xuxinhas de crochê. Integração com ViaCEP e WhatsApp para pedidos automáticos, favoritos e carrinho com persistência local.",
      image: "/assets/img/images/xuxie-croche.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "ViaCEP API", "WhatsApp API"],
      githubUrl: null,
      liveUrl: "https://xuxie-croche.vercel.app/"
    }
  ];

  const ProjectCard = ({ projeto }) => {
    return (
      <div 
        className="img-port" 
        style={{ backgroundImage: `url(${projeto.image})` }}
        onMouseEnter={() => setHoveredProject(projeto.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className={`overlay ${hoveredProject === projeto.id ? 'show' : ''}`}>
          <h3>{projeto.title}</h3>
          <p className="project-description">{projeto.description}</p>
          
          <div className="tech-tags">
            {projeto.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="project-links">
            {projeto.liveUrl && (
              <a 
                href={projeto.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={16} />
                Ver Projeto
              </a>
            )}
            
            {projeto.githubUrl && (
              <a 
                href={projeto.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} />
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      className="portfolio" 
      id="portfolio"
    >
      <div className="interface">
        <h2 className="titulo">MEU <span>PORTFÓLIO.</span></h2>
        
        <div className="flex">
          {projetos.slice(0, 3).map((projeto) => (
            <ProjectCard key={projeto.id} projeto={projeto} />
          ))}
        </div>
      </div>
      
      <div className="interface">
        <div className="flex">
          {projetos.slice(3).map((projeto) => (
            <ProjectCard key={projeto.id} projeto={projeto} />
          ))}
          
          {/* Placeholder para manter layout consistente */}
          <div 
            className="img-port placeholder" 
            style={{ 
              backgroundColor: 'var(--shadow-color)', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'none'
            }}
          >
            <div style={{ textAlign: 'center', color: 'var(--text-color)' }}>
              <h3>Mais projetos em breve...</h3>
              <p>🚀</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
