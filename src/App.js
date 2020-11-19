import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import styled from 'styled-components';

//  ROUTES
import Home from './components/routes/Home';
import Dashboard from './components/routes/DashBoard';
import Projects from './components/routes/Projects';
import Register from './components/Register';
import Login from './components/Login'; 

const Nav = styled.nav`
  position: fixed;
`

const NavLink = styled.a`
  color: white;
  padding: 10%;
  font-size: 18px; 
  font-weight: bold; 
` 

function App() {
  return (
    <>
      <header> {/* nav goes here */}
        <Nav>
          <Link to='/'><NavLink>Home</NavLink></Link>
          <Link to='/dashboard'><NavLink>DashBoard</NavLink></Link>
          <Link to='/projects'><NavLink>Projects</NavLink></Link>
          <Link to='/register'><NavLink>Register</NavLink></Link>
          <Link to='/login'><NavLink>Login</NavLink></Link>
        </Nav>
      </header>
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