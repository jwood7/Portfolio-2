import Image from "next/image"
import { useState } from "react"


export interface ImageInfo{
    url: string;
    alt: string;
}

export function Slideshow({images}: {images: ImageInfo[]}) {
    const [currImage, setCurrImage] = useState(images[0]);
    return (
        <div className="w-[50vw]">
            <Image
                width={0}
                height={0}
                src={currImage.url}
                alt={currImage.alt}
                sizes="50vw"
                className="w-full h-auto"
            />
        </div>
    )
}