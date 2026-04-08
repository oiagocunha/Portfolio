import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StoreLayout from "./layouts/StoreLayout";
import StoreHome from "./pages/store/StoreHome";
import StoreProducts from "./pages/store/StoreProducts";
import StoreProductDetail from "./pages/store/StoreProductDetail";
import StoreCart from "./pages/store/StoreCart";
import StoreContact from "./pages/store/StoreContact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/loja" element={<StoreLayout />}>
            <Route index element={<StoreHome />} />
            <Route path="produtos" element={<StoreProducts />} />
            <Route path="produto/:id" element={<StoreProductDetail />} />
            <Route path="carrinho" element={<StoreCart />} />
            <Route path="contato" element={<StoreContact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
