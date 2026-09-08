"use client";

import { useProjects } from "@/components/projectsProvider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Gallery from "@/components/gallery";

export default function GalleryPage() {
  const { projects } = useProjects();

  return (
   <div className="flex flex-col flex-1 items-center justify-center font-sans z-10">
      <main className="flex flex-1 w-full flex-row items-center justify-center gap-[4vw]">

        <div className="flex w-[50vw] flex-col justify-between h-dvh py-8">
          <Header />
            <Gallery projects={projects}/>
          <Footer />
        </div>

        <div className="h-screen bg-green-950 flex align-items-center justify-center flex-col w-[450px] px-16 py-12 gap-10">


                <div className="text-6xl"> About Me </div>

                <p className="whitespace-pre-wrap"> 
                    {`I'm Jacob Wood, a software developer who likes building things that are useful, interactive, and a little different. \n
Most of my work has been in full-stack development, but I've also spent a lot of time working with data, AI, and visualization. I've built everything from internal business tools and websites to dashboards, Discord bots, and interactive visualizations. \n
What I enjoy most is taking an idea, figuring out how it should work, and turning it into something real. I'm especially drawn to projects where I can combine technical problem solving with good design and make something that's genuinely useful to people. \n
                    `}
                </p>

        </div>
      </main>
    </div>
  );
}
  