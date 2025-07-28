import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Especialidades = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const especialidades = [
    {
      icon: "💻",
      title: "Desenvolvimento Frontend",
      description: "Criação de interfaces modernas e responsivas utilizando React, JavaScript, HTML5 e CSS3. Foco na experiência do usuário e performance."
    },
    {
      icon: "⚙️",
      title: "Desenvolvimento Backend",
      description: "Desenvolvimento de APIs robustas e escaláveis com Node.js, Python e PHP. Integração com bancos de dados e serviços externos."
    },
    {
      icon: "📱",
      title: "Design Responsivo",
      description: "Criação de layouts que se adaptam perfeitamente a todos os dispositivos, garantindo uma experiência consistente em qualquer tela."
    },
    {
      icon: "🌐",
      title: "Website",
      description: "Desenvolvimento de sites modernos e responsivos, garantindo a melhor experiência para seus usuários."
    },
    {
      icon: "🛒",
      title: "Loja Online",
      description: "Criação de e-commerces intuitivos, otimizados para conversão e performance."
    },
    {
      icon: "📰",
      title: "Blog",
      description: "Construção de blogs e plataformas de conteúdo dinâmicas, personalizadas para sua necessidade."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % especialidades.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [especialidades.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % especialidades.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + especialidades.length) % especialidades.length);
  };

  return (
    <section className="especialidades" id="especialidades">
      <div className="interface">
        <h2 className="titulo">MINHAS <span>ESPECIALIDADES.</span></h2>
        
        <div className="swiper">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {especialidades.map((especialidade, index) => (
                <div 
                  key={index}
                  className={`swiper-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{
                    display: index === currentSlide ? 'flex' : 'none'
                  }}
                >
                  <div className="especialidades-box">
                    <div className="descricao">
                      <div className="icon" style={{ fontSize: '70px' }}>
                        {especialidade.icon}
                      </div>
                      <h3>{especialidade.title}</h3>
                      <p>{especialidade.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="swiper-navigation">
              <button className="swiper-button-prev" onClick={prevSlide}>
                <ChevronLeft size={24} />
              </button>
              <button className="swiper-button-next" onClick={nextSlide}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
