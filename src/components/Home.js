import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
  return <div className='Home'>User Home Page</div>;
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(Home);
