import React from 'react';
import './Loginform.css';
import Form from '../Form/Form';
import Textinput from '../Textinput/Textinput';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Loginform = () => {
    return (
         <Form>
            <Textinput type='email' placeholder='enter email' icon='alternate_email'></Textinput>
            <Textinput type='password' placeholder='enter password' icon='lock'></Textinput>

            <Button>Log In</Button>

            <div className='info'>
                Don't have an account ? <Link href="/signup">Sign Up</Link> instead
            </div>
         </Form>
    );
};

export default Loginform;