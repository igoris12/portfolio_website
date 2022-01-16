import React from 'react'
// import image from '../img/reactProject.png'

interface project  {
    id: number
    img: string
    title: string
    tools: string[]
    desc: string
    codeSource: string
    ProjectLink: string
}

interface info {
    data : project
}



const ProjectCard = ({data}:info) => {

    return (
        <article className='projectCard'>
           <a href="#">
               <img src={require(`../img${data.img}`).default} alt="project screen shot" />
           </a>
           
           <div className='projectInfo'>
               <h2>{data.title}</h2> 
               <ul className="tools">
                   {data.tools.map((tool , i) => <li key={i} className='tool'>{tool}</li>)}
               </ul>
               <p>{data.desc}</p>
                <div className="link">
                    <a href={data.codeSource} target='_blank'>{null}View code</a>
                    <a href={data.ProjectLink} target='_blank'>{null} View project</a>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard