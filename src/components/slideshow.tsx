import Image from "next/image"
import { useState } from "react"


export interface ImageInfo{
    url: string;
    alt: string;
}

export function Slideshow({images}: {images: ImageInfo[]}) {
    const [currImage, setCurrImage] = useState(0);
    return (
        <div className="flex flex-col items-center">
            <Image
                width={0}
                height={0}
                src={images[currImage].url}
                alt={images[currImage].alt}
                sizes="50vw"
                className="w-full h-auto"
            />
            {images.length > 1 && 
                <div className="flex items-center gap-2 justify-center py-5">
                    <button onClick={() => setCurrImage(currImage > 0 ? currImage - 1 : images.length - 1)}>
                         <Image
                            width={40}
                            height={40}
                            src={"/icons/arrow_up.png"}
                            alt={"Left Arrow"}
                            className="rotate-270"
                        />
                    </button>
                    {Array.from({length: images.length}).map(( _, index)=>{
                        return (
                        <div key={"slide_" + index} className={`opacity-${index == currImage ? '100' : '50'} flex items-center`}>
                            <button onClick={() => setCurrImage(index)}>
                                <Image
                                    width={22}
                                    height={22}
                                    src={"/icons/circle.png"}
                                    alt={"Circle"}
                                    className="rotate-90"
                                />
                            </button>
                        </div>
                        )
                    })}
                    
                    <button onClick={() => setCurrImage(currImage < images.length - 1 ? currImage + 1 : 0)}>
                        <Image
                            width={40}
                            height={40}
                            src={"/icons/arrow_up.png"}
                            alt={"Right Arrow"}
                            className="rotate-90"
                        />
                    </button>
                </div>
            
            }
        </div>
    )
}