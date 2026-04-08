import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const floatingEmojis = [
  { emoji: "🎈", x: "10%", y: "20%", delay: 0, duration: 6 },
  { emoji: "🎉", x: "85%", y: "15%", delay: 1.2, duration: 7 },
  { emoji: "🎊", x: "75%", y: "65%", delay: 0.5, duration: 5.5 },
  { emoji: "🎈", x: "20%", y: "70%", delay: 2, duration: 6.5 },
  { emoji: "🎁", x: "90%", y: "45%", delay: 0.8, duration: 7.5 },
  { emoji: "✨", x: "50%", y: "10%", delay: 1.5, duration: 5 },
  { emoji: "🎈", x: "35%", y: "80%", delay: 0.3, duration: 6.8 },
  { emoji: "🎀", x: "60%", y: "75%", delay: 1.8, duration: 5.8 },
];

const stats = [
  { value: "+5.000", label: "Festas Decoradas" },
  { value: "500+", label: "Produtos" },
  { value: "4.9★", label: "Avaliação" },
];

export default function StoreHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50">
      {/* Floating emojis */}
      {floatingEmojis.map((item, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-2xl sm:text-4xl"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            y: [20, -40, -80, -120],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
          aria-hidden
        >
          {item.emoji}
        </motion.span>
      ))}

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-200/30 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-pink-600 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Novidades toda semana
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          Transforme sua Festa em um{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
            Momento Mágico
          </span>{" "}
          ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl"
        >
          Balões, decorações e tudo que você precisa para criar festas
          inesquecíveis. Qualidade premium com os melhores preços do mercado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link to="/loja/produtos">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 text-base font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:from-pink-600 hover:to-purple-700 hover:shadow-xl hover:shadow-pink-500/30"
            >
              Ver Produtos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/loja/produtos?category=tematicos">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-2 border-purple-300 px-8 text-base font-semibold text-purple-700 transition-all hover:border-purple-400 hover:bg-purple-50"
            >
              🎁 Montar Kit
            </Button>
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid w-full max-w-xl grid-cols-3 gap-4 rounded-2xl border border-white/60 bg-white/50 px-6 py-5 shadow-lg backdrop-blur-sm sm:gap-8 sm:px-10 sm:py-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
