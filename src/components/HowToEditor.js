import React from 'react';
import { connect } from 'react-redux';

const HowToEditor = props => {
  return (
    <div className='HowToEditor'>
      <h1>How To Editor</h1>
      <input
        type='text'
        onChange={e => console.log(`Title: ${e.target.value}`)}
        placeholder='Title'
      />
      <input
        type='text'
        onChange={e => console.log(`Summary: ${e.target.value}`)}
        placeholder='Summary'
      />

      <div className='buttons'>
        <div>Preview</div>
        <div>Submit</div>
        <div>Cancel</div>
      </div>
      <div className='help'>
        <h3>#,##,### to make large, medium, and small headings</h3>
        <h3>[Link Text](URL) to make a link</h3>
        <h3>&lt;URL&gt; to import a picture</h3>
      </div>
      <textarea onChange={e => console.log(`Content: ${e.target.value}`)} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(HowToEditor);
