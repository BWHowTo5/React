import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { howTos } from '../utils/data'; //TEMPORARY!!!!
const Home = props => {
  return (
    <div className='Home'>
      <h1>Welcome User</h1>
      {howTos.map(howTo => (
        <Link to={`/howto/${howTo.id}`} key={howTo.id} className='howTo'>
          <h2>
            {howTo.title} ID: {howTo.id}
          </h2>
          <p>{howTo.preview}</p>
          <h4>Author: {howTo.author}</h4>
          <h3>
            Rating:&nbsp;
            {Math.ceil((howTo.likes / (howTo.likes + howTo.dislikes)) * 100)}%
          </h3>
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(Home);
