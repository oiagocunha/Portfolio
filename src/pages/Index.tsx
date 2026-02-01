import { lazy, Suspense } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import ScrollTop from "@/components/portfolio/ScrollTop";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import { useI18n } from "@/i18n";

// Lazy loaded sections (below the fold)
const About = lazy(() => import("@/components/portfolio/About"));
const Projects = lazy(() => import("@/components/portfolio/Projects"));
const Specialties = lazy(() => import("@/components/portfolio/Specialties"));
const Technologies = lazy(() => import("@/components/portfolio/Technologies"));
const Certifications = lazy(() => import("@/components/portfolio/Certifications"));
const Talks = lazy(() => import("@/components/portfolio/Talks"));
const Experience = lazy(() => import("@/components/portfolio/Experience"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));

// Loading skeleton component
const SectionSkeleton = () => (
  <div className="container py-16 md:py-24">
    <div className="h-8 w-48 mx-auto bg-muted animate-pulse rounded" />
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
      ))}
    </div>
  </div>
);

const Index = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <section id="habilidades">
            <Specialties />
            <Technologies />
          </section>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Talks />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <ScrollTop />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Iago Cunha. {t.footer.rights}
      </footer>
    </div>
  );
};

export default Index;
