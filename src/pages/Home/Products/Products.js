import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <h3 className='fw-bold text-center mt-5 mb-3'>New Products</h3>

            <div className='w-100 card-group row gap-2 d-flex justify-content-center'>
                {
                    demoProduct.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
            <Link className=' d-block  text-center text-dark fw-bold mt-2  fs-5' to='/stockProducts' style={{ textDecoration: 'none' }}>See All
                <FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon>
            </Link>
            <div className='d-flex justify-content-center  my-5'>
                <Link className='btn bg-success border-1 text-white  fw-bold d-inline ' to='/manageProducts'>Manage All Products</Link>
            </div>
        </div>
    );
};

export default Products;