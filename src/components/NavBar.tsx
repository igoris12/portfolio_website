import React, {useState, useEffect} from 'react'
import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai' 

const NavBar = () => {
    const [mobileScreen , setMobileScreen] = useState<boolean>(false);
    const [mobileActive , setMobileActive] = useState<boolean>(false);
    const [scrollDown , setScrollDown] = useState<boolean>(false);
    useEffect(() => {
        window.innerWidth <= 770 ? setMobileScreen(true) : setMobileScreen(false);
        return     window.addEventListener('resize', () => {
        window.innerWidth <= 770 ? setMobileScreen(true) : setMobileScreen(false);
    })
    }, [])
    
    const toggleMobileActive = () => {
        setMobileActive(!mobileActive)
    }
    
    let lastScroll =  window.scrollY;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY  
        lastScroll < scrollTop ? setScrollDown(true): setScrollDown(false);
        lastScroll = scrollTop;
    })   
return (
    <div className='navBar' style={ scrollDown ? {top: '-80px'} :  {top: '0'}}>
            <a href='https://igoris12.github.io/portfolio_website/' className='logo'><img src={logo} alt="logo" /></a>
            <nav id='navList' className={mobileScreen && mobileActive ? 'list active' : 'list'}>
                <ul>
                {mobileScreen &&
                 <a href='https://igoris12.github.io/portfolio_website/' className='avatar listItem' >
                     <div className='avatarContainer'>
                        <img src={avatar} alt="Avatar" />
                    </div>
                <p>Igoris Ivanovas</p></a>}
                    <a className='listItem'  href="#about">About</a>
                    <a className='listItem' href="#projects">Projects</a>
                    <a className='listItem' href="#services">Services</a>
                    <a className='listItem' href="#contact">Contact</a>
                </ul>
                {mobileScreen && <div className='socialsLinks' >
                    <a href="https://github.com/igoris12" target="_blank" >< AiOutlineGithub /></a>
                    <a href="https://www.linkedin.com/in/igoris-ivanovas-839645194/" target="_blank" ><AiFillLinkedin/></a>
                </div>}
            </nav>
            <div className={ mobileActive ? 'hamburger active' : 'hamburger'} onClick={() => toggleMobileActive()}>
                <div className='hmItem1' >
                    </div>< div className='hmItem2'></div><div className='hmItem3'></div>
                </div>
        </div>
    )
}

export default NavBar
