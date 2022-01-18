import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects.json'
import SectionEnd from './SectionEnd'





const Projects = () => {
    return (
        <>
        <section className='projectsContainer'>
            <header className='header'>
                <h1>Projects</h1>
                <p>These are some of my best projects</p>
            </header>
            <ul className='projectsList'>
                {projects.map((project) =>   <li key={project.id}><ProjectCard data = {project}/></li>)}
            </ul>
        </section>
            <SectionEnd/>
        </>
    )
}

export default Projects
