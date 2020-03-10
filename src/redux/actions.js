import axios from 'axios';
import authios from '../utils/authios';
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
    .post('https://how-to-5-api.herokuapp.com/api/users/register', user)
    .then(res => {
      console.log(res.data);
      window.localStorage.setItem('token', res.data.authToken);
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
    .post('https://how-to-5-api.herokuapp.com/api/users/login', form)
    .then(res => {
      console.log(res);
      window.localStorage.setItem('token', res.data.authToken);
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

export const HOWTOS_REQUEST = 'HOWTOS_REQUEST';
export const HOWTOS_SUCCESS = 'HOWTOS_SUCCESS';
export const HOWTOS_FAILURE = 'HOWTOS_FAILURE';

export const howTos = () => dispatch => {
  dispatch({ type: HOWTOS_REQUEST, payload: null });
  authios()
    .get('/how-tos')
    .then(res => {
      console.log(res.data);
      dispatch({ type: HOWTOS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('An error occured:', err);
      dispatch({ type: HOWTOS_FAILURE, payload: err });
    });
};

export const HOWTO_REQUEST = 'HOWTO_REQUEST';
export const HOWTO_SUCCESS = 'HOWTO_SUCCESS';
export const HOWTO_FAILURE = 'HOWTO_FAILURE';

export const howTo = id => dispatch => {
  dispatch({ type: HOWTO_REQUEST, payload: null });
  authios()
    .get(`/how-tos/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: HOWTO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('An error occured:', err);
      dispatch({ type: HOWTO_FAILURE, payload: err });
    });
};

export const HOLD_HOWTO_FORM = 'HOLD_HOWTO_FORM';

export const holdHowToForm = form => dispatch => {
  dispatch({ type: HOLD_HOWTO_FORM, payload: form });
};
