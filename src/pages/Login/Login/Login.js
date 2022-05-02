import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='row  mt-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mx-auto">
                <input className="w-100 p-2" {...register('email')} placeholder="your name" required /><br />
                <input className="w-100 my-2 p-2" {...register('password')} placeholder='enter password' required /><br />
                <input className='w-100 btn btn-primary' type="submit" />
            </form>
        </div>
    );
};
export default Login;