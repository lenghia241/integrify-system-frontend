import axios from 'axios';
import {
  FETCH_USER,
  AUTH_USER_SUCCESS,
  SIGN_UP_USER_SUCCESS,
  AUTH_USER_FAIL,
  SIGN_UP_USER_FAIL,
  START_FETCHING,
  LOG_OUT,
} from './types';

import { getCookie, parseJwt } from '../../utils';

export const startFetching = () => ({
  type: START_FETCHING,
});

export const authUserSuccess = token => ({
  type: AUTH_USER_SUCCESS,
  payload: token,
});

export const fetchUser = userId => async (dispatch) => {
  const res = await axios.get(`/users/${userId}`);

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const authUser = values => async (dispatch) => {
  dispatch(startFetching());
  try {
    await axios.post('/users/login', values);

    // Login succeed and cookie is set => Get token from cookie
    const token = getCookie('jwt_token');
    const decodedToken = parseJwt(token);

    dispatch(authUserSuccess(decodedToken));
  } catch (err) {
    dispatch({
      type: AUTH_USER_FAIL,
      payload: err.response.data,
    });
  }
};

export const signUpUser = values => async (dispatch) => {
  dispatch(startFetching());
  try {
    await axios.post('https://integrify.network/users/signup/temp', values);

    dispatch({
      type: SIGN_UP_USER_SUCCESS,
      payload: 'You have succesfully signed up! Please wait for the approval from admin.',
    });
  } catch (err) {
    dispatch({
      type: SIGN_UP_USER_FAIL,
      payload: err.response.data,
    });
  }
};

export const logOut = () => async (dispatch) => {
  await axios.get('/users/logout');

  dispatch({
    type: LOG_OUT,
  });
};

export const checkUser = () => async (dispatch) => {
  const token = getCookie('jwt_token');
  if (token) {
    const decodeToken = parseJwt(token);
    dispatch(authUserSuccess(decodeToken));
  }
};
