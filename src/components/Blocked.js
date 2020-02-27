import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Blocked = props => {
  return (
    <div className='Blocked'>
      <h1>You must be logged in to do that</h1>
      <Link to='/login'>Log In</Link>
      <p>or</p>
      <Link to='/signup'>Create an account</Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(Blocked);
