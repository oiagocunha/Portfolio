import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SeoManager } from "@/components/seo/SeoManager";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyChat from "./pages/CaseStudyChat";
import CaseStudyPublicData from "./pages/CaseStudyPublicData";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <SeoManager />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/case-study/chat-platform" element={<CaseStudyChat />} />
        <Route path="/case-study/public-data-monitor" element={<CaseStudyPublicData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
