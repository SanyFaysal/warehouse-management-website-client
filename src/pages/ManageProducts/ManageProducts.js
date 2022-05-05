import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hook/useProducts';
import Manage from '../Manage/Mange';

const ManageProducts = () => {
    const [products] = useProducts()
    return (

        <div className='container mx-auto my-4'>
            <h2 className='text-center'>Manage all products</h2>
            <Table striped bordered>
                <thead>
                    <tr className='text-center'>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>supplier</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <Manage
                            key={product._id}
                            product={product}></Manage>)
                    }
                </tbody>
            </Table>

            <Link to='/addProduct' className='w-25 d-block mx-auto btn bg-success bg-opacity-75 text-white'>Add New Product</Link>
        </div>

    );
};

export default ManageProducts;