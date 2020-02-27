import React from 'react';
import { connect } from 'react-redux';

const NotFound = props => {
  return (
    <div className='NotFound'>
      Oops! You found a broken link. Sorry about that.
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(NotFound);
