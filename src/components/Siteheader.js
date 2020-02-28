import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SiteHeader = props => {
  const active = props.location.pathname;
  return (
    <div className='SiteHeader'>
      <div className='SiteName'>
        <h1>How To</h1>
        <h4>Let's Simplify DIY</h4>
      </div>
      <nav>
        <ul>
          <li>
            <Link className={active === '/home' ? 'active' : null} to='/home'>
              Home
            </Link>
          </li>
          <li>
            <Link className={active === '/login' ? 'active' : null} to='/login'>
              {' '}
              Log In
            </Link>
          </li>
          <li>
            <Link
              className={active === '/blocked' ? 'active' : null}
              to='/blocked'
            >
              Protected Page
            </Link>
          </li>
          <li>
            <Link
              className={active === '/notareallink' ? 'active' : null}
              to='/notareallink'
            >
              Bad Link
            </Link>
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
