
import { Project } from "./description";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

export function ChangeProject({isNext = false, numProjects, currProject, setProjectById} : {isNext: boolean, numProjects: number, currProject: Project, setProjectById: (id: number) => void}){
    const params = useParams<{
        type: string;
      }>();

    if ((currProject.id >= numProjects -1 && !isNext) || (currProject.id == 0 && isNext)){
        return (
            <Link href={`/${params.type}/gallery`} className=" text-xl h-[68px] text-center">
                View All Projects
            </Link>
        )
    } else if (isNext){
        return (
            <button className="flex flex-col text-xl items-center justify-center" onClick={() => setProjectById(currProject.id-1)}>
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
            <button  className="flex flex-col text-xl items-center justify-center" onClick={() => setProjectById(currProject.id+1)}>
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