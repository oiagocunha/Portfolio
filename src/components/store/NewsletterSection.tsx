import { useState } from "react";
import { motion } from "framer-motion";
import { Send, PartyPopper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 py-16 sm:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-pink-600 backdrop-blur-sm">
            <PartyPopper className="h-4 w-4" />
            Newsletter
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fique por dentro das novidades! 📬
          </h2>

          <p className="mt-4 text-gray-500">
            Receba promoções exclusivas, dicas de decoração e lançamentos
            diretamente no seu e-mail. Sem spam, prometemos! 🎈
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-2xl border border-green-200 bg-green-50 px-6 py-5 text-green-700"
            >
              <p className="text-lg font-semibold">
                🎉 Inscrição confirmada!
              </p>
              <p className="mt-1 text-sm text-green-600">
                Fique de olho na caixa de entrada para ofertas incríveis.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-full border-gray-200 bg-white px-5 text-sm shadow-sm focus-visible:ring-pink-400 sm:w-80"
              />
              <Button
                type="submit"
                size="lg"
                className="gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:from-pink-600 hover:to-purple-700 hover:shadow-xl"
              >
                <Send className="h-4 w-4" />
                Inscrever-se
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-gray-400">
            Ao se inscrever, você concorda com nossa política de privacidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
