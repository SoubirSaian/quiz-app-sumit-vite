import React from 'react';
import './Account';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className='account'>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            {/* <span>{currentUser.displayName}</span> */}
             <Link to="/signup">Sign Up</Link>
             <Link to="/login">Login</Link>
            
        </div>
         
        
    );
};

export default Account;