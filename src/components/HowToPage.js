import React from 'react';
import { connect } from 'react-redux';
import { howTo } from '../redux/actions';
import HowToParser from './HowToParser';
const HowToPage = props => {
  const { match, howto, howTo, awaiting, error } = props;
  const id = Number(match.params.id);
  if (id !== howto.id && !awaiting && !error) {
    console.log(id, howto.id);
    console.log(awaiting);
    console.log(error);
    howTo(id);
  }
  if (!awaiting) {
    if (error) {
      if (error.response.status === 403) {
        return (
          <div className='HowToPage'>
            <h1>Your session is expired please log out and log in again.</h1>
          </div>
        );
      } else {
        return (
          <div className='HowToPage'>
            <h1>Sorry, there was an issue loading this HowTo.</h1>
          </div>
        );
      }
    } else {
      return (
        <div className='HowToPage'>
          <HowToParser />
        </div>
      );
    }
  } else {
    return (
      <div className='HowToPage'>
        <h1>Loading... Please wait.</h1>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    howto: state.howto,
    awaiting: state.awaiting,
    error: state.error
  };
};

export default connect(mapStateToProps, { howTo })(HowToPage);
