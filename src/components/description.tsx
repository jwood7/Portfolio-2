import { ImageInfo } from "./slideshow";
import Image from "next/image";


// Move this to somewhere else later
export interface Project {
    id: number;
    title: string;
    dates: string[];
    link?: string; 
    description: string;
    source?: string;
    tools: string[];
    images:ImageInfo[];
    thumbnail:ImageInfo;
}

export function Description({title="", dates=[], link, description="", source, tools=[], ...props}: Project) {
    console.log(props)
    return (
        <div className='w-full md:text-xl flex flex-col gap-4'>
            <h1 className='text-2xl md:text-6xl'>{title}</h1>
            {dates.length >= 1 && <h2 className='text-xl md:text-4xl'>{dates[0]}{dates.length >= 2 && `-${dates[1]}`}</h2>}
            
            <div className='flex gap-5 w-full'>
                {link && 
                    <a href={link} className="flex gap-2"  target="_blank" >
                        <Image
                            width={30}
                            height={30}
                            src={"/icons/Link.png"}
                            alt={"Link Icon"}
                        />    
                        <div>Link</div>
                    </a> 
                }
                {source && 
                    <a href={source}  className="flex gap-2" target="_blank" >
                        <Image
                            width={30}
                            height={30}
                            src={"/icons/github.svg"}
                            alt={"Github Icon"}
                        />    
                        <div>Github</div>
                    </a> 
                }
            </div>

            <div className='flex gap-5 w-full flex-wrap'>
                {tools.map((tool, index) => 
                    <div key={tool+index} className="bg-green-600 py-1 px-5 rounded-md">{tool}</div>
                )}
            </div>
            <div>{description}</div>
        </div>
    )
}

