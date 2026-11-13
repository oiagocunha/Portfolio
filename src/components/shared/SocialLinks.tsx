import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/contact";

const socialLinks = [
  {
    href: GITHUB_URL,
    icon: Github,
    label: "GitHub",
  },
  {
    href: LINKEDIN_URL,
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: INSTAGRAM_URL,
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
          className="flex-1 sm:flex-none"
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
