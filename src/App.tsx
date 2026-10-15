import { RouteScroll } from "@/components/seo/RouteScroll";
import { ConversionEvents } from "@/components/seo/ConversionEvents";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import { SeoManager } from "@/components/seo/SeoManager";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
const CaseStudyChat = lazy(() => import("./pages/CaseStudyChat"));
const CaseStudyPublicData = lazy(() => import("./pages/CaseStudyPublicData"));
const Professional = lazy(() => import("./pages/Professional"));

const App = () => (
  <TooltipProvider>
    <Toaster />
    <>
      <SeoManager /><ConversionEvents /><RouteScroll />
      <Suspense fallback={<div className="container pt-28" role="status">…</div>}><Routes>
        <Route path="/" element={<Index />} />
        <Route path="/case-study/chat-platform" element={<CaseStudyChat />} />
        <Route path="/case-study/public-data-monitor" element={<CaseStudyPublicData />} />
        <Route path="/perfil" element={<Professional />} />
        <Route path="/en" element={<Index />} />
        <Route path="/en/perfil" element={<Professional />} />
        <Route path="/en/case-study/chat-platform" element={<CaseStudyChat />} />
        <Route path="/en/case-study/public-data-monitor" element={<CaseStudyPublicData />} />
        <Route path="*" element={<NotFound />} />
      </Routes></Suspense>
    </>
  </TooltipProvider>
);

export default App;
