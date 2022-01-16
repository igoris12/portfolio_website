import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects.json'





const Projects = () => {
    return (
        <section className='projectsContainer'>
            <header>
                <h1>Projects</h1>
                <p>These are some of my best projects</p>
            </header>
            <ul className='projectsList'>
                {projects.map((project) =>   <li key={project.id}><ProjectCard data = {project}/></li>)}
          
            </ul>
        </section>
    )
}

export default Projects
