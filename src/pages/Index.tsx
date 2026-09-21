import { lazy, Suspense } from "react";
import Hero from "@/components/portfolio/Hero";
import { MainLayout } from "@/layouts/MainLayout";

const Problems = lazy(() => import("@/components/portfolio/Problems"));
const Services = lazy(() => import("@/components/portfolio/Services"));
const Projects = lazy(() => import("@/components/portfolio/Projects"));
const Process = lazy(() => import("@/components/portfolio/Process"));
const About = lazy(() => import("@/components/portfolio/About"));
const WorkflowShowcase = lazy(() => import("@/components/portfolio/WorkflowShowcase"));
const Specialties = lazy(() => import("@/components/portfolio/Specialties"));
const Technologies = lazy(() => import("@/components/portfolio/Technologies"));
const Experience = lazy(() => import("@/components/portfolio/Experience"));
const Certifications = lazy(() => import("@/components/portfolio/Certifications"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));

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
  return (
    <MainLayout>
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <Problems />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Specialties />
        <WorkflowShowcase />
        <Technologies />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </MainLayout>
  );
};

export default Index;
