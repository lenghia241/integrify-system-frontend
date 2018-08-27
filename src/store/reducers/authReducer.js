import {
  FETCH_USER,
  START_FETCHING,
  AUTH_USER_FAIL,
  SIGN_UP_USER_FAIL,
  AUTH_USER_SUCCESS,
  SIGN_UP_USER_SUCCESS,
  CHECK_IN, CHECK_OUT, LOG_OUT,
} from '../actions/types';

const initState = {
  user: null,
  loading: false,
  authErrors: {},
  signUpErrors: {},
};

export default function (state = initState, action) {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload || false,
        loading: false,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        cookie: action.payload,
        loading: false,
        authErrors: null,
      };
    case AUTH_USER_FAIL:
      return {
        ...state,
        loading: false,
        authErrors: action.payload,
      };
    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        signUpErrors: null,
      };
    case SIGN_UP_USER_FAIL:
      return {
        ...state,
        loading: false,
        signUpErrors: action.payload,
      };
    case CHECK_IN:
      return { ...state, present: true };

    case CHECK_OUT:
      return { ...state, present: false };

    case LOG_OUT:
      return state;

    default:
      return state;
  }
}
