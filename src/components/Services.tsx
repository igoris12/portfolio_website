import React from 'react'
import Service from './Service'

const Services = () => {
    return (
        <section className='servicesContainer'>
             <header className='header'>
                <h1>Services</h1>
                <p>Excited to work with you</p>
            </header>
        <ul className='servicesList'>
        <Service/>
        <Service/>
        <Service/>
        </ul>

        </section>
    )
}

export default Services
