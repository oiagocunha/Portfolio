import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const getDuration = (value: number) => {
  // Números pequenos: tempo suficiente para ver 0 → 1 → 2 → ...
  // Números grandes: um pouco mais longo, mas com teto para não travar
  return Math.min(3, Math.max(1.8, value * 0.04));
};

const AnimatedCounter = ({ value, suffix = "", duration }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (!isInView) return;

    const animationDuration = duration ?? getDuration(value);

    const controls = animate(0, value, {
      duration: animationDuration,
      // linear faz cada degrau do contador aparecer de forma mais perceptível
      ease: "linear",
      onUpdate: (latest) => {
        setDisplay(latest >= value ? value : Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
