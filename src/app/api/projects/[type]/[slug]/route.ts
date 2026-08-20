import { getProject } from "@/lib/projects";
// GET /api/projects/portfolio-site
export async function GET(
  request: Request,
  { params }: { params: Promise<{ type: string, slug: string }> }
) {
  const { type, slug } = await params;

  const project = await getProject(type, slug);

  if (!project) {
    return Response.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return Response.json(project);
}