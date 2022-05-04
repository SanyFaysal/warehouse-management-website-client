import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../hook/useProducts';
import Product from '../Home/Product/Product';
import ProductsManger from '../ProductsManager/ProductsManger';

const AllProducts = () => {
    const [products] = useProducts('products')
    return (

        <div className='container mx-auto '>
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>supplier</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(product => <ProductsManger
                            key={product._id}
                            product={product}></ProductsManger>)
                    }
                </tbody>
            </Table>
        </div>

    );
};

export default AllProducts;