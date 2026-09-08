import fs from "fs/promises";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

// get all projects in folder for given type
export async function getProjects(type: string) {
  const typeDirectory = path.join(contentDirectory, type);

  const files = await fs.readdir(typeDirectory);

  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        const filePath = path.join(typeDirectory, file);

        const contents = await fs.readFile(filePath, "utf8");
        const project = JSON.parse(contents);

        return {
          ...project,
          type,
          slug: path.basename(file, ".json"),
        };
      })
  );

  return projects;
}

// get specific project
export async function getProject(type: string, slug: string) {
  const filePath = path.join(
    contentDirectory,
    type,
    `${slug}.json`
  );

  try {
    const contents = await fs.readFile(filePath, "utf8");

    return {
      ...JSON.parse(contents),
      type,
      slug,
    };
  } catch (error: any) {
    if (error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}