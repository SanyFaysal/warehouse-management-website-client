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
        <>
            <div className="container mt-5 d-flex " style={{ height: '40vh', marginBottom: '18%' }}>
                <div className=' w-100 d-flex justify-content-center pt-5'>
                    <img className='mx-auto' src={product?.img} alt='' />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <h3>In stock:{quantity} pics</h3>
                        <h3>Supplier :{supplier} </h3>
                        <h3>Price:{price}/pics </h3>
                        <button onClick={handleDelivered} className='btn btn-warning  shadow me-2 mb-2'>Delivered</button>
                        <form onSubmit={handleRestock} className="bg-warning  p-2 rounded my-3 w-50">
                            <input type="number" name='quantity' required style={{ width: '75px' }} />
                            <input type="submit" value="Restock" className='bg-success text-white border-0 shadow py-1' />
                        </form>
                    </div>

                </div>
            </div>
            <Link className='btn btn-primary mx-auto d-block w-25 my-5' to='/manageProducts'>Manage All Products</Link>
        </>
    )
};


export default UpdateProduct;