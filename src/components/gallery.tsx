
import { Project } from "@/components/description";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Gallery({ projects }: { projects: Project[] }) {
    const params = useParams<{
        type: string;
    }>();
    
    return (
       <div className="flex flex-wrap gap-10 justify-center">
        {[...projects].reverse().map((project) => (
            <Link
            key={project.id}
            href={`/${params.type}/${project.id}`}
            className="group relative w-[250px] h-[250px] overflow-hidden"
            >
            <Image
                fill
                src={project.thumbnail.url}
                alt={project.thumbnail.alt}
                className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pt-12 pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white truncate">
                {project.title}
                </p>
            </div>
            </Link>
        ))}
        </div>
    );

}