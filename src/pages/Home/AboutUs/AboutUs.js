import { faHeadphones, faShare, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const AboutUs = () => {
    return (
        <div className='mb-5 container mx-auto'>
            <hr className=' text-secondary text-opacity-10' />
            <h3 className='fw-bold text-center'>Why Shop With Us?</h3>

            <div className='d-flex row justify-content-around'>
                <div className='text-center col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-2'>
                    <FontAwesomeIcon className='fs-3 rounded-circle text-danger border  border-danger mb-2 p-3' icon={faHeadphones}></FontAwesomeIcon>
                    <h5 className='fw-bold'>DEDICATED SERVICE</h5>
                    <p>With over 20 years experience, our specialists are ready to help.</p>
                    <button className='btn border-0 bg-secondary bg-opacity-10'>Contact With Us</button>
                </div>
                <div className='text-center  col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-2 '>
                    <FontAwesomeIcon className='fs-3 rounded-circle text-danger border  border-danger mb-2 p-3 ' icon={faShare} ></FontAwesomeIcon>
                    <h5 className='fw-bold'>12 MONTH WARRANTY</h5>
                    <p>We stand behind our goods and services and want you to be satisfied with them.</p>
                    <button className='btn border-0 bg-secondary bg-opacity-10'>RETURNS POLICY</button>
                </div>
                <div className='text-center  col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-2'>
                    <FontAwesomeIcon className='fs-3 rounded-circle text-danger border  border-danger mb-2 p-3' icon={faShippingFast}></FontAwesomeIcon>
                    <h5 className='fw-bold'>FREE SHIPPING</h5>
                    <p>We offer a free delivery service on all purchases throughout the UK.</p>
                    <button className='btn border-0 bg-secondary bg-opacity-10'>
                        TERMS & CONDITIONS</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;