import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hook/useProducts';
import Loading from '../../shared/Loading/Loading';
import Product from '../Home/Product/Product';

const StockProducts = () => {
    const [products] = useProducts()
    if (products.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h4 className='text-center my-4'>Total Stock Products :  {products.length}</h4>
            <div className='w-100 row gap-3 d-flex justify-content-center'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
            <Link className='btn btn-success text-white mx-auto d-block w-25 my-5' to='/manageProducts'>Manage All Products</Link>
        </div>
    );
};

export default StockProducts;