import { getProjects } from "@/lib/projects";
import { ProjectsProvider } from "@/components/projectsProvider";

export default async function TypeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const projects = await getProjects(type);

  return (
    <ProjectsProvider projects={projects}>
      {children}
    </ProjectsProvider>
  );
}