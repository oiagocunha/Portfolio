import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "(11) 99999-9999",
    desc: "Seg a Sáb, 9h às 18h",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Mail,
    title: "Email",
    info: "contato@festaebaloes.com",
    desc: "Respondemos em até 24h",
    color: "text-pink-600 bg-pink-50",
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Rua das Flores, 123 - Centro",
    desc: "São Paulo - SP",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    info: "Seg a Sex: 9h - 18h",
    desc: "Sáb: 9h - 14h | Dom: Fechado",
    color: "text-yellow-600 bg-yellow-50",
  },
];

const faqItems = [
  {
    q: "Qual o prazo de entrega?",
    a: "O prazo de entrega varia de 2 a 7 dias úteis dependendo da sua localidade. Entregas na Grande São Paulo são realizadas em até 2 dias úteis.",
  },
  {
    q: "Vocês fazem decoração de festas?",
    a: "Sim! Oferecemos o serviço de montagem de decoração para festas na Grande São Paulo. Entre em contato pelo WhatsApp para solicitar um orçamento personalizado.",
  },
  {
    q: "Posso personalizar os kits de festa?",
    a: "Com certeza! Montamos kits personalizados de acordo com o tema e cores da sua festa. Basta nos informar os detalhes desejados pelo WhatsApp ou email.",
  },
  {
    q: "Quais as formas de pagamento aceitas?",
    a: "Aceitamos cartões de crédito (até 3x sem juros), débito, Pix e boleto bancário. O Pix tem aprovação instantânea para envio mais rápido.",
  },
  {
    q: "Os balões já vêm inflados?",
    a: "Os balões são enviados desinflados para garantir a qualidade do produto. Mas não se preocupe, incluímos instruções de como inflar e dicas de duração.",
  },
  {
    q: "Qual a política de troca e devolução?",
    a: "Você tem até 7 dias após o recebimento para solicitar a troca ou devolução de produtos com defeito. Entre em contato com nosso SAC para iniciar o processo.",
  },
];

const socialLinks = [
  { label: "Instagram", url: "#", emoji: "📸" },
  { label: "WhatsApp", url: "#", emoji: "💬" },
  { label: "Facebook", url: "#", emoji: "👍" },
  { label: "TikTok", url: "#", emoji: "🎵" },
];

const subjects = [
  "Dúvida sobre produto",
  "Orçamento para festa",
  "Acompanhar pedido",
  "Troca / Devolução",
  "Parceria comercial",
  "Outro assunto",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StoreContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Fale Conosco 📞
        </h1>
        <p className="mt-2 text-gray-500">
          Estamos prontos para ajudar a tornar sua festa inesquecível!
        </p>
      </motion.div>

      {/* Contact info cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {contactCards.map((card) => (
          <motion.div
            key={card.title}
            variants={itemVariants}
            className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className={cn(
                "mb-3 inline-flex rounded-lg p-2.5",
                card.color
              )}
            >
              <card.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900">{card.title}</h3>
            <p className="mt-1 text-sm font-medium text-gray-700">
              {card.info}
            </p>
            <p className="text-xs text-gray-400">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Form + Map */}
      <div className="mb-16 grid gap-8 lg:grid-cols-2">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            Envie sua mensagem ✉️
          </h2>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center py-12 text-center"
            >
              <span className="text-5xl">🎉</span>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Mensagem enviada!
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Retornaremos o mais rápido possível.
              </p>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => setSubmitted(false)}
              >
                Enviar outra mensagem
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Nome *
                  </label>
                  <Input
                    required
                    placeholder="Seu nome"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="seu@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <Input
                    placeholder="(11) 99999-9999"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, phone: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Assunto *
                  </label>
                  <Select
                    value={formState.subject}
                    onValueChange={(v) =>
                      setFormState((s) => ({ ...s, subject: v }))
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Mensagem *
                </label>
                <Textarea
                  required
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
              >
                <Send className="h-4 w-4" />
                Enviar Mensagem
              </Button>
            </form>
          )}
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-col gap-6"
        >
          <div className="flex-1 overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="flex h-full min-h-[300px] items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-pink-300" />
                <p className="mt-2 text-sm font-medium text-gray-500">
                  Mapa em breve
                </p>
                <p className="text-xs text-gray-400">
                  Rua das Flores, 123 - Centro, São Paulo - SP
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <h3 className="mb-3 font-semibold text-gray-900">
              Siga-nos nas redes sociais 🌐
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-600"
                >
                  <span>{s.emoji}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Separator className="mb-12" />

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
          Perguntas Frequentes 🤔
        </h2>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50"
              >
                <span className="pr-4 text-sm font-semibold text-gray-900">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200",
                    openFaq === i && "rotate-180"
                  )}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openFaq === i ? "auto" : 0,
                  opacity: openFaq === i ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
                  {item.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
