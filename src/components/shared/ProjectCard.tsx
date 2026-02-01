import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github, LucideIcon } from "lucide-react";
import { iconSizes, typography, transitions, shadows } from "@/constants/design-tokens";

interface ProjectCardProps {
  title: string;
  description: string;
  demo?: string;
  repo?: string;
  image: string;
  alt: string;
  technologies: string[];
  icon: LucideIcon;
}

export const ProjectCard = ({
  title,
  description,
  demo,
  repo,
  image,
  alt,
  technologies,
  icon: Icon,
}: ProjectCardProps) => {
  return (
    <motion.a
      href={demo || repo}
      target="_blank"
      rel="noreferrer"
      className="group block"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
    >
      <Card className={`overflow-hidden ${transitions.default} ${shadows.card}`}>
        <CardContent className="p-0">
          <AspectRatio ratio={16 / 9} className="overflow-hidden">
            <motion.img
              src={image}
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </AspectRatio>
          <div className="p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center rounded-full bg-primary/10 p-2.5 md:p-3 text-primary"
              >
                <Icon className={`${iconSizes.md}`} />
              </motion.div>
              <h3 className={`${typography.h3}`}>{title}</h3>
            </div>
            <p className={`mt-2 md:mt-3 ${typography.body} text-muted-foreground`}>
              {description}
            </p>
            <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-3 md:mt-4 flex gap-2">
              {demo && (
                <Badge
                  variant="outline"
                  className={`gap-1 ${transitions.fast} hover:bg-primary hover:text-primary-foreground`}
                >
                  <ExternalLink className={iconSizes.sm} />
                  Demo
                </Badge>
              )}
              {repo && (
                <Badge
                  variant="outline"
                  className={`gap-1 ${transitions.fast} hover:bg-primary hover:text-primary-foreground`}
                >
                  <Github className={iconSizes.sm} />
                  Código
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.a>
  );
};
