import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hook/useProducts';
import Loading from '../../../shared/Loading/Loading';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts()
    const demoProduct = [...products.slice(0, 6)]
    if (products.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className='w-100 row gap-2 d-flex justify-content-center'>
                {
                    demoProduct.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
            <div className='d-flex justify-content-center  my-5'>
                <Link className='btn d-inline border-danger border-1 border text-danger fw-bold me-3' to='/stockProducts'>See All</Link>
                <Link className='btn border-success border-1 text-success  fw-bold d-inline ' to='/manageProducts'>Manage All Products</Link>
            </div>
        </div>
    );
};

export default Products;