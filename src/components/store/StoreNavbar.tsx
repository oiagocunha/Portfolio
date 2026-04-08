import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Início", href: "/loja" },
  { label: "Produtos", href: "/loja/produtos" },
  { label: "Categorias", href: "/loja#categorias" },
  { label: "Contato", href: "/loja/contato" },
];

export default function StoreNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-lg"
          : "bg-white/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link to="/loja" className="flex items-center gap-2">
          <PartyPopper className="h-6 w-6 text-pink-500" />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
            Festa &amp; Balões 🎈
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: cart + mobile menu */}
        <div className="flex items-center gap-2">
          <Link to="/loja/carrinho">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-pink-50"
            >
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0 text-[10px] text-white">
                3
              </Badge>
            </Button>
          </Link>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-pink-50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white">
                <SheetHeader className="text-left">
                  <SheetTitle className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-lg font-extrabold text-transparent">
                    Festa &amp; Balões 🎈
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        to={link.href}
                        className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-600"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-8 border-t pt-6">
                  <SheetClose asChild>
                    <Link to="/loja/carrinho">
                      <Button className="w-full gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600">
                        <ShoppingCart className="h-4 w-4" />
                        Carrinho (3)
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
