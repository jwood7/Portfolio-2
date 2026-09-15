export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 my-16 rounded-[28px] border border-line p-7 md:my-20 md:p-14"
      style={{ background: "linear-gradient(145deg, rgba(53,208,127,.08), rgba(47,111,255,.07))" }}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-16">
        <div>
          <div className="font-extrabold text-accent-2">ABOUT ME</div>
          <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold leading-[1.05]" style={{ letterSpacing: "-.03em" }}>
            Build it. Understand it. Improve it.
          </h2>
        </div>
        <div>
          <p className="text-lg text-muted md:text-xl">
            I&apos;m a software developer who likes turning complex data and unusual ideas into useful, interactive products.
            Most of my work has been in full-stack development, but I&apos;ve also spent a lot of time with data, AI, and
            visualization, building everything from internal business tools and client websites to dashboards, Discord bots,
            and interactive visualizations.
          </p>
          <p className="mt-4 text-lg text-muted md:text-xl">
            What I enjoy most is taking an idea, figuring out how it should work, and turning it into something real. I&apos;m
            especially drawn to projects where technical problem-solving and good design meet, where the software isn&apos;t
            just functional but genuinely useful to people.
          </p>
          <p className="mt-4 text-lg text-muted md:text-xl">
            When I&apos;m not building software, I&apos;m usually cooking something new, planning the next trip, or unwinding
            with a board game or video game. I also make games on the side, draw when the mood strikes, and try to spend as
            much of the rest of it as I can with friends and family.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-white/[0.035] p-4">
              <strong className="block text-xl">Full Stack</strong>
              <span className="text-sm text-muted">Products end to end</span>
            </div>
            <div className="rounded-2xl border border-line bg-white/[0.035] p-4">
              <strong className="block text-xl">Data + AI</strong>
              <span className="text-sm text-muted">Insight from complexity</span>
            </div>
            <div className="rounded-2xl border border-line bg-white/[0.035] p-4">
              <strong className="block text-xl">Interactive</strong>
              <span className="text-sm text-muted">Software people enjoy using</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
