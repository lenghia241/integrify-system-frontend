import axios from 'axios';
import {
  FETCH_USER,
  AUTH_USER_SUCCESS,
  SIGN_UP_USER_SUCCESS,
  AUTH_USER_FAIL,
  SIGN_UP_USER_FAIL,
  START_FETCHING,
} from './types';

export const startFetching = () => ({
  type: START_FETCHING,
});

export const fetchUser = () => async (dispatch) => {
  dispatch(startFetching());
  const res = await axios.get('https://integrify.network/api/profiles/5b7ab1957c9b3c63007d5c8cx');

  const user = res.data.length > 0 ? res.data[0] : null;

  dispatch({
    type: FETCH_USER,
    payload: user,
    loading: false,
  });
};

export const authUser = values => async (dispatch) => {
  dispatch(startFetching());
  try {
    const res = await axios.post('https://integrify.network/users/login', values);

    console.log(res.data);
    dispatch({
      type: AUTH_USER_SUCCESS,
      payload: 'login',
    });
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
    const res = await axios.post('https://integrify.network/users/signup/temp', values);

    console.log(res.data);

    dispatch({
      type: SIGN_UP_USER_SUCCESS,
      payload: 'signup',
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: SIGN_UP_USER_FAIL,
      payload: err.response.data,
    });
  }
};
