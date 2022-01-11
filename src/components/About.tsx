import React from 'react'
import avatarImg from '../img/avatar.png'
const About = () => {
    return (
        <section className='about'>
                <div className="avatar"><img src={avatarImg} alt="avater" /></div>
                <article>
                    <header>Hello <span>👋</span></header>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                <a href="#">Link ot my Linkedink</a>
                </article>
        </section>
    )
}

export default About
