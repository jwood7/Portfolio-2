'use client'
import Image from "next/image";
import { Description } from "@/components/description";
import { Slideshow } from "@/components/slideshow";
import { useState } from "react";

const testData = [
  {
    "id": 1,
    "title": "Title1",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "source": "https://github.com/jwood7",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": [{"url": "/images/Visualization1.png", "alt":"Visualization of counter strike 2 states"}]
  },
  {
    "id": 2,
    "title": "Title2",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": []
  },
  {
    "id": 3,
    "title": "Title3",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": []
  },
]

export default function Home() {
  const [project, setProject] = useState(testData[0]);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-row items-center justify-center gap-16 bg-white dark:bg-black">
        <Slideshow images={project.images} />
        <div className='h-screen bg-green-600 flex align-items-center justify-center flex-col w-[450px] px-16'>
          <Description {...project}/>
        </div>
      </main>
    </div>
  );
}

// LAYOUT: 
// Header
// Buttons
// Socials
// Slideshow arrows

// VISUALS:
// Background gradient
// Icons next to link and source
// Correct background
// Socials icons

// FUNCTIONALITY: 
// need to pull projects from backend.
// need to keep index of current project
// need to change index on next/current project button click
// need to set up slideshow
