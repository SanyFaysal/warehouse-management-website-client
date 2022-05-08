import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyProduct from '../MyProduct/MyProduct';
const MyProducts = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        fetch(`https://murmuring-anchorage-22849.herokuapp.com/myProducts?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProducts(data)
            })
    }, [user])
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure to delete?');
        if (confirmation) {
            const url = `https://murmuring-anchorage-22849.herokuapp.com/products/${id}`;
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