import { MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n";
import { zIndex } from "@/constants/design-tokens";

const WhatsAppFloat = () => {
  const { t } = useI18n();
  const href = `https://wa.me/${t.contact.whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-5 right-5 md:bottom-6 md:right-6 ${zIndex.fixed} inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]`}
      aria-label={t.whatsappFloat.label}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
      <span className="pr-0.5">{t.whatsappFloat.label}</span>
    </a>
  );
};

export default WhatsAppFloat;
