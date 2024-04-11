import React, { useState } from 'react';
import './Login.css';
import Illustration from '../../components/Illustration/Illustration';
import Loginform from '../../components/Loginform/Loginform';

const Login = () => {
    const [loading,setLoading] = useState(false);
    return (
        <>
            {loading ? <h2>user logging in...</h2> :<h1>Login to your account</h1>}

            <div className='column'>
                <Illustration></Illustration>
                <Loginform loading={loading} setLoading={setLoading}></Loginform>
            </div>
        </>
    );
};

export default Login;