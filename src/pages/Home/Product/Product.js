import React from 'react';

const Product = ({ product }) => {
    const { name, description, quantity } = product;
    return (
        <div className='col-xl-3 col-lg-3 text-center border py-4 rounded'>
            <h5 className=''>{name}</h5>
            <p>{description}</p>
            <h6>{quantity}</h6>
            <button className='btn btn-secondary'>Update</button>
        </div>
    );
};

export default Product;