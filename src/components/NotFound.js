import React from 'react';
import { connect } from 'react-redux';

const NotFound = props => {
  return (
    <div className='NotFound'>
      <h1>Oops! :(</h1>
      <h2>
        You found a broken link or the page you're looking for does not exist.
        Sorry about that.
      </h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(NotFound);
