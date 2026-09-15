"use client";

import { useProjects } from "@/components/projectsProvider";
import { useParams } from "next/navigation";
import { PortfolioPage } from "@/components/portfolioPage";
import { CaseStudy } from "@/components/caseStudy";
import { orderedProjects } from "@/lib/projectOrder";

export function ProjectDetail() {
  const { projects } = useProjects();
  const params = useParams<{ type: string; id: string }>();
  const id = Number(params.id);

  const currProject = projects.find((project) => project.id === id);

  if (!currProject) {
    return <div>Project not found</div>;
  }

  if (currProject.caseStudy) {
    const order = orderedProjects(projects);
    const currIndex = order.findIndex((project) => project.id === currProject.id);
    const nextProject = order[currIndex + 1] ?? order[0];

    return <CaseStudy project={currProject} type={params.type} nextProject={nextProject} />;
  }

  return <PortfolioPage />;
}
