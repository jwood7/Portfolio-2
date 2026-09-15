import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex w-full justify-center gap-10 border-t border-line pt-6 text-sm text-muted">
      <a
        className="flex items-center gap-2 transition-colors hover:text-ink"
        target="_blank"
        href="https://github.com/jwood7"
      >
        <Image src={"/icons/github.svg"} alt="Github Icon" height={20} width={20} />
        <div>Github</div>
      </a>

      <a
        className="flex items-center gap-2 transition-colors hover:text-ink"
        target="_blank"
        href="https://yakobay.itch.io/"
      >
        <Image src={"/icons/itch.svg"} alt="Itch.io Icon" height={20} width={20} />
        <div>Itch.io</div>
      </a>

      <a
        className="flex items-center gap-2 transition-colors hover:text-ink"
        target="_blank"
        href="https://www.linkedin.com/in/jacobwood176/"
      >
        <Image src={"/icons/linkedin.svg"} alt="Linkedin Icon" height={20} width={20} />
        <div>Linkedin</div>
      </a>
    </footer>
  );
}
