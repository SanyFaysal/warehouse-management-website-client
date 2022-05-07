import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TrashIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import useProducts from '../../hook/useProducts';

const MyProduct = ({ product, handleDelete }) => {
    const { name, quantity, price, description, supplier, _id, img } = product;

    return (
        <div className='d-flex row py-3 my-3 px-2 justify-content-between border rounded-3 bg-secondary bg-opacity-10 shadow-sm'>
            <div className='my-auto mx-auto d-flex justify-content-center col-xl-3 col-lg-3 col-md-12 col-sm-12 '>
                <img src={img} style={{ width: '300px' }} alt="" />
            </div>
            <div className='my-auto row col-xl-8 col-lg-8 col-md-12 col-sm-12 d-flex justify-content-start'>
                <div className=' my-auto col-xl-10 col-lg-8 col-md-8 '>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="d-flex justify-content-center">
                        <h6 className=' text-secondary bg-warning px-3 py-2 shadow-lg rounded text-white'> Supplier : {supplier}</h6>
                        <h6 className='mx-3 text-secondary bg-info px-3 py-2 shadow-lg rounded text-white'>In stock: {quantity}</h6>
                        <h6 className=' text-secondary bg-success px-3 py-2 shadow-lg rounded text-white'>Price : {price}</h6>

                    </div>
                </div>

                <div className='my-auto  col-xl-2 col-lg-2 col-md-2 d-flex justify-content-center'>
                    <TrashIcon onClick={() => handleDelete(_id)} className=' btn  mx-auto text-danger' style={{ width: '70px' }}></TrashIcon>
                </div>
            </div>

        </div>
    );
};

export default MyProduct;