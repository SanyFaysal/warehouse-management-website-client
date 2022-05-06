import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
        data.reset()
    };
    if (user) {
        navigate('/home')
    }
    if (loading) {
        <Loading></Loading>
    }
    return (
        <div className='row  my-5'>
            <div className=" shadow p-5 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto  bg-secondary bg-opacity-10">
                <h1 className='text-center'>Please login </h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input className="w-100 p-2 border-0 shadow" {...register('email')} placeholder="your name" required /><br />
                    <input className="w-100 p-2 my-3 border-0 shadow"  {...register('password')} placeholder='enter password' required /><br />
                    <input className='w-100 btn btn-primary' type="submit" />
                </form>
                <Link to="/register" className='text-primary text-decoration-none'>Create an account</Link>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};
export default Login;