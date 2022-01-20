import React from 'react'
import Service from './Service'
import services from '../data/services.json';
import SectionEnd from './SectionEnd';
import Header from './Header';

const Services = () => {
    return (
        <>
        <section className='servicesContainer'>
            <Header title='Services' subtitle='Excited to work with you' />
            <ul className='servicesList'>
                {services.map((service)=>  <Service key={service.id} data={service}/>)}
            </ul>
           
        </section>
         <SectionEnd/>
        </>
    )
}

export default Services
