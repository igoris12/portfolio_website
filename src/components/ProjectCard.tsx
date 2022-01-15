import React from 'react'

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
    console.log(data);
    
    return (
        <article className='projectCard'>
           <a href="#">image</a>
           <div className='projectInfo'>
               <h2>{data.title}</h2> 
               <div className="tools">
                   {data.tools.map((tool) => <p className='tool'>{tool}</p>)}
               </div>
               <p>{data.desc}</p>
                <div className="link">
                    <a href="#">View code</a>
                    <a href="#">View project</a>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard