import React from 'react';
import {useAuth} from '../../AuthContext';
import {Route, Redirect} from 'react-router-dom';

const PublicRoute = ({ component: Component , ...rest }) => {
    const {currentUser} = useAuth();

    return (
         currentUser ? (

            <Redirect to="/" ></Redirect>

         ) : (

            
            <Route {...rest} >

                 {(props) => { <Component {...props} ></Component> }} 

            </Route>
            
         )
    );
};

export default PublicRoute;