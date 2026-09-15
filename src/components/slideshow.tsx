import Image from "next/image"
import { useState } from "react"


export interface ImageInfo{
    url: string;
    alt: string;
}

export function Slideshow({images}: {images: ImageInfo[]}) {
    const [currImage, setCurrImage] = useState(0);
    return (
        <div className="flex flex-col items-center w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={images[currImage].url}
                alt={images[currImage].alt}
                className="h-auto w-auto max-w-[90vw] max-h-[40vh] md:max-w-[50vw] md:max-h-[50vh] rounded-2xl border border-line"
                />
            {images.length > 1 && (
            <div className="flex items-center gap-2 justify-center py-5">
                <button
                onClick={() =>
                    setCurrImage(currImage > 0 ? currImage - 1 : images.length - 1)
                }
                >
                <Image
                    width={40}
                    height={40}
                    src="/icons/arrow_up.png"
                    alt="Left Arrow"
                    className="w-6 h-6 md:w-10 md:h-10 rotate-270"
                />
                </button>

                {Array.from({ length: images.length }).map((_, index) => (
                <div
                    key={"slide_" + index}
                    className={`flex items-center ${index == currImage ? "opacity-100" : "opacity-50"}`}
                >
                    <button onClick={() => setCurrImage(index)}>
                    <Image
                        width={22}
                        height={22}
                        src="/icons/circle.png"
                        alt="Circle"
                        className="w-3 h-3 md:w-[22px] md:h-[22px] rotate-90"
                    />
                    </button>
                </div>
                ))}

                <button
                onClick={() =>
                    setCurrImage(currImage < images.length - 1 ? currImage + 1 : 0)
                }
                >
                <Image
                    width={40}
                    height={40}
                    src="/icons/arrow_up.png"
                    alt="Right Arrow"
                    className="w-6 h-6 md:w-10 md:h-10 rotate-90"
                />
                </button>
            </div>
            )}
        </div>
    )
}