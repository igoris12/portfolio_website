import React from 'react'
import avatarImg from '../img/avatar.png'
const About = () => {
    return (
        <section className='about'>
                <div className="avatar"><img src={avatarImg} alt="avater" /></div>
                <article>
                    <header>Hello <span>👋</span></header>
                    <p>I am Igoris, a web developer based in Lithuania. I develop websites using React.js and CSS, I mostly love working on the front-end using SASS and React.</p>
                    <p>Alsou I work with TypeScript and have knowledge of HPH, Laravel, MySQL ,Git.</p>
                <a href="#">Link ot my Linkedink</a>
                </article>
        </section>
    )
}

export default About
