import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, description, quantity, _id, img, supplier, price } = product;
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div className='col-xl-3 col-lg-3 text-center border rounded '>
            <div className='px-4 pt-4 '>
                <div className='d-flex justify-content-center' >
                    <img src={img} className='' alt="" />
                </div>
                <div>
                    <h6>{name}</h6>
                    <p title={description}>{description.slice(0, 40)}..</p>
                    <div className='d-flex'>
                        <h5>stock:{quantity} </h5>
                        <p className='fw-bold mx-2'>Supplier :{supplier} </p>
                    </div>
                    <h6 className='my-0'>Price:{price}BDT </h6>
                </div>
            </div >
            <button className='btn btn-secondary w-100 d-block' onClick={() => handleUpdate(_id)}>Update</button>
        </div>
    );
};

export default Product;