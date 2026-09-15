"use client";

import { useProjects } from "@/components/projectsProvider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selectedWork";
import { MoreProjects } from "@/components/moreProjects";
import { About } from "@/components/about";
import { useParams } from "next/navigation";

export default function LandingPage() {
  const { projects } = useProjects();
  const params = useParams<{ type: string }>();

  const featured = projects.filter((project) => project.featuredRank);
  const rest = projects.filter((project) => !project.featuredRank);

  return (
    <div className="flex flex-1 flex-col items-center font-sans z-10">
      <div className="sticky top-0 z-40 w-full border-b border-line bg-bg/75 backdrop-blur-xl">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <Header />
        </div>
      </div>

      <main className="mx-auto w-[min(1160px,calc(100%-32px))] flex-1">
        <Hero />
        <SelectedWork projects={featured} type={params.type} />
        <MoreProjects projects={rest} type={params.type} />
        <About />
        <div className="pb-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}
