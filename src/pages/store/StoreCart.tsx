import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  Tag,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { products, formatPrice, type Product } from "@/data/storeData";

interface CartItem {
  product: Product;
  quantity: number;
}

const SHIPPING_THRESHOLD = 150;
const SHIPPING_COST = 15.9;

export default function StoreCart() {
  const [items, setItems] = useState<CartItem[]>(() => [
    { product: products[0], quantity: 2 },
    { product: products[2], quantity: 1 },
    { product: products[5], quantity: 1 },
  ]);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const updateQuantity = (productId: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "FESTA10") {
      setAppliedCoupon("FESTA10");
    }
    setCoupon("");
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const discountRate = appliedCoupon === "FESTA10" ? 0.1 : 0;
  const discount = subtotal * discountRate;
  const total = subtotal - discount + shipping;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-32 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <span className="text-7xl">🛒</span>
        </motion.div>
        <h1 className="mt-6 text-2xl font-bold text-gray-800">
          Seu carrinho está vazio
        </h1>
        <p className="mt-2 text-gray-500">
          Que tal explorar nossos produtos e encontrar o que precisa para sua
          festa?
        </p>
        <Link to="/loja/produtos">
          <Button className="mt-6 gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
            Continuar Comprando
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-extrabold text-gray-900"
      >
        Meu Carrinho 🛒
      </motion.h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Items list */}
        <div className="space-y-4 lg:col-span-2">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                {/* Image */}
                <Link to={`/loja/produto/${item.product.id}`}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-24 w-24 shrink-0 rounded-lg object-cover sm:h-28 sm:w-28"
                  />
                </Link>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      to={`/loja/produto/${item.product.id}`}
                      className="font-semibold text-gray-900 transition-colors hover:text-pink-600"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {formatPrice(item.product.price)} cada
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    {/* Quantity controls */}
                    <div className="flex items-center rounded-full border">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.product.id, -1)}
                        aria-label="Diminuir"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </Button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.product.id, 1)}
                        aria-label="Aumentar"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-pink-600">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-red-500"
                        onClick={() => removeItem(item.product.id)}
                        aria-label="Remover"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="h-fit rounded-xl bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-bold text-gray-900">Resumo do Pedido</h2>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Frete</span>
              <span className="font-medium">
                {shipping === 0 ? (
                  <span className="text-green-600">Grátis</span>
                ) : (
                  formatPrice(shipping)
                )}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Desconto ({appliedCoupon})</span>
                <span className="font-medium">-{formatPrice(discount)}</span>
              </div>
            )}

            <Separator />

            <div className="flex justify-between text-base font-bold">
              <span>Total</span>
              <span className="text-pink-600">{formatPrice(total)}</span>
            </div>
          </div>

          {/* Coupon */}
          <div className="mt-5">
            <label className="mb-1.5 block text-xs font-medium text-gray-500">
              Cupom de desconto
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Ex: FESTA10"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="pl-9"
                  onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                />
              </div>
              <Button variant="outline" size="sm" onClick={applyCoupon}>
                Aplicar
              </Button>
            </div>
            {appliedCoupon && (
              <p className="mt-1.5 text-xs text-green-600">
                ✅ Cupom {appliedCoupon} aplicado!
              </p>
            )}
          </div>

          {shipping > 0 && (
            <p className="mt-3 text-xs text-gray-400">
              Frete grátis para compras acima de{" "}
              {formatPrice(SHIPPING_THRESHOLD)}
            </p>
          )}

          <Button
            size="lg"
            className="mt-5 w-full gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:from-pink-600 hover:to-purple-600"
          >
            <ShoppingCart className="h-5 w-5" />
            Finalizar Compra
          </Button>

          <Link
            to="/loja/produtos"
            className="mt-3 block text-center text-sm text-gray-500 transition-colors hover:text-pink-600"
          >
            Continuar Comprando
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
