import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';

//  ROUTES
import Home from './components/routes/Home';
import Dashboard from './components/routes/DashBoard';
import Projects from './components/routes/Projects';
import Register from './components/Register';
import Login from './components/Login'; 
import NavBar from './components/static/NavBar';

function App() {
  return (
    <>
      {/* <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>DashBoard</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </nav>
      </header> */}
      <NavBar />
      {/* ROUTES  */}
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/projects' component={Projects} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;