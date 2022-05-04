import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className=' bg-black bg-opacity-10 p-2' >
            <small className='d-block text-center'>Copyright © {year}</small>
        </div>
    );
};

export default Footer;