import React from 'react';
import './Layout.css';
import Nav from '../Nav/Nav';

const Layout = ({children}) => {
    return (
        <>
            <Nav></Nav>
            <main className='main'>
                <div className='container'>
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;