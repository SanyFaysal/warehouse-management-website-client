import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        createUserWithEmailAndPassword(email, password)
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
                <h1 className='text-center'>Please Register </h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input className="w-100 p-2 border-0 shadow rounded" {...register('email')} placeholder="Email" required /><br />
                    <input className="w-100 my-3 p-2 border-0 shadow rounded" {...register('password')} placeholder='enter password' required /><br />
                    <input className='w-100 btn btn-primary border-0' type="submit" value='Register' />
                </form>
                <Link to="/login" className='text-primary text-decoration-none'>Already have an account?</Link>
                {error ? <span className='text-danger d-block text-center'>{error.message}</span> : ''}
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Register;