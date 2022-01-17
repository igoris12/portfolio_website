import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai' 


interface project  {
    id: number
    img: string
    title: string
    tools: string[]
    desc: string
    codeSource: string
    projectLink: string
    layoutReverse: boolean 

}

interface info {
    data : project
}



const ProjectCard = ({data}:info) => {

    return (
        <article className={data.layoutReverse ? 'projectCard reverse' : 'projectCard'}>
           <a href={data.projectLink} target='_blank'>
               <img src={require(`../img${data.img}`).default} alt="project screen shot" />
               <span className='backGround'></span>
           </a>
           
           <div className='projectInfo'>
               <h2>{data.title}</h2> 
               <ul className="tools">
                   {data.tools.map((tool , i) => <li key={i} className='tool'>{tool}</li>)}
               </ul>
               <p>{data.desc}</p>
                <div className="link">
                    <a href={data.codeSource} target='_blank'>{null}<AiOutlineGithub/> View code</a>
                    <a href={data.projectLink} target='_blank'>{null} View project</a>
                </div>
            </div>
        
        </article>
    )
}

export default ProjectCard