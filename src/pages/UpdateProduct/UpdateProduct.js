import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    let { name, description, supplier, price } = product;
    const { quantity, ...rest } = product;
    console.log(product)
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setProduct(data[0]);
            })
    }, [id])

    const handleRestock = (event) => {
        event.preventDefault();
        const quant = parseInt(event.target.quantity.value)
        const electronicInfo = { quantity: parseInt(product.quantity) + quant, ...rest }
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(electronicInfo)
        })
            .then(res => res.json())
            .then(data => {
                setProduct(electronicInfo)
                // setReload(!reload)
                event.target.reset();
            })
    }
    const handleDelivered = (event) => {
        event.preventDefault();
        const electronicInfo = { quantity: parseInt(product.quantity) - 1, ...rest }
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(electronicInfo)
        })
            .then(res => res.json())
            .then(data => {
                setProduct(electronicInfo)
                event.target.reset();
            })
    }

    return (
        <div className='container  m-5 mx-auto '>
            <h2 className='text-center' >Update Product</h2>
            <div className='row d-flex justify-content-around bg-secondary bg-opacity-10 py-4 rounded'>
                <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-sm-12 d-flex justify-content-center align-items-center'>
                    <img src={product?.img} style={{ width: '300px' }} alt='' />
                </div>
                <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 col-sm-12 d-flex mb-5 justify-content-center align-items-center'>
                    <div>
                        <h4>{name}</h4>
                        <p className='fs-5'>{description}</p>
                        <h5>Supplier :{supplier} </h5>
                        <h5 className='fw-bold'>Price : {price}BDT </h5>
                        <h5 className='fw-bold'>In stock : <span className='text-muted bg-white rounded px-1'> {quantity} pics</span> </h5>
                        <div className='d-flex align-items-center '>
                            <div className='me-4'>
                                <button onClick={handleDelivered} className='btn btn-danger shadow'>Delivered</button>
                            </div>
                            <div className=" px-2 py-1 shadow-lg rounded  bg-success bg-opacity-75 ">
                                <form onSubmit={handleRestock} className=''>
                                    <input type="number" name='quantity' required className='p-1 border-0 shadow-lg rounded px-2' style={{ width: "100px" }} />
                                    <input type="submit" value="Restock" className='bg-success bg-opacity-75 shadow-lg  border-0 py-1 rounded text-white' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='btn btn-primary mx-auto w-50' to='/manageProducts'>Manage All Products</Link>

            </div>
        </div>
    )
};


export default UpdateProduct;