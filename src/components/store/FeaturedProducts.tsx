import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProductCard from "@/components/store/ProductCard";
import { products } from "@/data/storeData";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="bg-gradient-to-b from-gray-50/50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Produtos em Destaque 🌟
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Os mais vendidos e amados pelos nossos clientes
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400" />
        </motion.div>

        {/* Products grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link to="/loja/produtos">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-full border-2 border-pink-300 px-8 font-semibold text-pink-600 transition-all hover:border-pink-400 hover:bg-pink-50"
            >
              Ver todos os produtos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
