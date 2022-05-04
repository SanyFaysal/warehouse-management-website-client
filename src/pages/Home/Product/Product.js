import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, description, quantity, _id, img, supplier, sold, price } = product;
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div className='col-xl-3 col-lg-3 text-center border py-4 rounded'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{description}</p>
            <h5>In stock:{quantity} pics</h5>
            <h5>Supplier :{supplier} </h5>
            <h5>Sold info:{!sold ? 'Available' : 'Not available'} </h5>
            <h4>Price:{price}/pics </h4>
            <button className='btn btn-secondary' onClick={() => handleUpdate(_id)}>Update</button>
        </div >
    );
};

export default Product;