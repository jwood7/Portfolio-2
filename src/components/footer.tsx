import Image from "next/image";
export function Footer(){
    return (
    <footer className="flex justify-center w-full gap-16">
        <div className="flex justify-center w-[50vw] gap-1">
            <a className="flex flex-col justify-end items-end">
                <Image
                    src={"/icons/github-mark-white 2.png"}
                    alt="Github Icon"
                    height={23}
                    width={23}
                />
                <div> Github </div>
            </a>
            
            <a className="flex flex-col justify-end items-center">
                <Image
                    src={"/icons/github-mark-white 2.png"}
                    alt="Github Icon"
                    height={23}
                    width={23}
                />
                <div>| Itch.io |</div>
            </a>
            
            <a className="flex flex-col justify-end items-start">
                <Image
                    src={"/icons/github-mark-white 2.png"}
                    alt="Github Icon"
                    height={23}
                    width={23}
                />
                <div> Linkedin </div>
            </a>

        </div>
    </footer>
    );
}