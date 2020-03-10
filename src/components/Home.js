import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { howTos } from '../redux/actions';
const Home = props => {
  const { username, howtos, awaiting, howTos, error } = props;

  useEffect(() => {
    if (!howtos.length && !awaiting && !error) howTos();
  }, [howTos, howtos, awaiting, error]);

  if (!awaiting) {
    if (error) {
      if (error.response.status === 403) {
        return (
          <div className='Home'>
            <h1>Your session is expired please log out and log in again.</h1>
          </div>
        );
      } else {
        return (
          <div className='Home'>
            <h1>Our severs are down right now. Sorry for the inconvienence.</h1>
          </div>
        );
      }
    } else if (howtos.length) {
      return (
        <div className='Home'>
          <h1>Welcome {username}</h1>
          {howtos.map(howTo => (
            <Link to={`/howto/${howTo.id}`} key={howTo.id} className='howTo'>
              <h2>{howTo.title}</h2>
              <p>{howTo.preview}</p>
              <h4>Author: {howTo.author}</h4>
              <h3>
                Rating:&nbsp;
                {Math.ceil(
                  (howTo.likes / (howTo.likes + howTo.dislikes)) * 100
                )}
                %
              </h3>
            </Link>
          ))}
        </div>
      );
    } else {
      return (
        <div className='Home'>
          <h1>No results found.</h1>
        </div>
      );
    }
  } else {
    return (
      <div className='Home'>
        <h1>Loading... Please Wait</h1>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    username: state.user.username,
    test: state.testKey,
    howtos: state.howtos,
    awaiting: state.awaiting,
    error: state.error
  };
};

export default connect(mapStateToProps, { howTos })(Home);
