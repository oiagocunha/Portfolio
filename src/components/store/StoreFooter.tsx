import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  PartyPopper,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "Início", href: "/loja" },
  { label: "Produtos", href: "/loja/produtos" },
  { label: "Contato", href: "/loja/contato" },
  { label: "Sobre nós", href: "/loja/sobre" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/5511999999999",
    label: "WhatsApp",
    color: "hover:text-green-500",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
    color: "hover:text-blue-500",
  },
];

const paymentMethods = ["Visa", "Mastercard", "Pix", "Boleto", "Elo"];

export default function StoreFooter() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/loja"
              className="flex items-center gap-2"
            >
              <PartyPopper className="h-5 w-5 text-pink-500" />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-lg font-extrabold text-transparent">
                Festa &amp; Balões 🎈
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Tudo para transformar sua festa em um momento mágico. Balões,
              decorações e muito mais com qualidade premium.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-colors ${s.color}`}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-pink-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-400" />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-400" />
                contato@festaebaloes.com.br
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-400" />
                Rua das Festas, 123 — São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Payment methods */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Formas de Pagamento
            </h3>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((m) => (
                <span
                  key={m}
                  className="flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  <CreditCard className="h-3.5 w-3.5 text-gray-400" />
                  {m}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Parcele em até 12x sem juros
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Festa &amp; Balões. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-gray-400">
            Feito com 💖 para celebrar momentos especiais
          </p>
        </div>
      </div>
    </footer>
  );
}
