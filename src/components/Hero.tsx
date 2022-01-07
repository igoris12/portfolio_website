import React from 'react'
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai' 

import {AiOutlineArrowDown} from 'react-icons/ai' 

const Hero = () => {
    return (
        <section className='heroContainer'>
        <section>
            <h1>Igoris Ivanovas</h1>
            <h3> {'{FRONT-END WEB DEVELOPER}'}</h3>
            <p>HTML . CSS . JavaScript . React .  TypeScript</p>
            <div>
                <button className='but butOutline'>Projects</button> 
                <button className='but'>Hire me</button>
            </div>
        </section>
        <a href="#" className='scrollDonw'><AiOutlineArrowDown/></a>
        <div className='socialsLink'><a href="#"><AiOutlineGithub/></a>  <a href="#"><AiFillLinkedin/></a></div>
        </section>
    )
}

export default Hero
