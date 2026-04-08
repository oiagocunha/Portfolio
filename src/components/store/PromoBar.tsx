import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PromoBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉
            </motion.span>
            <span>
              Frete grátis para compras acima de R$ 150 | Use o cupom{" "}
              <span className="rounded bg-white/20 px-1.5 py-0.5 font-bold">
                FESTA10
              </span>{" "}
              e ganhe 10% OFF
            </span>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full text-white/80 hover:bg-white/20 hover:text-white"
              onClick={() => setVisible(false)}
              aria-label="Fechar promoção"
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
