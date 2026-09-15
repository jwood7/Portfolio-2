import { ImageInfo } from "./slideshow";
import { ProjectLinks } from "./projectLinks";

export interface CaseStudy {
  problem: string;
  approach: string;
  challenge: string;
  result: string;
  learned?: string;
}

// Move this to somewhere else later
export interface Project {
  id: number;
  title: string;
  dates: string[];
  link?: string;
  description: string;
  tagline?: string;
  pitch?: string;
  featuredRank?: 1 | 2 | 3;
  caseStudy?: CaseStudy;
  links?: { label: string; url: string }[];
  source?: string;
  tools: string[];
  images: ImageInfo[];
  thumbnail: ImageInfo;
}

export function Description({
  title = "",
  dates = [],
  link,
  description = "",
  source,
  links,
  tools = [],
  showTitle = true,
}: Project & { showTitle?: boolean }) {
  return (
    <div className="flex w-full flex-col gap-4 md:text-xl">
      {showTitle && (
        <h1 className="text-2xl md:text-5xl" style={{ letterSpacing: "-.02em" }}>
          {title}
        </h1>
      )}
      {dates.length >= 1 && (
        <h2 className="text-base text-muted md:text-lg">
          {dates[0]}
          {dates.length >= 2 && ` – ${dates[1]}`}
        </h2>
      )}

      <ProjectLinks link={link} source={source} links={links} />

      <div className="flex w-full flex-wrap gap-2">
        {tools.map((tool, index) => (
          <div key={tool + index} className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-sm text-ink">
            {tool}
          </div>
        ))}
      </div>
      <div className="text-base leading-relaxed text-muted md:text-lg">{description}</div>
    </div>
  );
}
