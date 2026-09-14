import { Newspaper, Briefcase, MessageSquare, ShoppingCart, LucideIcon } from "lucide-react";
import type { ProjectIconKey } from "@/i18n/types";

export const projectIcons: Record<ProjectIconKey, LucideIcon> = {
  publicData: Newspaper,
  jobMatch: Briefcase,
  chatPlatform: MessageSquare,
  croche: ShoppingCart,
};
