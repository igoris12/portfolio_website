import React from 'react'
import avatarImg from '../img/avatar.png'
const About = () => {
    return (
        <section className='about'>
            <div className="container">
            <div className="avatar"><img src={avatarImg} alt="avater" /></div>
                <article>
                    <header>Hello <span>👋</span></header>
                    
                    <p>
                        I am Igoris, a web developer <strong>based in Lithuania</strong>.
                        I develop websites using React.js and CSS, I mostly love working on the front-end using
                         <strong>SASS</strong> and <strong>React</strong>.
                     </p>
                    <p>Alsou I work with TypeScript and have knowledge of HPH, Laravel, MySQL ,Git.</p>
                    <a href="#">Link ot my Linkedink</a>
                </article>
            </div>
        </section>
    )
}

export default About
