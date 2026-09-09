export function Header(){
    return (
        <nav>
            <div className="flex items-center justify-start xs:justify-start max-w-2xl flex-wrap gap-[2vw] flex-col md:flex-row">
                <a href="/software/gallery" className="text-4xl md:text-6xl">Jacob Wood</a>
                <ul className="flex items-center justify-between gap-[2vw]">
                    <li><a className="opacity-50 hover:opacity-100" href="/software/gallery">About</a></li>
                    {/* <li><a href="/">Software and Data</a></li> */}
                    <li><a className="opacity-50 hover:opacity-100" target="_blank" href="https://yakobay.itch.io">Game Dev</a></li>
                    {/* <li><a className="opacity-50 hover:opacity-100" href="/art">Art</a></li> */}
                </ul>
            </div>
        </nav>
    )
};