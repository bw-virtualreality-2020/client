import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import './styles/scss/Global.scss'

//  ROUTES
import Home from './components/routes/Home';
import Dashboard from './components/routes/DashBoard';
import Projects from './components/routes/Projects';
import Register from './components/Register';
import Login from './components/Login'; 
import NavBar from './components/static/NavBar';
import Footer from './components/static/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/projects' component={Projects} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;