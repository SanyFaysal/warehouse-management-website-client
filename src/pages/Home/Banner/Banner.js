import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className=''>
            <Carousel>
                <Carousel.Item as={Link} to="/home">
                    <img
                        style={{ width: '100%', filter: " blur(2px)" }}
                        src='https://i.ibb.co/m93GghG/5258868.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption className=' d-flex justify-content-center align-items-center ' >
                        <h3 id='headline'>Featured Products For<br /> World Continents</h3>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;