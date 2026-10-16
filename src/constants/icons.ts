import {
  Newspaper,
  Briefcase,
  MessageSquare,
  ShoppingCart,
  Inbox,
  CalendarDays,
  Bot,
  LucideIcon,
} from "lucide-react";
import type { ProjectIconKey } from "@/i18n/types";

export const projectIcons: Record<ProjectIconKey, LucideIcon> = {
  publicData: Newspaper,
  jobMatch: Briefcase,
  chatPlatform: MessageSquare,
  croche: ShoppingCart,
  leadPilot: Inbox,
  agendaFlow: CalendarDays,
  assistIa: Bot,
};
