import { Project } from "@/components/description";

// Case-study projects first (in curated featuredRank order), then everything
// else newest first, so browsing prev/next never bounces between the two
// page templates more than once.
export function orderedProjects(projects: Project[]): Project[] {
  const featured = projects
    .filter((project) => project.featuredRank)
    .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));

  const rest = projects
    .filter((project) => !project.featuredRank)
    .sort((a, b) => b.id - a.id);

  return [...featured, ...rest];
}
