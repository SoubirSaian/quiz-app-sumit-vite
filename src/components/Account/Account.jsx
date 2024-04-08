import React from 'react';
import './Account';

const Account = () => {
    return (
        <div className='account'>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            {/* <span>{currentUser.displayName}</span> */}
             <a href="signup.html">Sign Up</a>
            
        </div>
         
        
    );
};

export default Account;