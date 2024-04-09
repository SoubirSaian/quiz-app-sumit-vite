import React from 'react';
import './Signup.css';
import Illustration from '../../components/Illustration/Illustration';
import Form from '../../components/Form/Form';
import Textinput from '../../components/Textinput/Textinput';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';

const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>

            <div className="column">
                 <Illustration></Illustration>
                 
                 <Form>
                    <Textinput type='text' placeholder='enter name' icon='person'></Textinput>

                    <Textinput type='email' placeholder='enter email' icon='alternate_email'></Textinput>

                    <Textinput type='password' placeholder='enter password' icon='lock'></Textinput>

                    <Textinput type='password' placeholder='confirm password' icon='lock_clock'></Textinput>

                    <Checkbox text='I agree to the terms &amp; conditions'></Checkbox>

                    <Button>
                        Submit now
                    </Button>

                    <div className='info'>
                        Already have an account ? <a href="/login.html">login</a> instead
                    </div>
                 </Form>
            </div>
            
        </>
    );
};

export default Signup;