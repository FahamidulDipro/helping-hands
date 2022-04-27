import React from 'react';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    return (
        <div className='border border-3 mt-5 w-75 p-5  d-flex justify-content-center container'>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;