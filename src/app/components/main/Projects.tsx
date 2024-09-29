import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
My Projects
        </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/WhatsApp Image 2024-04-02 at 6.09.56 PM.jpeg"
          title="Make Calculator with Easy Steps"
          description="Learn creating a calculator using Typescript & NPM."
        />
        <ProjectCard
          src="/WhatsApp Image 2024-04-02 at 6.08.41 PM.jpeg"
          title="Make Guess-Numbers Game with Easy Steps"
          description="Learn creating an amazing game of guessing numbers using Typescript & NPM."
        />
      </div>
      </div>
    </div>
  )
}

export default Projects
