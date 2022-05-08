import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ProductType from '../ProductType/ProductType';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductType></ProductType>
            <Products></Products>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;