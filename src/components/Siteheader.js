import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../redux/actions';

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
          {props.user.creator ? (
            <li>
              <Link
                className={active === '/howtos/new/edit' ? 'active' : null}
                to='/howtos/new/edit'
              >
                Create
              </Link>
            </li>
          ) : null}
          <li>
            {window.localStorage.getItem('token') ? (
              <Link to='/login' onClick={props.signout}>
                Log Out
              </Link>
            ) : (
              <Link
                className={active === '/login' ? 'active' : null}
                to='/login'
              >
                Log In
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { signout })(SiteHeader);
