
import { redirect, notFound } from "next/navigation";
import { getProjects } from "@/lib/projects";

const validTypes = ["software", "gamedev", "art"];

export default async function TypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  if (!validTypes.includes(type)) {
    notFound();
  }

  const projects = await getProjects(type);

  if (projects.length === 0) {
    notFound();
  }

  const highestId = Math.max(
    ...projects.map((project) => project.id)
  );

  redirect(`/${type}/${highestId}`);
}