import React from 'react';

const Tecnologias = () => {
  const tecnologias = {
    linguagens: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' },
      { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
      { name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4' },
      { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26' },
      { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6' }
    ],
    frameworks: [
      { name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain', color: '#000000' },
      { name: 'Express', icon: 'devicon-express-original', color: '#000000' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain', color: '#4FC08D' },
      { name: 'Laravel', icon: 'devicon-laravel-original', color: '#FF2D20' }
    ],
    ferramentas: [
      { name: 'Git', icon: 'devicon-git-plain', color: '#F05032' },
      { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
      { name: 'VS Code', icon: 'devicon-vscode-plain', color: '#007ACC' },
      { name: 'Vite', icon: 'devicon-vitejs-plain', color: '#646CFF' },
      { name: 'Webpack', icon: 'devicon-webpack-plain', color: '#8DD6F9' },
      { name: 'Babel', icon: 'devicon-babel-plain', color: '#F9DC3E' },
      { name: 'Figma', icon: 'devicon-figma-plain', color: '#F24E1E' }
    ],
    bancos: [
      { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
      { name: 'SQLite', icon: 'devicon-sqlite-plain', color: '#003B57' },
      { name: 'Supabase', icon: 'devicon-supabase-plain', color: '#47A248' }
    ],
    bibliotecas: [
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: '#06B6D4' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', color: '#7952B3' },
      { name: 'Lodash', icon: 'devicon-lodash-plain', color: '#3492FF' }
    ]
  };

  const TecnologiaItem = ({ tech, index }) => (
    <div 
      className="tech-item" 
      title={tech.name}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <span className="tech-icon">
        <i 
          className={tech.icon} 
          style={{ 
            color: tech.color, 
            fontSize: '32px',
            display: 'block',
            lineHeight: 1
          }}
        />
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
