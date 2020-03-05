import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const HowToParser = props => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    setContent(
      props.howto.content
        .replace('>', '\n')
        .replace('<', '\n<')
        .split('\n')
    );
  }, [props.howto]);
  return (
    <div className='parsedContent'>
      {content.map((str, i) => {
        if (str[0] === '<') {
          return <img key={i} alt='user content' src={str.slice(1)} />;
        } else if (str[0] === '#') {
          return <h1 key={i}>{str}</h1>;
        } else {
          return <p key={i}>{str}</p>;
        }
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    howto: state.howto
  };
};

export default connect(mapStateToProps, {})(HowToParser);
