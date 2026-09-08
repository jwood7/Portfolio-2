// app/page.tsx

import { redirect } from "next/navigation";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects("software");

  if (projects.length === 0) {
    return <div>No projects found</div>;
  }

  const highestId = Math.max(
    ...projects.map((project) => project.id)
  );

  redirect(`/software/${highestId}`);
}