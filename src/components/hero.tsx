"use client";

import { useRef } from "react";

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = visualRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
  }

  function handleMouseLeave() {
    const el = visualRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
  }

  return (
    <section className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-[1.08fr_.92fr] md:gap-14 md:py-20">
      <div>
        <div className="text-sm font-bold uppercase tracking-[.16em] text-accent-2">
          Software Developer · Full Stack · Data · AI
        </div>
        <h1
          className="my-4 max-w-[850px] text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.95] font-extrabold"
          style={{ letterSpacing: "-.04em" }}
        >
          I build software that turns interesting ideas into useful experiences.
        </h1>
        <p className="max-w-[640px] text-lg text-muted md:text-xl">
          I&apos;m Jacob Wood, a software developer focused on{" "}
          <strong className="font-semibold text-ink">interactive products, data visualization, AI, and full-stack development</strong>.
          I like taking complicated problems and turning them into experiences that feel clear, useful, and a little different.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Explore my work ↓︎
          </a>
          <a
            href="https://github.com/jwood7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-5 py-3 font-bold text-ink transition-transform hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-5 py-3 font-bold text-ink transition-transform hover:-translate-y-0.5"
          >
            About me
          </a>
        </div>
      </div>

      <div
        ref={visualRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
        className="relative min-h-[340px] overflow-hidden rounded-[32px] border border-line md:min-h-[460px]"
        style={{
          background: "linear-gradient(145deg, rgba(47,111,255,.12), rgba(53,208,127,.08))",
          boxShadow: "var(--shadow)",
          transition: "transform .2s ease",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div
          className="absolute rounded-full border border-white/[0.09]"
          style={{ width: 280, height: 280, left: 60, top: 50, animation: "spin 18s linear infinite" }}
        />
        <div
          className="absolute rounded-full border border-white/[0.09]"
          style={{ width: 180, height: 180, left: 110, top: 100, animation: "spin 18s linear infinite reverse" }}
        />

        <div
          className="absolute h-[10px] w-[10px] rounded-full bg-accent"
          style={{ left: "19%", top: "25%", boxShadow: "0 0 22px rgba(47,111,255,.65)", animation: "pulse 3s ease-in-out infinite" }}
        />
        <div
          className="absolute h-[10px] w-[10px] rounded-full bg-accent-2"
          style={{ left: "62%", top: "19%", boxShadow: "0 0 22px rgba(53,208,127,.65)", animation: "pulse 3s ease-in-out infinite .7s" }}
        />
        <div
          className="absolute h-[10px] w-[10px] rounded-full bg-accent"
          style={{ left: "77%", top: "52%", boxShadow: "0 0 22px rgba(47,111,255,.65)", animation: "pulse 3s ease-in-out infinite 1.5s" }}
        />
        <div
          className="absolute h-[10px] w-[10px] rounded-full bg-accent-2"
          style={{ left: "34%", top: "62%", boxShadow: "0 0 22px rgba(53,208,127,.65)", animation: "pulse 3s ease-in-out infinite 2s" }}
        />

        <div
          className="absolute left-[8%] right-[8%] bottom-[8%] rounded-2xl border border-line p-5 text-[13px]"
          style={{ background: "rgba(6,10,8,.82)", boxShadow: "var(--shadow)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
        >
          <div className="text-muted">
            <span className="text-accent">const</span> idea = <span className="text-accent-2">&quot;something useful&quot;</span>;
          </div>
          <div className="text-muted">
            <span className="text-accent">const</span> result = build(idea, curiosity, data);
          </div>
          <div className="mt-2 text-[#718079]">{"// ship it, test it, make it better"}</div>
        </div>
      </div>
    </section>
  );
}
