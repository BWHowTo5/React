import React from 'react';
import { connect } from 'react-redux';

const HowToPage = props => {
  return (
    <div className='HowToPage'>
      <header>
        <h1>How To Title</h1>
        <p>How To Preview goes here</p>
      </header>
      <div>
        <div>Like</div>
        <div>Rating</div>
        <div>Dislike</div>
      </div>
      <main>
        <p>This is where the content of a howto is parsed and rendered</p>
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

export default connect(mapStateToProps, {})(HowToPage);
