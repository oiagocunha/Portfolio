interface CaseStudyTextProps {
  text: string;
  className?: string;
}

export const CaseStudyText = ({ text, className }: CaseStudyTextProps) => {
  const parts = text.split(/(`[^`]+`)/g);

  return (
    <p className={className}>
      {parts.map((part, index) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code key={index}>{part.slice(1, -1)}</code>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  );
};
