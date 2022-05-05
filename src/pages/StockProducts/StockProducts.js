import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hook/useProducts';
import Product from '../Home/Product/Product';

const StockProducts = () => {
    const [products] = useProducts()
    return (
        <div className=''>
            <h2 className='text-center mt-4'>Total Stock Products :  {products.length}</h2>
            <div className='w-100 row gap-3 d-flex justify-content-center'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
            <Link className='btn btn-primary mx-auto d-block w-25 my-5' to='/manageProducts'>Manage All Products</Link>
        </div>
    );
};

export default StockProducts;