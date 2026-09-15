export function ProjectLinks({
  link,
  source,
  links,
}: {
  link?: string;
  source?: string;
  links?: { label: string; url: string }[];
}) {
  if (!link && !source && !links?.length) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
        >
          View live site ↗
        </a>
      )}
      {source && (
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          Source ↗
        </a>
      )}
      {links?.map((extra) => (
        <a
          key={extra.url}
          href={extra.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          {extra.label} ↗
        </a>
      ))}
    </div>
  );
}
