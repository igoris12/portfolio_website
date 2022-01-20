import React from 'react';

interface data {
    title: string 
    subtitle: string
}

const Header = ({title , subtitle } : data) => {
  return    <header className='header'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </header>;
};

export default Header;
