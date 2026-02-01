import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: "https://github.com/oiagocunha",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/oiagocunha",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/oiagocunha",
    icon: Instagram,
    label: "Instagram",
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <Button
          key={href}
          asChild
          variant="outline"
          className="flex-1 sm:flex-none transition-all duration-300 hover:scale-105 hover:shadow-md"
        >
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        </Button>
      ))}
    </div>
  );
};
