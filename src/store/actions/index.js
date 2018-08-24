import axios from 'axios';
import {
  FETCH_USER,
  FETCH_STUDYSYNC,
  GET_EVENT_LIST,
  EVENTS_LOADING,
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

// wait data to load
export const setEventsLoading = () => ({
  type: EVENTS_LOADING,
});

// get all the events in the list
export const getEventList = () => async (dispatch) => {
  dispatch(setEventsLoading());
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
