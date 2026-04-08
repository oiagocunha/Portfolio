import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type Product, formatPrice } from "@/data/storeData";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Card className="group relative h-full overflow-hidden border-gray-100 bg-white transition-shadow hover:shadow-xl">
        {/* Image */}
        <CardHeader className="relative overflow-hidden p-0">
          <div className="aspect-square overflow-hidden bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Sale badge */}
          {discount && (
            <Badge className="absolute left-3 top-3 bg-red-500 text-xs font-bold text-white hover:bg-red-600">
              -{discount}%
            </Badge>
          )}

          {/* Category badge */}
          <Badge
            variant="secondary"
            className="absolute bottom-3 left-3 bg-white/90 text-xs backdrop-blur-sm"
          >
            {product.category}
          </Badge>
        </CardHeader>

        {/* Body */}
        <CardContent className="space-y-2 p-4">
          <h3 className="line-clamp-1 text-sm font-semibold text-gray-900">
            {product.name}
          </h3>

          <p className="line-clamp-2 text-xs text-gray-500">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3.5 w-3.5",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
            <span className="ml-1 text-xs text-gray-400">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-pink-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-sm font-medium text-white shadow-sm transition-all hover:from-pink-600 hover:to-purple-600 hover:shadow-md"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? "Adicionar ao Carrinho" : "Esgotado"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
