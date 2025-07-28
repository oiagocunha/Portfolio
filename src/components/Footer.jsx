import React from 'react';
import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

const Footer = ({ darkTheme }) => {
  return (
    <footer>
      <div className="interface">
        <div className="line-footer">
          <div className="flex">
            <div className="logo-footer">
              <img 
                src={darkTheme ? "/assets/img/images/Logo_semFundo_light.png" : "/assets/img/images/Logo_semFundo_dark.png"}
                alt="Logo do site Iago Cunha" 
              />
            </div>
            
            <div className="btn-social">
              <a 
                href="https://github.com/oiagocunha" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <button>
                  <Github size={20} />
                </button>
              </a>
              
              <a 
                href="https://linkedin.com/in/oiagocunha" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <button>
                  <Linkedin size={20} />
                </button>
              </a>
              
              <a 
                href="https://www.instagram.com/oiagocunha/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <button>
                  <Instagram size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex line-footer borda">
          <p>
            <Mail size={18} />
            <a href="mailto:dev.iagocunha@gmail.com">
              dev.iagocunha@gmail.com
            </a>
          </p>
          
          <p>
            <ExternalLink size={18} />
            <a 
              href="https://github.com/oiagocunha/Portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Acessar Repositório
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
