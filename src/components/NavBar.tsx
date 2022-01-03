import React from 'react'
import logo from "../img/logo.png";
// console.log(logo);

const NavBar = () => {
    return (
        <div className='navBar'>
            <a className='logo'><img src={logo} alt="logo" /></a>
            <nav className='list'>
                <ul>
                    <li className='listItem'>About</li>
                    <li className='listItem'>Projects</li>
                    <li className='listItem'>Services</li>
                    <li className='listItem'>Contact</li>

                </ul></nav>
            <div className='hamburger'>hamburger</div>
        </div>
    )
}

export default NavBar
