import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hook/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts('demoProducts')

    return (
        <div className=''>
            <h1 className='text-center mt-4'>Products :  { }</h1>
            <div className='w-100 row gap-3 d-flex justify-content-center'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
            <Link className='btn btn-primary mx-auto d-block w-25 my-5' to='/allProducts'>Manage All Products</Link>
        </div>
    );
};

export default Products;