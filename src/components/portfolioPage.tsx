"use client";
import { useProjects } from "@/components/projectsProvider";
import Image from "next/image";
import { Description } from "@/components/description";
import { Slideshow } from "@/components/slideshow";
import { useState, useEffect } from "react";
import { ChangeProject } from "@/components/changeProject";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useParams, useRouter } from "next/navigation";
import { Project } from "./description";


const testData = [
  {
    "id": 0,
    "title": "Title1OLD",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "source": "https://github.com/jwood7",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": [{"url": "/images/software/Visualization1.png", "alt":"Visualization of counter strike 2 states"}]
  },
  {
    "id": 1,
    "title": "Title2",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": [{"url": "/images/software/Visualization1.png", "alt":"Visualization of counter strike 2 states"}, {"url": "/images/software/Visualization1.png", "alt":"Visualization of counter strike 2 states"}]
  },
  {
    "id": 2,
    "title": "Title3",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": [{"url": "/images/software/Visualization1.png", "alt":"Visualization of counter strike 2 states"}, {"url": "/images/software/Visualization1.png", "alt":"Visualization of counter strike 2 states"}, {"url": "/images/software/Visualization1.png", "alt":"Visualization of counter strike 2 states"}]
  },
]


export function PortfolioPage() {
  const { projects } = useProjects();

  const params = useParams<{
    type: string;
    id: string;
  }>();

  const [descriptionOpen, setDescriptionOpen] = useState(false);

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
  <div className="flex flex-col flex-1 items-center justify-center font-sans z-10">
    <main className="relative flex flex-1 w-full flex-col md:flex-row items-center justify-center gap-[4vw]">

      {/* Main content */}
      <div className="flex w-full md:w-[50vw] flex-col justify-between min-h-dvh md:h-dvh py-6 md:py-8">
        <Header />

        <div className="md:hidden z-30 flex items-center justify-between px-4 py-4 w-full bg-green-950 text-2xl">
            {currProject.title}
        </div>
        <Slideshow images={currProject.images} />
        {/* Mobile controls */}
        <div className="md:hidden z-30 flex items-center justify-between px-4 ">

            <ChangeProject
            isNext={false}
            currProject={currProject}
            numProjects={projects.length}
            setProjectById={setProjectById}
            />

            <button
            onClick={() => setDescriptionOpen(true)}
            className="rounded-full bg-green-950 px-5 py-3 text-white"
            >
            About
            </button>

            <ChangeProject
            isNext
            currProject={currProject}
            numProjects={projects.length}
            setProjectById={setProjectById}
            />

        </div>

        <Footer />
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex h-screen bg-green-950 justify-between flex-col w-[450px] px-16 py-12">
        <ChangeProject
          isNext={false}
          currProject={currProject}
          numProjects={projects.length}
          setProjectById={setProjectById}
        />

        <Description {...currProject} />

        <ChangeProject
          isNext
          currProject={currProject}
          numProjects={projects.length}
          setProjectById={setProjectById}
        />
      </div>

      

      {/* Mobile description modal */}
      {descriptionOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setDescriptionOpen(false)}
        >
          <div
            className="relative w-full max-w-md max-h-[80vh] overflow-y-auto rounded-xl bg-green-950 p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setDescriptionOpen(false)}
              className="absolute right-4 top-4 text-xl text-white"
              aria-label="Close project description"
            >
              ✕
            </button>

            <Description {...currProject} />
          </div>
        </div>
      )}

    </main>
  </div>
);
}

// VISUALS:
// Fix colors/theme 
// Animations on slide and project change

// FUNCTIONALITY: 
 // Setup order of projects somehow -> Wwill just prepend filenames with id number for now
// Show all projects
// ABout page
