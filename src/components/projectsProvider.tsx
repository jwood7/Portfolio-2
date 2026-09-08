"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import { Project } from "@/components/description";

type ProjectsContextType = {
  projects: Project[];
};

const ProjectsContext =
  createContext<ProjectsContextType | null>(null);

export function ProjectsProvider({
  projects,
  children,
}: {
  projects: Project[];
  children: ReactNode;
}) {
  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error(
      "useProjects must be used inside ProjectsProvider"
    );
  }

  return context;
}