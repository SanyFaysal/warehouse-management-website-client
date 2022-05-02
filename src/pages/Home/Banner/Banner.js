import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/pngtree-business-concept-of-online-shopping-e-commerce-png-image_2174632 (1).jpg'
const Banner = () => {
    return (
        <div>
            <Carousel variant="dark" fade>
                <Carousel.Item>
                    <img
                        style={{ width: '100%', height: '50vh' }}
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-bold bg-white'>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;