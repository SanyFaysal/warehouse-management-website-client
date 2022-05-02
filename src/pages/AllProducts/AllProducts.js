import React from 'react';
import useProducts from '../../hook/useProducts';
import Product from '../Home/Product/Product';

const AllProducts = () => {
    const [products] = useProducts([])
    return (
        <div>
            <div className='row gap-3 d-flex justify-content-center'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;