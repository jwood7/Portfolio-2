import { ImageInfo } from "./slideshow";

export interface Project {
    id: number;
    title: string;
    dates: string[];
    link?: string; 
    description: string;
    source?: string;
    tools: string[];
    images:ImageInfo[];
}

export function Description({title="", dates=[], link, description="", source, tools=[], ...props}: Project) {
    console.log(props)
    return (
        <div className='w-full text-xl flex flex-col gap-4'>
            <h1 className='text-6xl'>{title}</h1>
            {dates.length >= 2 && <h2 className='text-4xl'>{dates[0]}-{dates[1]}</h2>}
            
            <div className='flex gap-5 w-full'>
                {link && <a href={link}>link</a> }
                {source && <a href={source}>github</a> }
            </div>

            <div className='flex gap-5 w-full'>
                {tools.map((tool, index) => 
                    <div key={tool+index}>{tool}</div>
                )}
            </div>
            <div>{description}</div>
        </div>
    )
}

