import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github, LucideIcon, Play } from "lucide-react";
import { iconSizes, typography, transitions, shadows } from "@/constants/design-tokens";
import { Link } from "react-router-dom";
import type { ProjectComplexity, ProjectStatus } from "@/i18n/types";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  demo?: string;
  docs?: string;
  repo?: string;
  image?: string;
  media?: string;
  alt: string;
  technologies: string[];
  complexity: ProjectComplexity;
  impact: string[];
  caseStudyPath?: string;
  status?: ProjectStatus;
  demoLabel: string;
  docsLabel: string;
  codeLabel: string;
  caseStudyLabel: string;
  complexityLabel: string;
  complexityValue: string;
  statusLabel?: string;
  mediaPlayLabel: string;
  icon: LucideIcon;
}

const FALLBACK_IMAGE = "/images/placeholder-project.svg";

const isVideo = (src: string) => /\.(mp4|webm)$/i.test(src);
const isAnimatedStill = (src: string) => /\.(gif|webp)$/i.test(src);

export const ProjectCard = ({
  title,
  description,
  demo,
  docs,
  repo,
  image,
  media,
  alt,
  technologies,
  impact,
  caseStudyPath,
  status,
  demoLabel,
  docsLabel,
  codeLabel,
  caseStudyLabel,
  complexityLabel,
  complexityValue,
  statusLabel,
  mediaPlayLabel,
  icon: Icon,
}: ProjectCardProps) => {
  const reducedMotion = usePrefersReducedMotion();
  const [imgSrc, setImgSrc] = useState(image || FALLBACK_IMAGE);
  const [showMedia, setShowMedia] = useState(false);
  const mediaSrc = media && media !== image ? media : undefined;
  const canPlayMedia = Boolean(mediaSrc) && !reducedMotion;
  const hasVisual = Boolean(image || media);

  return (
    <motion.article
      className="group block h-full"
      whileHover={reducedMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
    >
      <Card className={`overflow-hidden h-full ${transitions.default} ${shadows.card}`}>
        <CardContent className="p-0">
          {hasVisual && (
            <AspectRatio ratio={16 / 9} className="relative overflow-hidden bg-muted/40">
              {showMedia && mediaSrc && isVideo(mediaSrc) ? (
                <video
                  src={mediaSrc}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={imgSrc}
                  aria-label={alt}
                />
              ) : showMedia && mediaSrc && isAnimatedStill(mediaSrc) ? (
                <img src={mediaSrc} alt={alt} className="h-full w-full object-cover" />
              ) : (
                <motion.img
                  src={imgSrc}
                  alt={alt}
                  loading="lazy"
                  width={640}
                  height={360}
                  onError={() => setImgSrc(FALLBACK_IMAGE)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              )}
              {canPlayMedia && (
                <button
                  type="button"
                  onClick={() => setShowMedia((open) => !open)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md border bg-background/90 px-2 py-1 text-xs font-medium shadow-sm backdrop-blur"
                  aria-pressed={showMedia}
                >
                  <Play className="h-3.5 w-3.5" />
                  {mediaPlayLabel}
                </button>
              )}
            </AspectRatio>
          )}
          <div className="p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary/10 p-2.5 md:p-3 text-primary">
                <Icon className={`${iconSizes.md}`} />
              </div>
              <h3 className={`${typography.h3}`}>{title}</h3>
            </div>
            <p className={`mt-2 md:mt-3 ${typography.body} text-muted-foreground`}>
              {description}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                {complexityLabel}: {complexityValue}
              </Badge>
              {statusLabel && status && status !== "live" && (
                <Badge variant="outline">{statusLabel}</Badge>
              )}
            </div>
            <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              {impact.map((item) => (
                <p key={item} className="text-sm text-muted-foreground">
                  - {item}
                </p>
              ))}
            </div>
            <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer">
                  <Badge
                    variant="outline"
                    className={`gap-1 cursor-pointer ${transitions.fast} hover:bg-primary hover:text-primary-foreground`}
                  >
                    <ExternalLink className={iconSizes.sm} />
                    {demoLabel}
                  </Badge>
                </a>
              )}
              {docs && (
                <a href={docs} target="_blank" rel="noreferrer">
                  <Badge
                    variant="outline"
                    className={`gap-1 cursor-pointer ${transitions.fast} hover:bg-primary hover:text-primary-foreground`}
                  >
                    <ExternalLink className={iconSizes.sm} />
                    {docsLabel}
                  </Badge>
                </a>
              )}
              {repo && (
                <a href={repo} target="_blank" rel="noreferrer">
                  <Badge
                    variant="outline"
                    className={`gap-1 cursor-pointer ${transitions.fast} hover:bg-primary hover:text-primary-foreground`}
                  >
                    <Github className={iconSizes.sm} />
                    {codeLabel}
                  </Badge>
                </a>
              )}
              {caseStudyPath && (
                <Link to={caseStudyPath}>
                  <Badge
                    variant="outline"
                    className={`gap-1 cursor-pointer ${transitions.fast} hover:bg-primary hover:text-primary-foreground`}
                  >
                    {caseStudyLabel}
                  </Badge>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
};
