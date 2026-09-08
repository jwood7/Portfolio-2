export function Header(){
    return (
        <nav>
            <div className="flex items-center justify-start xs:justify-start max-w-2xl flex-wrap gap-[2vw]">
                <div className="text-6xl">Jacob Wood</div>
                <ul className="flex items-center justify-between gap-[2vw]">
                    <li><a className="opacity-50 hover:opacity-100" href="/software/gallery">About</a></li>
                    {/* <li><a href="/">Software and Data</a></li> */}
                    {/* <li><a className="opacity-50 hover:opacity-100" href="/game-development">Game Dev</a></li>
                    <li><a className="opacity-50 hover:opacity-100" href="/art">Art</a></li> */}
                </ul>
            </div>
        </nav>
    )
};