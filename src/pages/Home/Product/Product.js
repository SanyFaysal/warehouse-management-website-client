import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, description, quantity, _id, img, supplier, price } = product;
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div className='col-xl-3 col-lg-3 text- border rounded ' >
            <div className='p-2 text-center'>
                <div className='d-flex justify-content-center' >
                    <img src={img} style={{ width: '250px' }} className='' alt="" />
                </div>
                <div>
                    <h6>{name}</h6>
                    <p title={description} >{description.slice(0, 40)}..</p>
                    <h6 >Supplier : <span className='fw-bold '>{supplier} </span> </h6>
                    <h6>In stock : <span className='text-danger fw-bold'>{quantity} pics</span></h6>
                    <h6 className='my-0'>Price : <span className='fw-bold'>{price} BDT</span> </h6>
                </div>
            </div >
            <div className='d-flex justify-content-center'>
                <button className='btn bg-danger   text-white my-2 mx-auto ' onClick={() => handleUpdate(_id)}>Update</button>
            </div>
        </div>
    );
};
export default Product;