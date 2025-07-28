import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Especialidades from './components/Especialidades';
import Tecnologias from './components/Tecnologias';
import Sobre from './components/Sobre';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './styles/index.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    // Verificar tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkTheme(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Aplicar tema ao body
    document.body.className = darkTheme ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="App">
      <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Especialidades />
        <Tecnologias />
        <Sobre />
        <Portfolio />
        <Contato />
      </main>

      <Footer darkTheme={darkTheme} />
      <BackToTop />
    </div>
  );
}

export default App;
