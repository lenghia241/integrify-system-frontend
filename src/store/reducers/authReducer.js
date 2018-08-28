import {
  FETCH_USER,
  START_FETCHING,
  AUTH_USER_FAIL,
  SIGN_UP_USER_FAIL,
  AUTH_USER_SUCCESS,
  SIGN_UP_USER_SUCCESS,
  CHECK_IN,
  CHECK_OUT,
  LOG_OUT,
} from '../actions/types';

const initState = {
  loading: false,
  authErrors: null,
  signUpErrors: null,
  token: null,
  signUpMsg: '',
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
        token: action.payload,
        loading: false,
        authErrors: null,
        signUpErrors: null,
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
        signUpMsg: action.payload,
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
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
}
