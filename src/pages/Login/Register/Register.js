import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='row  my-5'>
            <div className=" shadow p-5 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto  bg-secondary bg-opacity-10">
                <h1 className='text-center'>Please Register </h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input className="w-100 p-2 border-0 shadow" {...register('email')} placeholder="your name" required /><br />
                    <input className="w-100 my-3 p-2" {...register('password')} placeholder='enter password' required /><br />
                    <input className='w-100 btn btn-primary' type="submit" />
                </form>
                <Link to="/login" className='text-primary text-decoration-none'>Already have an account?</Link>
            </div>
        </div>
    );
};

export default Register;