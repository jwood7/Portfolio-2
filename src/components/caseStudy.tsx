import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Project } from "@/components/description";
import { ProjectLinks } from "@/components/projectLinks";

const sections = [
  { num: "01", key: "problem", label: "The problem" },
  { num: "02", key: "approach", label: "The approach" },
  { num: "03", key: "challenge", label: "What was interesting" },
  { num: "04", key: "result", label: "The result" },
] as const;

export function CaseStudy({ project, type, nextProject }: { project: Project; type: string; nextProject: Project }) {
  const caseStudy = project.caseStudy!;
  const heroImage = project.images[0] ?? project.thumbnail;
  const secondaryImage = project.images[1] ?? project.images[0] ?? project.thumbnail;

  return (
    <div className="flex flex-1 flex-col items-center font-sans z-10">
      <div className="sticky top-0 z-40 w-full border-b border-line bg-bg/75 backdrop-blur-xl">
        <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
          <Header />
        </div>
      </div>

      <main className="mx-auto w-[min(1160px,calc(100%-32px))] flex-1">
        <section className="pb-10 pt-14 md:pt-20">
          <Link href={`/${type}#work`} className="mb-7 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
            ← Back to projects
          </Link>
          <div className="text-xs font-extrabold uppercase tracking-[.14em] text-accent-2">Case study</div>
          <h1 className="my-3 max-w-[900px] text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[0.98]" style={{ letterSpacing: "-.03em" }}>
            {project.title}
          </h1>
          <p className="max-w-[720px] text-lg text-muted md:text-xl">{project.pitch ?? project.description}</p>

          <div className="mt-6">
            <ProjectLinks link={project.link} source={project.source} links={project.links} />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-line bg-white/[0.025] p-4">
              <span className="mb-1 block text-xs uppercase tracking-[.1em] text-muted">Role</span>
              <strong className="text-sm">Design + Development</strong>
            </div>
            <div className="rounded-2xl border border-line bg-white/[0.025] p-4">
              <span className="mb-1 block text-xs uppercase tracking-[.1em] text-muted">Timeline</span>
              <strong className="text-sm">{project.dates.join(" – ")}</strong>
            </div>
            <div className="rounded-2xl border border-line bg-white/[0.025] p-4">
              <span className="mb-1 block text-xs uppercase tracking-[.1em] text-muted">Built With</span>
              <strong className="text-sm">{project.tools.join(" · ")}</strong>
            </div>
            <div className="rounded-2xl border border-line bg-white/[0.025] p-4">
              <span className="mb-1 block text-xs uppercase tracking-[.1em] text-muted">Project Type</span>
              <strong className="text-sm">Independent Build</strong>
            </div>
          </div>

          <div className="relative mt-10 min-h-[300px] overflow-hidden rounded-[28px] border border-line shadow-[var(--shadow)] md:min-h-[520px]">
            <Image src={heroImage.url} alt={heroImage.alt} fill sizes="100vw" className="object-cover" priority />
          </div>
        </section>

        {sections.map(({ num, key, label }) => (
          <section key={key} className="grid grid-cols-1 gap-8 py-12 md:grid-cols-[.78fr_1.22fr] md:gap-20 md:py-16">
            <div className="h-max">
              <div className="text-xs font-extrabold tracking-[.15em] text-accent-2">{num}</div>
              <h2 className="my-2 text-[clamp(1.8rem,3.6vw,2.7rem)] font-extrabold leading-none" style={{ letterSpacing: "-.03em" }}>
                {label}
              </h2>
            </div>
            <div className="text-lg leading-relaxed text-muted md:text-xl">
              <p>{caseStudy[key]}</p>

              {key === "approach" && (
                <div className="my-8 overflow-hidden rounded-3xl border border-line">
                  <div className="relative min-h-[260px] md:min-h-[360px]">
                    <Image
                      src={secondaryImage.url}
                      alt={secondaryImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {key === "result" && caseStudy.learned && (
                <div
                  className="my-7 rounded-[20px] border border-line p-6"
                  style={{ background: "linear-gradient(145deg, rgba(47,111,255,.07), rgba(53,208,127,.05))" }}
                >
                  <strong className="mb-1.5 block text-lg text-ink">What I&apos;d improve next</strong>
                  <p className="m-0 text-base">{caseStudy.learned}</p>
                </div>
              )}

              {key === "result" && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-line bg-white/[0.025] px-3 py-1.5 text-sm text-[#d4ded8]">
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        <Link
          href={`/${type}/${nextProject.id}`}
          className="my-10 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-line p-8 md:my-16 md:flex-row md:items-center md:p-11"
          style={{ background: "linear-gradient(145deg, rgba(255,255,255,.03), rgba(47,111,255,.06))" }}
        >
          <div>
            <small className="block font-extrabold uppercase tracking-[.12em] text-muted">Next project</small>
            <h3 className="mt-1 text-2xl font-extrabold md:text-4xl" style={{ letterSpacing: "-.03em" }}>
              {nextProject.title} →
            </h3>
          </div>
          <span className="inline-flex rounded-full bg-accent px-5 py-3 font-extrabold text-white">View next project</span>
        </Link>

        <div className="pb-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}
