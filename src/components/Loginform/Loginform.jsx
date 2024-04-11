import React, { useState } from 'react';
import './Loginform.css';
import Form from '../Form/Form';
import Textinput from '../Textinput/Textinput';
import Button from '../Button/Button';
import {useAuth} from '../../AuthContext';
import { Link , useRouter} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


const Loginform = ({loading,setLoading}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [error,setError] = useState("");

    const {login} = useAuth();
    const router = useRouter();

    async function handleLogin(event){
        event.preventDefault();

        try {
            setLoading(true);
            setError("");
            await login(email,password);
            router.push("/");
            // history.push("/");
            
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Login failed!");

        } finally {
            setLoading(false);
            setError("");
        }

    }
    

    return (
         <Form style={{height: '330px'}} onSubmit={handleLogin}>
            <Textinput 
                type='email' 
                placeholder='enter email' 
                icon='alternate_email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                >

            </Textinput>

            <Textinput 
                type='password' 
                placeholder='enter password' 
                icon='lock'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                >

            </Textinput>

            <Button disabled={loading} type="submit">
                <span>Log In</span>
            </Button>

            {/* //error display if happens */}
            {error && <p> {error} </p>}

            <div className='info'>
                Don't have an account ? <Link href="/signup">Sign Up</Link> instead
            </div>
         </Form>
    );
};

export default Loginform;