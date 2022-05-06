import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../hook/useProducts';
import Manage from '../Manage/Mange';
const MyProducts = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useProducts()
    const myProducts = products.filter(product => product?.email === user.email);
    return (
        <div>
            <div className='text-center'>
                <h5>{user?.displayName}</h5>
                <h6>Email: <span className='text-warning'>{user.email}</span></h6>
            </div>
            <div className='container mx-auto my-4'>
                <h2 className='text-center'>Manage My Products</h2>
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
                            myProducts.map(product => <Manage
                                key={product._id}
                                product={product}></Manage>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyProducts;