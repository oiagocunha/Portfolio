import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, LucideIcon, MessageCircle, Play } from "lucide-react";
import { iconSizes, typography, transitions, shadows } from "@/constants/design-tokens";
import { Link } from "react-router-dom";
import type { ProjectComplexity, ProjectStatus } from "@/i18n/types";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
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
  problemLabel: string;
  solutionLabel: string;
  deliveryLabel: string;
  statusLabel?: string;
  mediaPlayLabel: string;
  icon: LucideIcon;
  /** Commercial cards hide complexity and heavy tech badges */
  mode?: "commercial" | "technical";
  whatsappHref?: string;
  whatsappCta?: string;
}

const FALLBACK_IMAGE = "/images/placeholder-project.svg";

const isVideo = (src: string) => /\.(mp4|webm)$/i.test(src);
const isAnimatedStill = (src: string) => /\.(gif|webp)$/i.test(src);

export const ProjectCard = ({
  title,
  description,
  problem,
  solution,
  demo,
  repo,
  image,
  media,
  alt,
  technologies,
  impact,
  caseStudyPath,
  status,
  demoLabel,
  codeLabel,
  caseStudyLabel,
  problemLabel,
  solutionLabel,
  deliveryLabel,
  statusLabel,
  mediaPlayLabel,
  icon: Icon,
  mode = "commercial",
  whatsappHref,
  whatsappCta,
}: ProjectCardProps) => {
  const reducedMotion = usePrefersReducedMotion();
  const [imgSrc, setImgSrc] = useState(image || FALLBACK_IMAGE);
  const [showMedia, setShowMedia] = useState(false);
  const mediaSrc = media && media !== image ? media : undefined;
  const canPlayMedia = Boolean(mediaSrc) && !reducedMotion;
  const hasVisual = Boolean(image || media);
  const visibleTech =
    mode === "technical" ? technologies.slice(0, 4) : technologies.slice(0, 3);

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
            {(problem || solution) && (
              <div className="mt-3 space-y-2 text-sm">
                {problem && (
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">{problemLabel}: </span>
                    {problem}
                  </p>
                )}
                {solution && (
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">{solutionLabel}: </span>
                    {solution}
                  </p>
                )}
              </div>
            )}
            {statusLabel && status && status !== "live" && (
              <div className="mt-3">
                <Badge variant="outline">{statusLabel}</Badge>
              </div>
            )}
            {mode === "technical" && visibleTech.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {visibleTech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
            <div className="mt-3 space-y-1.5">
              <p className="text-sm font-medium text-foreground">{deliveryLabel}</p>
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
              {repo && mode === "technical" && (
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
            {whatsappHref && whatsappCta && (
              <div className="mt-4">
                <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {whatsappCta}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
};
