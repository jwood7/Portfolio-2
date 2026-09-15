"use client";
import { useProjects } from "@/components/projectsProvider";
import { Description } from "@/components/description";
import { Slideshow } from "@/components/slideshow";
import { ChangeProject } from "@/components/changeProject";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export function PortfolioPage() {
  const { projects } = useProjects();

  const params = useParams<{
    type: string;
    id: string;
  }>();

  const router = useRouter();

  const type = params.type;
  const id = Number(params.id);

  const currProject = projects.find(
    (project) => project.id === id
  );

  function setProjectById(id: number) {
    const project = projects.find(
      (project) => project.id === id
    );

    if (project) {
      router.push(`/${type}/${project.id}`);
    }
  }

  if (!currProject) {
    return <div>Project not found</div>;
  }

return (
  <div className="flex flex-1 flex-col items-center font-sans z-10">
    <div className="sticky top-0 z-40 w-full border-b border-line bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
        <Header />
      </div>
    </div>

    <main className="relative flex flex-1 w-full flex-col items-stretch justify-start md:flex-row md:items-center md:justify-center gap-[4vw]">

      {/* Main content */}
      <div className="flex w-full md:w-[50vw] flex-col md:justify-between md:h-[calc(100dvh-57px)] py-6 md:py-8 px-4 md:px-0">
        <Link
          href={`/${type}#work`}
          className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          ← Back to work
        </Link>

        <h1 className="md:hidden mt-4 text-2xl font-bold" style={{ letterSpacing: "-.02em" }}>
          {currProject.title}
        </h1>

        <div className="mt-4 md:mt-0">
          <Slideshow images={currProject.images} />
        </div>

        {/* Mobile: description scrolls in the normal page flow */}
        <div className="md:hidden mt-6">
          <Description {...currProject} showTitle={false} />
        </div>

        {/* Mobile: prev/next controls */}
        <div className="md:hidden mt-6 flex items-center gap-3">
            <ChangeProject
            variant="pill"
            isNext={false}
            currProject={currProject}
            setProjectById={setProjectById}
            />

            <ChangeProject
            variant="pill"
            isNext
            currProject={currProject}
            setProjectById={setProjectById}
            />
        </div>

        <div className="mt-8 md:mt-0">
          <Footer />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:h-[calc(100dvh-57px)] bg-panel border-l border-line justify-between flex-col w-[450px] px-16 py-12">
        <ChangeProject
          isNext={false}
          currProject={currProject}
          setProjectById={setProjectById}
        />

        <Description {...currProject} />

        <ChangeProject
          isNext
          currProject={currProject}
          setProjectById={setProjectById}
        />
      </div>

    </main>
  </div>
);
}
