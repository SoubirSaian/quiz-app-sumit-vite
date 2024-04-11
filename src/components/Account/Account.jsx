import React from 'react';
import './Account';
import {useAuth} from '../../AuthContext';
import { Link } from 'react-router-dom';


const Account = () => {
    const {currentUser,logout} = useAuth();

    return (
        <div className='account'>
            { 
             currentUser ? ( 
                <>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <span>{currentUser.displayName}</span>
                    <span
                        className="material-icons-outlined"
                        title="Logout"
                        onClick={logout}
                        >
                        {" "}
                        logout{" "}
                    </span>
                </>
             ) : (
                <>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </>
             )
            }
        </div>
         
        
    );
};

export default Account;