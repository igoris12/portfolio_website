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
            <div className='butContainer'>
                <a href='#projects' className='but butOutline'>Projects</a> 
                <a href='#contact' className='but'>Hire me</a>
            </div>
        </section>
        <a href="#about" className='scrollDonw'><AiOutlineArrowDown/></a>
        <div className='socialsLink'>
            <a href="https://github.com/igoris12"  target="_blank"><AiOutlineGithub/></a> 
            <a href="https://www.linkedin.com/in/igoris-ivanovas-839645194"  target="_blank"><AiFillLinkedin/></a>
        </div>
        </section>
    )
}

export default Hero
