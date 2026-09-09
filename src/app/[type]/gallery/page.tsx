"use client";

import { useProjects } from "@/components/projectsProvider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Gallery from "@/components/gallery";
export default function GalleryPage() {
  const { projects } = useProjects();

  return (
    <div className="flex flex-1 flex-col items-center font-sans z-10">
      <main className="flex w-full flex-1 flex-col items-center md:flex-row md:items-stretch md:justify-center md:gap-[4vw]">
        
        {/* Gallery section */}
        <div className="flex min-h-dvh w-full flex-col justify-between px-4 py-6 md:h-dvh md:w-[50vw] md:px-0 md:py-8">
          <Header />
          
          <div className="my-8 pt-12">
            <h1 className="text-6xl w-full text-center pb-10 ">Projects</h1>
            <Gallery projects={projects} />
          </div>

          <Footer />
        </div>

        {/* About section */}
        <div className="flex w-full flex-col justify-center gap-8 bg-green-950 px-6 py-12 md:h-screen md:w-[450px] md:px-16">
          <div className="text-4xl md:text-6xl">
            About Me
          </div>

          <p className="whitespace-pre-wrap text-sm leading-relaxed md:text-xl">
            {`I'm Jacob Wood, a software developer who likes building things that are useful, interactive, and a little different.

Most of my work has been in full-stack development, but I've also spent a lot of time working with data, AI, and visualization. I've built everything from internal business tools and websites to dashboards, Discord bots, and interactive visualizations.

What I enjoy most is taking an idea, figuring out how it should work, and turning it into something real. I'm especially drawn to projects where I can combine technical problem solving with good design and make something that's genuinely useful to people.`}
          </p>
        </div>

      </main>
    </div>
  );
}
  