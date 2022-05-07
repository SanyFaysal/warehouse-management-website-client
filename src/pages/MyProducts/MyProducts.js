import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import Manage from '../Manage/Mange';
import MyProduct from '../MyProduct/MyProduct';
// import useProducts from '../../hook/useProducts';
// import Loading from '../../shared/Loading/Loading';
// import Manage from '../Manage/Mange';
const MyProducts = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myProducts?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProducts(data)
            })
    }, [user])
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure to delete?');
        if (confirmation) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remaining = myProducts.filter(product => product._id !== id);
                        setMyProducts(remaining);
                    }
                    else {
                        alert('No matched document !')
                    }
                })
        }

    }
    return (
        <div>

            <div>
                <h2 className='text-center mt-3'>Manage My Products</h2>
                <div className='text-center'>
                    <h5>{user?.displayName}</h5>
                    <h6>Email: <span className='text-warning'>{user.email}</span></h6>
                </div>
                <div className='container mx-auto my-4'>

                    {
                        myProducts.map(product => <MyProduct
                            key={product._id}
                            handleDelete={handleDelete}
                            product={product}></MyProduct>)
                    }

                </div>
            </div>
        </div>
    );
}

export default MyProducts;