import React from 'react';

const Tecnologias = () => {
  const tecnologias = {
    linguagens: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
      { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
      { name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4' },
      { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26' },
      { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' }
    ],
    frameworks: [
      { name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain', color: '#4FC08D' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain', color: '#000000' },
      { name: 'Laravel', icon: 'devicon-laravel-original', color: '#FF2D20' }
    ],
    ferramentas: [
      { name: 'Git', icon: 'devicon-git-plain', color: '#F05032' },
      { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
      { name: 'VS Code', icon: 'devicon-vscode-plain', color: '#007ACC' },
      { name: 'Figma', icon: 'devicon-figma-plain', color: '#F24E1E' }
    ],
    bancos: [
      { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
      { name: 'Supabase', icon: 'devicon-supabase-plain', color: '#47A248' }
    ],
    bibliotecas: [
      { name: 'jQuery', icon: 'devicon-jquery-plain', color: '#0769AD' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', color: '#7952B3' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain', color: '#06B6D4' },
      { name: 'Axios', icon: 'custom-axios', color: '#5A29E4' },
      { name: 'Chart.js', icon: 'custom-chartjs', color: '#FF6384' },
      { name: 'Express', icon: 'devicon-express-original', color: '#000000' }
    ]
  };

  // Componente para ícones customizados que não estão no Devicon
  const CustomIcon = ({ iconType, color, size = 32 }) => {
    switch (iconType) {
      case 'custom-framer':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill={color} />
          </svg>
        );
      case 'custom-chartjs':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
            <rect x="7" y="8" width="2" height="8" fill={color}/>
            <rect x="11" y="5" width="2" height="11" fill={color}/>
            <rect x="15" y="10" width="2" height="6" fill={color}/>
          </svg>
        );
      case 'custom-axios':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" fill="none"/>
            <path d="M12 6v6l4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="2" fill={color}/>
          </svg>
        );
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
            <path d="M8 12h8M12 8v8" stroke={color} strokeWidth="2"/>
          </svg>
        );
    }
  };

  const TecnologiaItem = ({ tech, index }) => (
    <div 
      className="tech-item" 
      title={tech.name}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <span className="tech-icon">
        {tech.icon.startsWith('devicon-') ? (
          <i 
            className={tech.icon} 
            style={{ 
              color: tech.color, 
              fontSize: '32px',
              display: 'block',
              lineHeight: 1
            }}
          />
        ) : (
          <CustomIcon iconType={tech.icon} color={tech.color} size={32} />
        )}
      </span>
      <span className="tech-name">{tech.name}</span>
    </div>
  );

  return (
    <section className="tecnologias">
      <div className="interface">
        <h2 className="titulo">MINHAS <span>TECNOLOGIAS.</span></h2>
        
        <div className="tecnologias-list">
          <div className="tecnologia-img">
            <h3 className="tecnologias-txt">Linguagens</h3>
            <div className="tech-grid">
              {tecnologias.linguagens.map((tech, index) => (
                <TecnologiaItem key={index} tech={tech} index={index} />
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="tecnologias-img">
              <h3 className="tecnologias-txt">Frameworks</h3>
              <div className="tech-grid">
                {tecnologias.frameworks.map((tech, index) => (
                  <TecnologiaItem key={index} tech={tech} index={index} />
                ))}
              </div>
            </div>

            <div className="tecnologias-img">
              <h3 className="tecnologias-txt">Ferramentas</h3>
              <div className="tech-grid">
                {tecnologias.ferramentas.map((tech, index) => (
                  <TecnologiaItem key={index} tech={tech} index={index} />
                ))}
              </div>
            </div>

            <div className="tecnologias-img">
              <h3 className="tecnologias-txt">Bancos de Dados</h3>
              <div className="tech-grid">
                {tecnologias.bancos.map((tech, index) => (
                  <TecnologiaItem key={index} tech={tech} index={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="tecnologia-img">
            <h3 className="tecnologias-txt">Bibliotecas</h3>
            <div className="tech-grid">
              {tecnologias.bibliotecas.map((tech, index) => (
                <TecnologiaItem key={index} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
