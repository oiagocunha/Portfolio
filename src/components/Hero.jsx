import React, { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    "Olá! Me chamo Iago Cunha!",
    "Desenvolvedor Fullstack",
    "Apaixonado por Tecnologia"
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 75;
    const pauseTime = isDeleting ? 1000 : 2500;

    const timer = setTimeout(() => {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        
        if (currentIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, currentTextIndex, isDeleting, texts]);

  return (
    <section className="topo-do-site" id="inicio">
      <div className="interface">
        <div className="flex">
          <div className="txt-topo-site">
            <h1 id="typewriter">
              {displayText}
              <span className="cursor">|</span>
            </h1>

            <p>
              Transformo ideias em experiências digitais extraordinárias. 
              Como desenvolvedor Fullstack, crio soluções que conectam pessoas, 
              impulsionam negócios e fazem a diferença no mundo digital.
            </p>

            <div className="btn-contato">
              <a href="#contato">
                <button>Entre em Contato</button>
              </a>
            </div>
          </div>

          <div className="img-topo-site">
            <img 
              src="/assets/img/images/Perfil.jpg" 
              alt="Foto de Iago Cunha, desenvolvedor Fullstack." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
