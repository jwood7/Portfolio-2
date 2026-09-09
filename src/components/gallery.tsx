
import { Project } from "@/components/description";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Gallery({ projects }: { projects: Project[] }) {
  const params = useParams<{ type: string }>();

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
      {[...projects].reverse().map((project) => (
        <Link
  key={project.id}
  href={`/${params.type}/${project.id}`}
  className="group relative block w-[40vw] max-w-[250px] aspect-square overflow-hidden sm:w-[200px] md:w-[250px]"
>
  <Image
    fill
    src={project.thumbnail.url}
    alt={project.thumbnail.alt}
    className="object-cover"
  />

  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-10 pb-3 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
    <p className="truncate text-sm text-white md:text-base">
      {project.title}
    </p>
  </div>
</Link>
      ))}
    </div>
  );
}