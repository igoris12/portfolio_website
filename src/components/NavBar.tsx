import React, {useState, useEffect} from 'react'
import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai' 

const NavBar = () => {
    const [mobileScreen , setMobileScreen] = useState<boolean>(false);
    const [mobileActive , setMobileActive] = useState<boolean>(false);

    useEffect(() => {
        window.innerWidth <= 770 ? setMobileScreen(true) : setMobileScreen(false);
        return     window.addEventListener('resize', () => {
        window.innerWidth <= 770 ? setMobileScreen(true) : setMobileScreen(false);
        
    })
    }, [])
    

    const toggleMobileActive = () => {
        setMobileActive(!mobileActive)
    }

    
    return (
        <div className='navBar'>
            <a className='logo'><img src={logo} alt="logo" /></a>
            <nav className={`list ${mobileActive ? 'active': null}`}>
                <ul>
                {mobileScreen &&
                 <a className='avatar listItem' >
                     <div className='avatarContainer'>
                        <img src={avatar} alt="Avatar" />
                    </div>
                <p>Igoris Ivanovas</p></a>}
                    <a className='listItem'>About</a>
                    <a className='listItem'>Projects</a>
                    <a className='listItem'>Services</a>
                    <a className='listItem'>Contact</a>
                </ul>
                {mobileScreen && <div className='socialsLinks' >
                    <a href="https://github.com/igoris12" target="_blank" >< AiOutlineGithub /></a>
                    <a href="https://www.linkedin.com/in/igoris-ivanovas-839645194/" target="_blank" ><AiFillLinkedin/></a>
                </div>}
            </nav>
            <div className={`hamburger ${mobileActive ? 'active': null}`} onClick={() => toggleMobileActive()}>
                <div className='hmItem1' >
                    </div>< div className='hmItem2'></div><div className='hmItem3'></div>
                </div>
        </div>
    )
}

export default NavBar
