import React from 'react';
import { AuthProvider } from '../src/AuthContext';
import Layout from './components/Layout/Layout';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() {

  return (
      <Router>

        <AuthProvider>

          <Layout>

            <Switch>

              {/* <Home></Home> */}
              <Route exact path="/" component={Home}></Route>
              {/* <Signup></Signup> */}
              <Route exact path="/signup" component={Signup}></Route>
              {/* <Login></Login> */}
              <Route exact path="/login" component={Login}></Route>
              {/* <Quiz></Quiz> */}
              <Route exact path="/" component={Quiz}></Route>
              {/* <Result></Result> */}
              <Route exact path="/result" component={Result}></Route>

            </Switch>

          </Layout>

        </AuthProvider>

      </Router>
         
  )
}

export default App;
