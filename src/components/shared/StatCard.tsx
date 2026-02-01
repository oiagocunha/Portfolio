import AnimatedCounter from "../portfolio/AnimatedCounter";
import { typography } from "@/constants/design-tokens";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

export const StatCard = ({ value, suffix, label }: StatCardProps) => {
  return (
    <div className="space-y-1">
      <div className={`${typography.h3} text-primary`}>
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p className={`${typography.small} text-muted-foreground`}>{label}</p>
    </div>
  );
};
