import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Sobre = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="interface">
        <div className="flex">
          <div className="sobre-img">
            <img 
              src="/assets/img/images/Conquista.png" 
              alt="Foto de Iago Cunha, desenvolvedor Full Stack." 
            />
          </div>
          
          <div className="sobre-txt">
            <h2>
              MUITO PRAZER,
              <span> ME CHAMO IAGO CUNHA.</span>
            </h2>
            
            <p>
              <strong>Desenvolvedor Full Stack</strong> apaixonado por criar experiências digitais que fazem a diferença. 
              Especializo-me em transformar ideias complexas em soluções web elegantes, intuitivas e de alta performance.
            </p>
            
            <p>
              Trabalho em parceria com empresas e empreendedores visionários, combinando criatividade e tecnologia 
              para dar vida a projetos únicos. Minha missão é entregar não apenas código, mas soluções que 
              impulsionam negócios e encantam usuários.
            </p>
            
            <p>
              Com uma mentalidade sempre voltada ao crescimento, mergulho constantemente em novas tecnologias 
              e metodologias. Acredito que a qualidade está nos detalhes, por isso dedico-me a escrever código 
              limpo, escalável e que supera expectativas.
            </p>
            
            <div className="btn-social">
              <a 
                href="https://github.com/oiagocunha" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <button>
                  <Github size={24} />
                </button>
              </a>
              
              <a 
                href="https://linkedin.com/in/oiagocunha" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <button>
                  <Linkedin size={24} />
                </button>
              </a>
              
              <a 
                href="https://www.instagram.com/oiagocunha/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <button>
                  <Instagram size={24} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
