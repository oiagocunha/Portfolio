import { useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Specialties from "@/components/portfolio/Specialties";
import Technologies from "@/components/portfolio/Technologies";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import ScrollTop from "@/components/portfolio/ScrollTop";
import ScrollProgress from "@/components/portfolio/ScrollProgress";

const Index = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Specialties language={language} />
        <Technologies language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <ScrollTop />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        {language === 'pt' ? '©' : '©'} {new Date().getFullYear()} Iago Cunha. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
      </footer>
    </div>
  );
};

export default Index;
