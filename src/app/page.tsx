'use client'
import Image from "next/image";
import { Description } from "@/components/description";
import { Slideshow } from "@/components/slideshow";
import { useState } from "react";
import { ChangeProject } from "@/components/changeProject";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


const testData = [
  {
    "id": 0,
    "title": "Title1",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "source": "https://github.com/jwood7",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": [{"url": "/images/Visualization1.png", "alt":"Visualization of counter strike 2 states"}]
  },
  {
    "id": 1,
    "title": "Title2",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": [{"url": "/images/Visualization1.png", "alt":"Visualization of counter strike 2 states"}, {"url": "/images/Visualization1.png", "alt":"Visualization of counter strike 2 states"}]
  },
  {
    "id": 2,
    "title": "Title3",
    "dates": ["1/11","1/22"],
    "link": "https://jacobdouglaswood.com",
    "tools": ["python", "javascript"],
    "description": "Description ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "images": [{"url": "/images/Visualization1.png", "alt":"Visualization of counter strike 2 states"}, {"url": "/images/Visualization1.png", "alt":"Visualization of counter strike 2 states"}, {"url": "/images/Visualization1.png", "alt":"Visualization of counter strike 2 states"}]
  },
]

export default function Home() {
  const [project, setProject] = useState(testData[0]);
  function setProjectById(id: number){
    // change this based on how retrieved from backend. For now, use index as ID
    if (id >= testData.length) return
    setProject(testData[id]);

  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans z-10">
      <main className="flex flex-1 w-full flex-row items-center justify-center gap-[4vw]">
        <div className="flex w-[50vw] flex-col justify-between h-dvh py-8">
          <Header/>
          <Slideshow images={project.images} />
          <Footer/>
        </div>
        <div className='h-screen bg-green-950 flex align-items-center justify-between flex-col w-[450px] px-16 py-12'>
          <ChangeProject isNext={false} currProject={project} numProjects={testData.length} setProjectById={setProjectById}/>
          <Description {...project}/>
          <ChangeProject isNext currProject={project} numProjects={testData.length} setProjectById={setProjectById}/>
        </div>
      </main>
    </div>
  );
}

// VISUALS:
// Icons next to link and source
// Fix colors/theme 
// Socials icons
// Arrow icons
// Animations on slide and project change

// FUNCTIONALITY: 
// need to pull projects from backend.
// need to keep index of current project
// need to change index on next/current project button click
// need to set up slideshow
// Show all projects
