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
        if (str.slice(0, 3).match(/^<.*/)) {
          return <img key={i} alt='user content' src={str.slice(1)} />;
        } else if (str.match(/^###.*/)) {
          return <h3 key={i}>{str.slice(3)}</h3>;
        } else if (str.match(/^##.*/)) {
          return <h2 key={i}>{str.slice(2)}</h2>;
        } else if (str.match(/^#.*/)) {
          return <h1 key={i}>{str.slice(1)}</h1>;
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
