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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <Technologies />
        <About />
        <Projects />
        <Contact />
      </main>
      <ScrollTop />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Iago Cunha. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Index;
