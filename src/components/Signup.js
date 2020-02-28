import React from 'react';
import { connect } from 'react-redux';

const Signup = props => {
  return (
    <div className='Signup'>
      <h3>Create an Account</h3>

      <input type='text' placeholder='Username' />
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Enter Password' />
      <input type='password' placeholder='Confirm Password' />

      <div className='buttons'>
        <div className='user'>Become a User</div>
        <div className='creator'>Become a Creator</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(Signup);
