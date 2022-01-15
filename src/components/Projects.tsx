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
            {/* <li><ProjectCard data = {projects[0]}/></li> */}
            {/* <li><ProjectCard a = {'sss'}/></li>
            <li><ProjectCard a = {'sss'}/></li> */}

            </ul>
        </section>
    )
}

export default Projects
