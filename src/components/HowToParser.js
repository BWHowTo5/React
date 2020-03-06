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
        .map(item => {
          return item
            .split('[')
            .map(link => {
              if (link.match(/]\(.*\)/)) {
                const url = link.slice(
                  link.indexOf('(') + 1,
                  link.indexOf(')')
                );
                return `|${url}>${link.slice(
                  0,
                  link.indexOf(']')
                )}|${link.slice(link.indexOf(')') + 1)}`;
              } else {
                return link.replace(']', '');
              }
            })
            .join('');
        })
    );
  }, [props.howto]);
  return (
    <div className='parsedContent'>
      <h1 className='title'>{props.howto.title}</h1>
      <h2 className='summary'>{props.howto.summary}</h2>
      {content.map((str, i) => {
        if (str.includes('>')) {
          if (str.match(/^###.*/)) {
            return (
              <h3 key={i}>
                {str
                  .slice(3)
                  .split('|')
                  .map((link, j) => {
                    if (link.includes('>')) {
                      return (
                        <a key={j} href={link.slice(0, link.indexOf('>'))}>
                          {link.slice(link.indexOf('>') + 1, link.length)}
                        </a>
                      );
                    } else {
                      return <span key={j}>{link}</span>;
                    }
                  })}
              </h3>
            );
          } else if (str.match(/^##.*/)) {
            return (
              <h2 key={i}>
                {str
                  .slice(2)
                  .split('|')
                  .map((link, j) => {
                    if (link.includes('>')) {
                      return (
                        <a key={j} href={link.slice(0, link.indexOf('>'))}>
                          {link.slice(link.indexOf('>') + 1, link.length)}
                        </a>
                      );
                    } else {
                      return <span key={j}>{link}</span>;
                    }
                  })}
              </h2>
            );
          } else if (str.match(/^#.*/)) {
            return (
              <h2 key={i}>
                {str
                  .slice(1)
                  .split('|')
                  .map((link, j) => {
                    if (link.includes('>')) {
                      return (
                        <a key={j} href={link.slice(0, link.indexOf('>'))}>
                          {link.slice(link.indexOf('>') + 1, link.length)}
                        </a>
                      );
                    } else {
                      return <span key={j}>{link}</span>;
                    }
                  })}
              </h2>
            );
          } else {
            return (
              <p key={i}>
                {str.split('|').map((link, j) => {
                  if (link.includes('>')) {
                    return (
                      <a key={j} href={link.slice(0, link.indexOf('>'))}>
                        {link.slice(link.indexOf('>') + 1, link.length)}
                      </a>
                    );
                  } else {
                    return <span key={j}>{link}</span>;
                  }
                })}
              </p>
            );
          }
        } else {
          if (str.match(/^<.*/)) {
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
