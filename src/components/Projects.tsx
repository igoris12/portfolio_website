import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects.json'
import SectionEnd from './SectionEnd'
import Header from './Header';





const Projects = () => {
    return (
        <>
        <section className='projectsContainer'>
            <Header title='Projects' subtitle='These are some of my best projects' />
            <ul className='projectsList'>
                {projects.map((project) =>   <li key={project.id}><ProjectCard data = {project}/></li>)}
            </ul>
        </section>
            <SectionEnd/>
        </>
    )
}

export default Projects
