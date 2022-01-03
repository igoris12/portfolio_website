import React from 'react'
import logo from "../img/logo.png";


const NavBar = () => {
    return (
        <div className='navBar'>
            <a className='logo'><img src={logo} alt="logo" /></a>
            <nav className='list active'>
                {/* image  */}
                <ul>
                    <li className='listItem'>About</li>
                    <li className='listItem'>Projects</li>
                    <li className='listItem'>Services</li>
                    <li className='listItem'>Contact</li>
                </ul>
                {/* icons  */}
            </nav>
            <div className='hamburger '><div className='hmItem1'></div>< div className='hmItem2'></div><div className='hmItem3'></div></div>
        </div>
    )
}

export default NavBar
