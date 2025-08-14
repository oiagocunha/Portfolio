import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
      // persist last scroll position (optional UX)
      sessionStorage.setItem("scrollY", String(window.scrollY));
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
      className={`fixed bottom-6 right-6 z-50 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"} animate-none transition-none translate-x-0 translate-y-0`}
      style={{ transform: "none", willChange: "opacity" }}
    >
      <Button
        onClick={toTop}
        size="icon"
        variant="secondary"
        aria-label="Ir para o topo"
        className="rounded-full shadow-[0_8px_24px_hsl(var(--accent)/0.35)] transition-none hover:scale-100 animate-none motion-reduce:transition-none"
        style={{ transform: "none" }}
      >
        <ArrowUp className="h-4 w-4 animate-none" />
      </Button>
    </div>,
    document.body
  );
};

export default ScrollTop;
