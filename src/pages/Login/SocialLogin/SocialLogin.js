import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <input onClick={() => signInWithGoogle()} className='w-100 rounded shadow border-0  bg-warning bg-opacity-10' type="submit" value="Google" />
        </div>
    );
};

export default SocialLogin;