import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SiteHeader = props => {
  return (
    <div className='SiteHeader'>
      <h1>How To</h1>
      <h4>Let's Simplify DIY</h4>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/login'> Log In</Link>
          </li>
          <li>
            <Link to='/blocked'>Protected Page</Link>
          </li>
          <li>
            <Link to='/notareallink'>Bad Link</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, {})(SiteHeader);
