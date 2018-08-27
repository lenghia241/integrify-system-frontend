import axios from 'axios';

import {
  FETCH_STUDYSYNC,
  FETCH_ASSIGNMENT,
  GET_EVENT_LIST,
  CHECK_IN,
  CHECK_OUT,
  LOG_OUT,
} from './types';

export { fetchUser, authUser, signUpUser } from './auth';

export const fetchStudySync = () => (dispatch) => {
  axios.get('https://integrify.network/api/dashboard/studysync').then((res) => {
    dispatch({
      type: FETCH_STUDYSYNC,
      payload: res.data,
    });
  });
};

export const getAssignments = () => (dispatch) => {
  axios.get('https://integrify.network/api/dashboard/assignments').then((res) => {
    dispatch({
      type: FETCH_ASSIGNMENT,
      payload: res.data,
    });
  });
};

// get all the events in the list
export const getEventList = () => async (dispatch) => {
  const res = await axios.get('https://integrify.network/api/dashboard/events');
  dispatch({
    type: GET_EVENT_LIST,
    payload: res.data,
  });
};

export const checkIn = () => ({
  type: CHECK_IN,
});

export const checkOut = () => ({
  type: CHECK_OUT,
});

export const logOut = () => ({
  type: LOG_OUT,
});
