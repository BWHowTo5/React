import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './actions';

const store = {
  testKey: 'testValue'
};

const reducer = (state = store, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case SIGNUP_SUCCESS:
    case SIGNUP_FAILURE:
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    default:
      return state;
  }
};

export default reducer;
