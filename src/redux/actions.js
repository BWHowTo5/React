import axios from 'axios';
// import authios from '../utils/authios';

export const HANDLE_ERROR = 'HANDLE_ERROR';

export const handleError = () => dispatch => {
  dispatch({ type: HANDLE_ERROR });
};

export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const SIGNIN_USER_REQUEST = 'SIGNIN_USER_REQUEST';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';
// export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'; // Future Use
// export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'; // Future Use
// export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'; // Future Use
// export const REMOVE_USER_REQUEST = 'REMOVE_USER_REQUEST'; // Future Use
// export const REMOVE_USER_SUCCESS = 'REMOVE_USER_SUCCESS'; // Future Use
// export const REMOVE_USER_FAILURE = 'REMOVE_USER_FAILURE'; // Future Use
export const SIGNOUT_USER = 'SIGNOUT_USER';

export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_USER_REQUEST, payload: null });
  axios
    .post('https://how-to-5-api.herokuapp.com/api/users/register/', user)
    .then(res => {
      console.log(res.data);
      window.localStorage.setItem('token', res.data.token);
      dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('An error occured:', err);
      dispatch({ type: SIGNUP_USER_FAILURE, payload: err });
    });
};
export const signin = form => dispatch => {
  dispatch({ type: SIGNIN_USER_REQUEST, payload: null });
  axios
    .post('https://how-to-5-api.herokuapp.com/api/users/login/', form)
    .then(res => {
      console.log(res.data);
      window.localStorage.setItem('token', res.data.token);
      dispatch({ type: SIGNIN_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('An error occured:', err);
      dispatch({ type: SIGNIN_USER_FAILURE, payload: err });
    });
};

export const signout = () => dispatch => {
  window.localStorage.removeItem('token');
  dispatch({
    type: SIGNOUT_USER,
    payload: { id: -1, username: '', email: '' }
  });
};
