import React from 'react';
import { connect } from 'react-redux';

const Signup = props => {
  return <div className='Signup'>User Signup Page</div>;
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(Signup);
