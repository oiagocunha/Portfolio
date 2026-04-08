import { useEffect } from "react";

import StoreHero from "@/components/store/StoreHero";
import CategorySection from "@/components/store/CategorySection";
import FeaturedProducts from "@/components/store/FeaturedProducts";
import TestimonialSection from "@/components/store/TestimonialSection";
import NewsletterSection from "@/components/store/NewsletterSection";

export default function StoreHome() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="space-y-16 pb-16 md:space-y-24 md:pb-24">
      <StoreHero />

      <section id="categorias" className="scroll-mt-20">
        <CategorySection />
      </section>

      <FeaturedProducts />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
}
