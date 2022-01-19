import React from 'react'
import Service from './Service'
import services from '../data/services.json';

const Services = () => {
    return (
        <section className='servicesContainer'>
             <header className='header'>
                <h1>Services</h1>
                <p>Excited to work with you</p>
            </header>
        <ul className='servicesList'>
            {services.map((service)=>  <Service key={service.id} data={service}/>)}
    
        </ul>

        </section>
    )
}

export default Services
