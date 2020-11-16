import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

//  ROUTES
import Home from './components/routes/Home';
import Dashboard from './components/routes/DashBoard';

function App() {
  return (
    <>
      <header> {/* nav goes here */}
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>DashBoard</Link>
        </nav>
      </header>

      {/* ROUTES  */}
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;