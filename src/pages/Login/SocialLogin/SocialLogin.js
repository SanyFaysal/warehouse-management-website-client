import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    return (
        <div>
            <input onClick={() => signInWithGoogle()} className='w-100 rounded shadow border-0  bg-warning bg-opacity-10' type="submit" value="Google" />
        </div>
    );
};

export default SocialLogin;