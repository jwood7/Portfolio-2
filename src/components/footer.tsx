import Image from "next/image";
export function Footer(){
    return (
    <footer className="flex justify-center w-full gap-16">
        <div className="flex justify-center w-[50vw] gap-1">
            <a className="flex flex-col justify-end items-end gap-1" target="_blank" href="https://github.com/jwood7">
                <Image
                    src={"/icons/github.svg"}
                    alt="Github Icon"
                    height={29}
                    width={29}
                />
                <div> Github </div>
            </a>
            
            <a className="flex flex-col justify-end items-center gap-1" target="_blank" href="https://yakobay.itch.io/">
                <Image
                    src={"/icons/itch.svg"}
                    alt="Itch.io Icon"
                    height={29}
                    width={29}
                />
                <div>| Itch.io |</div>
            </a>
            
            <a className="flex flex-col justify-end items-start gap-1"  target="_blank" href="https://www.linkedin.com/in/jacobwood176/">
                <Image
                    src={"/icons/linkedin.svg"}
                    alt="Linkedin Icon"
                    height={30}
                    width={30}
                />
                <div> Linkedin </div>
            </a>

        </div>
    </footer>
    );
}