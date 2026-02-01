import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const ExperienceCard = ({
  role,
  company,
  period,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Briefcase className="h-5 w-5 text-primary" />
              {role}
            </CardTitle>
            <p className="text-lg font-semibold text-accent mt-1">{company}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {period}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-2 mb-4">
          {description.map((item, i) => (
            <li key={i} className="flex gap-2 text-muted-foreground">
              <span className="text-primary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
