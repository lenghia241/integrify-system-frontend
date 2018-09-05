import axios from 'axios';
import { GET_REQUESTS, ACCEPT_REQUEST, DELETE_REQUEST } from './types';

export const getSignUpRequestsAction = () => (dispatch) => {
  console.log('Hello from action');
  axios.get('/api/v2/users/signup/temp').then((res) => {
    dispatch({
      type: GET_REQUESTS,
      payload: res.data,
    });
  });
};
export const acceptSignUpRequestAction = id => (dispatch) => {
  axios.post(`/api/v2/users/signup/temp/${id}`).then((res) => {
    dispatch({
      type: ACCEPT_REQUEST,
      payload: res.data,
    });
  });
};
export const deleteSignUpRequestAction = id => (dispatch) => {
  axios.delete(`/api/v2/users/signup/temp/${id}`).then((res) => {
    dispatch({
      type: DELETE_REQUEST,
      payload: res.data,
    });
  });
};
