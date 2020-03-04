import React from 'react';
import { connect } from 'react-redux';
import { howTos } from '../utils/data';
const HowToPage = props => {
  const id = props.match.params.id;
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
        <p>{howTos[id - 1].content}</p>g
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
