import axios from 'axios';
import {
  FETCH_USER,
  FETCH_USER_PROFILE,
  FETCH_STUDYSYNC,
  GET_EVENT_LIST,
  FETCH_ASSIGNMENT,
  CHECK_IN,
  CHECK_OUT,
  LOG_OUT,
} from './types';

export const fetchUser = () => dispatch => axios.get('https://integrify.network/users/5b7c5ade5f49453eecccf351').then((res) => {
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
});

export const fetchUserProfile = () => dispatch => axios.get('https://integrify.network/api/profiles/5b7ab1957c9b3c63007d5c8c').then((res) => {
  dispatch({
    type: FETCH_USER_PROFILE,
    payload: res.data[0],
  });
});

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
