import React from 'react';
import { connect } from 'react-redux';

const Login = props => {
  return (
    <div className='Login'>
      <h3>Log In</h3>

      <input type='text' placeholder='Username' />
      <input type='password' placeholder='Password' />

      <div className='button'>Sign In</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(Login);
