import React from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number; // ms per character
  deletingSpeed?: number; // ms per character when deleting
  pauseBetween?: number; // ms to wait after a word completes
  loop?: boolean;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseBetween = 1400,
  loop = true,
  className = "",
}) => {
  const [index, setIndex] = React.useState(0); // current word index
  const [subIndex, setSubIndex] = React.useState(0); // current char index
  const [deleting, setDeleting] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  React.useEffect(() => {
    if (!words.length) return;

    if (!loop && index >= words.length) return;

    const currentWord = words[index % words.length];
    let timeout: number;

    if (!deleting && subIndex === currentWord.length) {
      timeout = window.setTimeout(() => setDeleting(true), pauseBetween);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
      timeout = window.setTimeout(() => setSubIndex(1), typingSpeed);
    } else {
      timeout = window.setTimeout(() => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }, deleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, deletingSpeed, pauseBetween, loop]);

  const currentWord = words[index % words.length] || "";
  const shown = currentWord.substring(0, subIndex);

  return (
    <span className={className} aria-label={currentWord}>
      {shown}
      <span className="inline-block w-[1ch]">{blink ? "|" : " "}</span>
    </span>
  );
};

export default Typewriter;
