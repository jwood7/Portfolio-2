import Image from "next/image";
import Link from "next/link";
import { Project } from "@/components/description";

export function MoreProjects({ projects, type }: { projects: Project[]; type: string }) {
  const sorted = [...projects].sort((a, b) => b.id - a.id);

  return (
    <section id="more" className="scroll-mt-24 py-16 md:py-20">
      <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
        <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold leading-none" style={{ letterSpacing: "-.04em" }}>
          More things I&apos;ve built
        </h2>
        <p className="max-w-[520px] text-muted">
          Not every project needs a giant case study. The goal here is to show range without making everything compete equally
          for attention.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project) => (
          <Link
            key={project.id}
            href={`/${type}/${project.id}`}
            className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-panel transition-all duration-200 hover:-translate-y-1.5 hover:border-accent/45 hover:shadow-[var(--shadow)]"
          >
            <div className="relative h-[170px]">
              <Image
                src={project.thumbnail.url}
                alt={project.thumbnail.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-1.5 text-lg font-bold" style={{ letterSpacing: "-.01em" }}>
                {project.title}
              </h3>
              <p className="text-sm text-muted">{project.pitch ?? project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="rounded-full border border-line bg-white/[0.025] px-2 py-1 text-xs text-[#cbd7d1]">
                    {tool}
                  </span>
                ))}
              </div>
              <span className="mt-auto pt-4 text-sm font-extrabold text-ink transition-colors group-hover:text-accent">
                See project →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
