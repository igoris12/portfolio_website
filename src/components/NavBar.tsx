import React, {useState, useEffect} from 'react'
import logo from "../img/logo.png";


const NavBar = () => {
    const [mobileScreen , setMobileScreen] = useState<boolean>(false);
    useEffect(() => {
        window.innerWidth <= 770 ? setMobileScreen(true) : setMobileScreen(false);
        return     window.addEventListener('resize', () => {
        window.innerWidth <= 770 ? setMobileScreen(true) : setMobileScreen(false);
        
    })
    })
    


    console.log(mobileScreen);
    return (
        <div className='navBar'>
            <a className='logo'><img src={logo} alt="logo" /></a>
            <nav className='list'>
                {/* image  */}
                <ul>
                    <li className='listItem'>About</li>
                    <li className='listItem'>Projects</li>
                    <li className='listItem'>Services</li>
                    <li className='listItem'>Contact</li>
                </ul>
                {/* icons  */}
            </nav>
            <div className='hamburger'><div className='hmItem1'></div>< div className='hmItem2'></div><div className='hmItem3'></div></div>
        </div>
    )
}

export default NavBar
