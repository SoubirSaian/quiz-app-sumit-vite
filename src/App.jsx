import React from 'react';
import { AuthProvider } from '../src/AuthContext';
import Layout from './components/Layout/Layout';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';



function App() {

  return (
      <Router>

        <AuthProvider>

          <Layout>

            <Switch>

              {/* <Home></Home> */}
              <Route exact path="/" component={Home}></Route>
              {/* <Signup></Signup> */}
              <PublicRoute exact path="/signup" component={Signup}></PublicRoute>
              {/* <Login></Login> */}
              <PublicRoute exact path="/login" component={Login}></PublicRoute>
              {/* <Quiz></Quiz> */}
              <PrivateRoute exact path="/" component={Quiz}></PrivateRoute>
              {/* <Result></Result> */}
              <PrivateRoute exact path="/result" component={Result}></PrivateRoute>

            </Switch>

          </Layout>

        </AuthProvider>

      </Router>
         
  )
}

export default App;
