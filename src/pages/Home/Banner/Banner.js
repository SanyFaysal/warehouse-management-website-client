import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className='h-50'>
            <Carousel>

                <Carousel.Item >
                    <img
                        style={{ width: '100%' }}
                        src='https://i.ibb.co/h7xpbgN/The-Electronics-Warehouse-10th-Year-Anniversary-1536x419.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption className=' d-flex justify-content-center align-items-center ' >

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ width: '100%' }}
                        src='https://i.ibb.co/1b7tJQV/samsung-televisions-at-lowest-prices-electronics-warehouse.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption className=' d-flex justify-content-center align-items-center ' >
                        <h3 className='headline'>Featured Products for<br />
                            World Continents</h3>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        </div>
    );
};

export default Banner;