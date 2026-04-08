import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/store/ProductCard";
import { products, categories, formatPrice } from "@/data/storeData";
import { cn } from "@/lib/utils";

export default function StoreProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <span className="text-6xl">😕</span>
        <h1 className="mt-4 text-2xl font-bold text-gray-800">
          Produto não encontrado
        </h1>
        <p className="mt-2 text-gray-500">
          O produto que você procura não existe ou foi removido.
        </p>
        <Link to="/loja/produtos">
          <Button className="mt-6 gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Produtos
          </Button>
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => Math.min(99, q + 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-sm text-gray-500">
        <Link to="/loja" className="transition-colors hover:text-pink-600">
          Loja
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          to="/loja/produtos"
          className="transition-colors hover:text-pink-600"
        >
          Produtos
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-gray-900">{product.name}</span>
      </nav>

      {/* Back button */}
      <Link
        to="/loja/produtos"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-pink-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>

      {/* Product section */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-white shadow-sm"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          {discount && (
            <Badge className="absolute left-4 top-4 bg-red-500 text-sm font-bold text-white hover:bg-red-600">
              -{discount}%
            </Badge>
          )}
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          {/* Category */}
          {category && (
            <Badge
              variant="secondary"
              className="w-fit text-xs"
            >
              {category.icon} {category.name}
            </Badge>
          )}

          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5",
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              {product.rating}
            </span>
            <span className="text-sm text-gray-400">
              ({product.reviews} avaliações)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-pink-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="leading-relaxed text-gray-600">
            {product.description}
          </p>

          <Separator />

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">
              Quantidade:
            </span>
            <div className="flex items-center rounded-full border">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={decrement}
                aria-label="Diminuir quantidade"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center text-sm font-semibold">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={increment}
                aria-label="Aumentar quantidade"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:from-pink-600 hover:to-purple-600"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5" />
              Adicionar ao Carrinho
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 gap-2 rounded-full border-pink-300 text-pink-600 hover:bg-pink-50"
              disabled={!product.inStock}
            >
              <Zap className="h-5 w-5" />
              Comprar Agora
            </Button>
          </div>

          {!product.inStock && (
            <p className="text-sm font-medium text-red-500">
              Produto esgotado no momento.
            </p>
          )}

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {product.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full text-xs text-gray-500"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p, i) => (
              <Link key={p.id} to={`/loja/produto/${p.id}`}>
                <ProductCard product={p} index={i} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
