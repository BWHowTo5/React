import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import SiteHeader from './components/Siteheader';
import Signup from './components/Signup';
import Login from './components/Login';
import Blocked from './components/Blocked';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className='App'>
      <SiteHeader />
      <Switch>
        <Route exact path='/' />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/blocked' component={Blocked} />
        <PrivateRoute path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
