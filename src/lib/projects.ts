import type { ProjectIconKey, ProjectItem, ProjectTag } from "@/i18n/types";

/** Which honest label a project gets: internal work, real client, personal open source or demo. */
export function projectTag(project: Pick<ProjectItem, "status" | "kind" | "repo">): ProjectTag | undefined {
  if (project.status === "internal") return "internal";
  if (project.kind === "real") return "client";
  if (project.kind === "demo") return "demo";
  if (project.repo) return "authored";
  return undefined;
}

/** The projects named by `keys`, in that order; unknown keys are skipped. */
export function pickProjects(projects: ProjectItem[], keys: ProjectIconKey[]) {
  return keys
    .map((key) => projects.find((project) => project.iconKey === key))
    .filter((project): project is ProjectItem => Boolean(project));
}
