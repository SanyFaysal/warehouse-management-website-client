import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-4'>
            {error ? <span className='text-center d-block text-danger my-2'>{error.message}</span> : ''}
            <button onClick={() => signInWithGoogle()} className='w-100 rounded-pill border border-1   border-success  py-1 shadow-lg'>
                <img src='https://i.ibb.co/0rLzqn3/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' className='ms' style={{ width: '30px' }} alt="" />
                <span className='text-success'> Google Login</span>
            </button>

        </div>
    );
};

export default SocialLogin;