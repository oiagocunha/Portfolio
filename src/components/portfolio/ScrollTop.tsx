import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";

const ScrollTop = () => {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed bottom-24 right-5 md:bottom-28 md:right-6 z-50 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity`}
    >
      <Button
        onClick={toTop}
        size="icon"
        variant="secondary"
        aria-label={t.a11y.scrollTop}
        className="rounded-full shadow-[0_8px_24px_hsl(var(--accent)/0.35)]"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>,
    document.body,
  );
};

export default ScrollTop;
