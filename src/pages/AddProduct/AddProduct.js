import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        data.email = user.email;
        const url = 'http://localhost:5000/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Successfully added !!');
            })
    };;
    return (
        <div className='row  my-5'>
            <div className=" shadow p-5 pt-3 border rounded col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto  bg-secondary bg-opacity-10">
                <h2 className='text-center text-muted'>Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} className='w-100 my-1 p-2  border-0 shadow rounded' placeholder='product name' required /><br />
                    <input {...register("img")} className='w-100 my-1 p-2  border-0 shadow rounded' placeholder='img url' required /><br />
                    <input {...register("description")} className='w-100 my-1 p-2  border-0 shadow rounded' placeholder='product description' required /><br />
                    <input {...register("supplier")} className='w-100 my-1 p-2  border-0 shadow rounded' placeholder='supplier' required /><br />
                    <input {...register("quantity")} className='w-100 my-1 p-2  border-0 shadow rounded' placeholder='quantity' required /><br />
                    <input {...register("price")} className='w-100 my-1 p-2  border-0 shadow rounded' placeholder='product price' required /><br />
                    <input type="submit" value="Add product" className='w-100 bg-success bg-opacity-75 text-white mt-2 p-2 border-0 rounded' />
                </form>
            </div>
        </div>
    )
};

export default AddProduct;