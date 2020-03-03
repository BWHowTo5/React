import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import SiteHeader from './components/Siteheader';
import Signup from './components/Signup';
import Login from './components/Login';
import Blocked from './components/Blocked';
import Home from './components/Home';
import NotFound from './components/NotFound';
import HowToPage from './components/HowToPage';

const App = () => {
  return (
    <div className='App'>
      <Route path='/' component={SiteHeader} />
      <Switch>
        <Route exact path='/' />
        <Route
          path='/login'
          render={props => (
            <div className='AuthPage'>
              <Signup {...props} />
              <Login {...props} />
            </div>
          )}
        />
        <Route path='/blocked' component={Blocked} />
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/howto/:id' component={HowToPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
