import Image from "next/image";
import Link from "next/link";
import { Project } from "@/components/description";

function FeatureCard({ project, type, reverse = false }: { project: Project; type: string; reverse?: boolean }) {
  const image = project.images[0] ?? project.thumbnail;

  return (
    <article
      className={`grid grid-cols-1 overflow-hidden rounded-[var(--radius)] border border-line bg-panel shadow-[var(--shadow)] md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative min-h-[260px] md:min-h-[380px]">
        <Image src={image.url} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center p-7 md:p-10">
        <span className="text-xs font-extrabold uppercase tracking-[.14em] text-accent-2">Featured project</span>
        <h3 className="my-2 text-2xl font-bold md:text-[2rem]" style={{ letterSpacing: "-.03em" }}>
          {project.tagline ?? project.title}
        </h3>
        <p className="text-muted">{project.pitch ?? project.description}</p>
        <div className="my-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-line bg-white/[0.025] px-2.5 py-1.5 text-sm text-[#cbd7d1]">
              {tool}
            </span>
          ))}
        </div>
        <Link href={`/${type}/${project.id}`} className="inline-flex items-center gap-2 font-extrabold text-ink transition-colors hover:text-accent">
          {project.caseStudy ? "View case study" : "View project"} <span>→︎</span>
        </Link>
      </div>
    </article>
  );
}

function SecondaryCard({ project, type }: { project: Project; type: string }) {
  const image = project.images[0] ?? project.thumbnail;

  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-panel shadow-[var(--shadow)]">
      <div className="relative min-h-[220px]">
        <Image src={image.url} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-extrabold uppercase tracking-[.14em] text-accent-2">Featured project</span>
        <h3 className="my-2 text-xl font-bold" style={{ letterSpacing: "-.02em" }}>
          {project.tagline ?? project.title}
        </h3>
        <p className="text-sm text-muted">{project.pitch ?? project.description}</p>
        <div className="my-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-line bg-white/[0.025] px-2.5 py-1 text-xs text-[#cbd7d1]">
              {tool}
            </span>
          ))}
        </div>
        <Link
          href={`/${type}/${project.id}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-extrabold text-ink transition-colors hover:text-accent"
        >
          {project.caseStudy ? "View case study" : "View project"} <span>→︎</span>
        </Link>
      </div>
    </article>
  );
}

export function SelectedWork({ projects, type }: { projects: Project[]; type: string }) {
  const sorted = [...projects].sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));
  const [hero, ...secondary] = sorted;

  if (!hero) return null;

  return (
    <section id="work" className="scroll-mt-24 py-16 md:py-20">
      <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-none" style={{ letterSpacing: "-.04em" }}>
          Selected work
        </h2>
        <p className="max-w-[520px] text-muted">
          A few projects that best show how I think: start with a real problem, build something useful, and make the interaction
          easy to understand.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <FeatureCard project={hero} type={type} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {secondary.map((project) => (
            <SecondaryCard key={project.id} project={project} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
}
