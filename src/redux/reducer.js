import {
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  HANDLE_ERROR,
  SIGNOUT_USER,
  HOWTOS_REQUEST,
  HOWTOS_FAILURE,
  HOWTOS_SUCCESS,
  HOLD_HOWTO_FORM
} from './actions';

const store = {
  testKey: 'testValue',
  user: {
    id: -1,
    username: '',
    email: ''
  },
  howto: {
    id: -1,
    title: '',
    summary: '',
    content: '',
    author: -1,
    likes: 0,
    dislikes: 0
  },
  howtos: [],
  awaiting: false,
  error: null
};

const reducer = (state = store, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_USER_REQUEST:
    case SIGNIN_USER_REQUEST:
    case HOWTOS_REQUEST:
      return {
        ...state,
        awaiting: true
      };
    case SIGNUP_USER_FAILURE:
    case SIGNIN_USER_FAILURE:
    case HOWTOS_FAILURE:
      return {
        ...state,
        error: payload,
        awaiting: false
      };
    case SIGNUP_USER_SUCCESS:
    case SIGNIN_USER_SUCCESS:
      console.log(payload);
      return {
        ...state,
        user: {
          id: payload.id,
          username: payload.username,
          email: payload.email
        },
        awaiting: false
      };
    case SIGNOUT_USER:
      console.log(window.localStorage.getItem('token'));
      return {
        ...state,
        user: payload
      };
    case HOWTOS_SUCCESS:
      return {
        ...state,
        howtos: payload,
        awaiting: false
      };
    case HOLD_HOWTO_FORM:
      return { ...state, howto: payload };
    case HANDLE_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default reducer;
