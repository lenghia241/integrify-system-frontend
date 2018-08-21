import axios from 'axios';
import { FETCH_USER, FETCH_ASSIGNMENT } from './types';

/*eslint-disable */
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const getAssignments = () => dispatch => {
  axios.get('https://integrify.network/api/dashboard/assignments').then(res => {
    console.log(res.data);
    dispatch({
      type: FETCH_ASSIGNMENT,
      payload: res.data,
    });
  });
};
