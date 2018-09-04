import axios from 'axios';
import { GET_REQUEST_LIST, ACCEPT_REQUEST, DECLINE_REQUEST } from './types';

export const getRequestList = () => (dispatch) => {
  axios.get('/api/v2/users/signup/temp').then((res) => {
    dispatch({
      type: GET_REQUEST_LIST,
      payload: res.data,
    });
  });
};
export const acceptRequest = ({ id, role, batch }) => (dispatch) => {
  axios.post(`/users/signup/temp/${id}`).then((res) => {
    dispatch({
      type: ACCEPT_REQUEST,
      payload: res.data,
    });
  });
};
export const declineRequest = ({ id }) => (dispatch) => {
  axios.delete(`/users/signup/temp/${id}`).then((res) => {
    dispatch({
      type: DECLINE_REQUEST,
      payload: res.data,
    });
  });
};
