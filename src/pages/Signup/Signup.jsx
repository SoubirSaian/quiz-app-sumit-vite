import React, { useState } from 'react';
import './Signup.css';
import Illustration from '../../components/Illustration/Illustration';
import Form from '../../components/Form/Form';
import Textinput from '../../components/Textinput/Textinput';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';
import {useAuth} from '../../AuthContext';
import { Link,useHistory } from 'react-router-dom';

const Signup = () => {
    //form handling state
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [agree,setAgree] = useState("");

    //useAuth
    const {signup} = useAuth();
    //useRouter() is the alternate of useHistory()
    const history = useHistory();

    //loading state
    const [loading,setLoading] = useState(false);
    //error state
    const [error,setError] = useState("");

    //below function is a async function cause firebase signup is a 
    //asynchronus system
    async function handleSignup(event){
        //make sure form will not be reloaded
        event.preventDefault();

        //check both password field value is same
        if(password !== confirmPassword){
            return setError("password doesn't match!");
        }

        try {
            setError("");
            setLoading(true);

            await signup(email,password.name);
            //after successfull signup redirect to homepage
            history.push("/");

        } 
        catch (err) {
            console.log(err);
            setLoading(false);
            setError("user sign up failed");
        } 
        finally {
            setLoading(false);
            setError("");
        }
    }

    return (
        <>
            {loading ?  <h2>Signing up user</h2> :<h1>Create an account</h1>}

            <div className="column">
                 <Illustration></Illustration>
                 
                 <Form style={{height: '500px'}} onSubMit={handleSignup}>
                    <Textinput 
                        type='text' 
                        placeholder='enter name' 
                        icon='person' 
                        value={name} 
                        onChange={(e)=>{setName(e.target.value)}} 
                        required 
                        >

                    </Textinput>

                    <Textinput 
                        type='email' 
                        placeholder='enter email' 
                        icon='alternate_email'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                        >

                    </Textinput>

                    <Textinput 
                        type='password' 
                        placeholder='enter password' 
                        icon='lock'
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                        >

                    </Textinput>

                    <Textinput 
                        type='password' 
                        placeholder='confirm password' 
                        icon='lock_clock'
                        value={confirmPassword}
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        required
                        >

                    </Textinput>

                    <Checkbox 
                        text='I agree to the terms &amp; conditions'
                        value={agree}
                        onChange={(e)=> setAgree(e.target.value)}
                        required
                        >

                    </Checkbox>

                    {/* //if loading is true then button will be disabled */}
                    <Button type="submit" disabled={loading}>
                        <span>Sign</span>
                    </Button>

                    {/* if error is true then display error */}
                    {error && <p> {error} </p>}

                    <div className='info'>
                        Already have an account ? <Link href="/login">Login</Link> instead
                    </div>
                 </Form>
            </div>
            
        </>
    );
};

export default Signup;