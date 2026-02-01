import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  link: string;
  skills: string[];
  viewCertLabel: string;
}

export const CertificationCard = ({
  title,
  issuer,
  date,
  credential,
  link,
  skills,
  viewCertLabel,
}: CertificationCardProps) => {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
      <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl mb-2">
              <Award className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="line-clamp-2">{title}</span>
            </CardTitle>
            <p className="text-sm font-medium text-accent">{issuer}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
            <Calendar className="h-3 w-3" />
            {date}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground mb-4">{credential}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group-hover:translate-x-1 duration-300"
          >
            {viewCertLabel}
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </CardContent>
    </Card>
  );
};
