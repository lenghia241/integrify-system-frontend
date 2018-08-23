import axios from 'axios';
import { FETCH_USER, CHECK_IN, CHECK_OUT } from './types';

export const fetchUser = () => dispatch => axios.get('https://integrify.network/users/5b7c5ade5f49453eecccf351').then((res) => {
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
});

export const checkIn = () => ({
  type: CHECK_IN,
});

export const checkOut = () => ({
  type: CHECK_OUT,
});
