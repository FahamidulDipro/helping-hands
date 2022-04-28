import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname||'/';
    return (
        <div className='border border-3 mt-5 w-75 p-5  d-flex justify-content-center container'>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;