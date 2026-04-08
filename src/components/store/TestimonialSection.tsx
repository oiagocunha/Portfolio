import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/storeData";

export default function TestimonialSection() {
  return (
    <section className="bg-purple-50/50 py-16 sm:py-24">
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
            O que nossos clientes dizem 💬
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Milhares de festas inesquecíveis começaram aqui
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400" />
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-gray-100 bg-white transition-shadow hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  {/* Stars */}
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={cn(
                          "h-4 w-4",
                          j < t.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        )}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">
                    &ldquo;{t.comment}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3 border-t border-gray-50 pt-4">
                    <Avatar className="h-10 w-10 border-2 border-pink-100">
                      <AvatarFallback className="bg-gradient-to-br from-pink-100 to-purple-100 text-xs font-bold text-pink-600">
                        {t.avatar}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900">
                        {t.name}
                      </p>
                      <Badge
                        variant="secondary"
                        className="mt-0.5 bg-purple-50 text-[10px] font-medium text-purple-600"
                      >
                        {t.event}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
