import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ darkTheme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="interface">
        <div className="logo">
          <img 
            src={darkTheme ? "/assets/img/images/Logo_semFundo_light.png" : "/assets/img/images/Logo_semFundo_dark.png"}
            alt="Logo do site Iago Cunha" 
          />
        </div>

        <nav className="menu-desktop">
          <ul>
            <li>
              <a href="#especialidades" onClick={(e) => handleNavClick(e, 'especialidades')}>
                Especialidades
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>
                Projetos
              </a>
            </li>
          </ul>
        </nav>

        <div className="theme-toggle">
          <button 
            id="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro" 
            title="Alternar tema"
          >
            {darkTheme ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="btn-contato">
          <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')}>
            <button>Contato</button>
          </a>
        </div>

        <div className="btn-abrir-menu" onClick={toggleMobileMenu}>
          <Menu size={40} aria-label="Abrir menu de navegação" />
        </div>

        <div className={`menu-mobile ${mobileMenuOpen ? 'abrir-menu' : ''}`}>
          <div className="btn-fechar" onClick={closeMobileMenu}>
            <X size={30} />
          </div>

          <nav>
            <ul>
              <li>
                <a href="#especialidades" onClick={(e) => handleNavClick(e, 'especialidades')}>
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="overlay-menu" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;
