import React from 'react';
import {useAuth} from '../../AuthContext';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component , ...rest }) => {
    const {currentUser} = useAuth();

    return (
         currentUser ? (

            <Route {...rest} >

                 {(props) => { <Component {...props} ></Component> }} 

            </Route>

         ) : (

            <Redirect to="/login" ></Redirect>
            
         )
    );
};

export default PrivateRoute;