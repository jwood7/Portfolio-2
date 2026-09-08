import { getProjects } from "@/lib/projects";

// GET /api/projects
export async function GET(
  request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  const projects = await getProjects(type);

  return Response.json(projects);
}