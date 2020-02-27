import React from 'react';
import { connect } from 'react-redux';

const Login = props => {
  return <div className='Login'>User Login Page</div>;
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(Login);
