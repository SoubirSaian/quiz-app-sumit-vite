import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import Account from '../Account/Account';

import logo from '../../assets/logo-bg.png';


const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to="/" className= 'brand'>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                     </Link>
                </li>
            </ul>

            <Account></Account>
            
        </nav>
    );
};

export default Nav;