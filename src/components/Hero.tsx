import React from 'react'

const Hero = () => {
    return (
        <section className='HeroContainer'>
        <section>
            <h1>Igoris Ivanovas</h1>
            <h3> {'{FRONT-END WEB DEVELOPER}'}</h3>
            <p>HTML . CSS . JavaScript . React .  TypeScript</p>
            <div><button>Projects</button> <button>Hire me</button></div>
        </section>
        <a href="#">Scroll down arrow</a>
        <div className='socialsLink'>link with icon</div>
        </section>
    )
}

export default Hero
