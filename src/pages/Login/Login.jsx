import React from 'react';
import './Login.css';
import Illustration from '../../components/Illustration/Illustration';
import Loginform from '../../components/Loginform/Loginform';

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>

            <div className='column'>
                <Illustration></Illustration>
                <Loginform></Loginform>
            </div>
        </>
    );
};

export default Login;