
import { Project } from "./description";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useProjects } from "./projectsProvider";
import { orderedProjects } from "@/lib/projectOrder";

export function ChangeProject({isNext = false, currProject, setProjectById, variant = "arrow"} : {isNext: boolean, currProject: Project, setProjectById: (id: number) => void, variant?: "arrow" | "pill"}){
    const params = useParams<{
        type: string;
      }>();
    const { projects } = useProjects();

    const order = orderedProjects(projects);
    const currIndex = order.findIndex((project) => project.id === currProject.id);
    const target = order[isNext ? currIndex + 1 : currIndex - 1];

    if (variant === "pill") {
        const pillClass = "flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-3 text-sm font-bold text-ink transition-colors hover:border-accent";

        if (!target) {
            return (
                <Link href={`/${params.type}#work`} className={pillClass}>
                    View all projects
                </Link>
            )
        }

        return (
            <button
                className={pillClass}
                onClick={() => setProjectById(target.id)}
            >
                {isNext ? (
                    <>Next <span aria-hidden="true">→</span></>
                ) : (
                    <><span aria-hidden="true">←</span> Previous</>
                )}
            </button>
        )
    }

    if (!target){
        return (
            <Link href={`/${params.type}#work`} className="md:w-full w-24 h-[68px] text-center md:text-xl text-muted transition-colors hover:text-ink">
                View All Projects
            </Link>
        )
    } else if (isNext){
        return (
            <button className="flex flex-col md:w-full w-24 text-center md:text-xl items-center justify-center" onClick={() => setProjectById(target.id)}>
                <div>Next Project</div>
                <Image
                    width={40}
                    height={40}
                    src={"/icons/arrow_up.png"}
                    alt={"Down Arrow"}
                    className="rotate-180"
                />
            </button>
        )
    } else {
        return (
            <button  className="flex flex-col md:w-full w-24 text-center md:text-xl  items-center justify-center" onClick={() => setProjectById(target.id)}>
                <Image
                    width={40}
                    height={40}
                    src={"/icons/arrow_up.png"}
                    alt={"Up Arrow"}
                />
                <div>Previous Project</div>
            </button>
        )
    }

}
