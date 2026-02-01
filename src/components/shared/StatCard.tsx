import AnimatedCounter from "../portfolio/AnimatedCounter";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

export const StatCard = ({ value, suffix, label }: StatCardProps) => {
  return (
    <div className="space-y-1">
      <div className="text-2xl md:text-3xl font-bold text-primary">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p className="text-xs md:text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
