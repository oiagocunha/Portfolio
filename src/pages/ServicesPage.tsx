import Hero from "@/components/portfolio/Hero";
import Services from "@/components/portfolio/Services";
import Applications from "@/components/portfolio/Applications";
import Projects from "@/components/portfolio/Projects";
import Process from "@/components/portfolio/Process";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import { MainLayout } from "@/layouts/MainLayout";

// The page itself is lazy-loaded by the router, so its sections load together with it.
const ServicesPage = () => (
  <MainLayout>
    <Hero />
    <Services />
    <Applications />
    <Projects />
    <Process />
    <About />
    <Contact />
  </MainLayout>
);

export default ServicesPage;
