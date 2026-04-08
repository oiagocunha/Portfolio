import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { categories } from "@/data/storeData";

export default function CategorySection() {
  return (
    <section id="categorias" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-3xl">🎈</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Categorias
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Encontre tudo para sua festa organizado por categoria
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                to={`/loja/produtos?category=${cat.id}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 p-5 text-center transition-all hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100/40"
              >
                <motion.span
                  className="text-4xl"
                  whileHover={{ scale: 1.25, rotate: [0, -10, 10, 0] }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {cat.icon}
                </motion.span>

                <h3 className="mt-3 text-sm font-semibold text-gray-900 group-hover:text-pink-600">
                  {cat.name}
                </h3>

                <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                  {cat.description}
                </p>

                <span className="mt-3 inline-block rounded-full bg-pink-50 px-3 py-0.5 text-xs font-medium text-pink-600">
                  {cat.productCount} produtos
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
