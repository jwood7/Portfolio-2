
import { Project } from "./description";

export function ChangeProject({isNext = false, numProjects, currProject, setProjectById} : {isNext: boolean, numProjects: number, currProject: Project, setProjectById: (id: number) => void}){
    if ((currProject.id >= numProjects -1 && isNext) || (currProject.id == 0 && !isNext)){
        return (
            <button onClick={()=>{console.log("View All")}}>
                View All Projects
            </button>
        )
    } else if (isNext){
        return (
            <button onClick={() => setProjectById(currProject.id+1)}>
                <div>Next Project</div>
                <div>V</div>
            </button>
        )
    } else {
        return (
            <button  onClick={() => setProjectById(currProject.id-1)}>
                <div>^</div>
                <div>Previous Project</div>
            </button>
        )
    }

}