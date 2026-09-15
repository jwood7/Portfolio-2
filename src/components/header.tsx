import Link from "next/link";

export function Header() {
  return (
    <nav className="flex h-[56px] items-center justify-between">
      <Link href="/software" className="text-xl font-extrabold tracking-tight md:text-2xl">
        Jacob<span className="text-accent">.</span>
      </Link>
      <ul className="flex items-center gap-5 text-sm text-muted md:gap-7 md:text-base">
        <li>
          <Link className="transition-colors hover:text-ink" href="/software#work">
            Work
          </Link>
        </li>
        <li>
          <Link className="transition-colors hover:text-ink" href="/software#about">
            About
          </Link>
        </li>
        <li className="hidden sm:block">
          <a
            className="transition-colors hover:text-ink"
            target="_blank"
            rel="noreferrer"
            href="https://yakobay.itch.io"
          >
            Game Dev
          </a>
        </li>
        <li>
          <a
            className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-ink transition-colors hover:border-accent md:px-4 md:py-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jwood7"
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
