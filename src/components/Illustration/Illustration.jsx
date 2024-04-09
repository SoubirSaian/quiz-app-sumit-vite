import React from 'react';
import './Illustration.css';

import signUpImg from '../../assets/signup.svg';

const Illustration = () => {
    return (
        <div className='illustration'>
            <img src={signUpImg} alt="Signup" />
        </div>
    );
};

export default Illustration;