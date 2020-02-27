import React from 'react';
import { Route /*Redirect*/ } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (
        // Uncomment lines 2, 9, and 11 to enforce private routing.
        // localStorage.getItem('token') ? (
        <Component {...props} />
      )
      // ) : <Redirect to='/blocked' />
    }
  />
);

export default PrivateRoute;
