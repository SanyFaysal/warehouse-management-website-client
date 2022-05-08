
import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { axios } from 'axios'
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
        // const { result } = await axios.post('https://murmuring-anchorage-22849.herokuapp.com/login', { email })
        // console.log(result);
        reset()
    };
    const handleResetPassword = async (data) => {
        const email = data.email;

        if (email === '') {
            toast.error("Please Give your email")
        }

        else {
            await sendPasswordResetEmail(email)
            toast.success("Successfully sent email ")
        }
    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        <Loading></Loading>
    }
    return (
        <div className='row  my-5'>

            <div className=" shadow p-5 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto  bg-secondary bg-opacity-10">
                <h1 className='text-center'>Please login </h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input className="w-100 p-2 border-0 rounded shadow" {...register('email')} placeholder="email" required /><br />
                    <input className="w-100 p-2 my-3 border-0 shadow"  {...register('password')} placeholder='enter password' required /><br />
                    <input className='w-100 btn btn-primary' type="submit" value='Login' />
                </form>
                <div className='d-flex justify-content-between'>
                    <Link to="/register" className='text-success text-decoration-none'>Create an account</Link>
                    <span onClick={handleSubmit(handleResetPassword)} className='text-danger'>Reset Password</span>
                </div>
                {error ? <span className='text-danger text-center d-block'>{error?.message}</span> : ''}
                {error2 ? <span className='text-danger text-center d-block'>{error?.message}</span> : ''}
                <SocialLogin></SocialLogin>
            </div>

        </div >
    );
};

export default Login;