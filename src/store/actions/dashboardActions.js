import axios from 'axios';

import {
  FETCH_STUDYSYNC, FETCH_ASSIGNMENT, GET_EVENT_LIST, GET_EVENT,
} from './types';

export const fetchStudySync = () => (dispatch) => {
  axios.get('/api/v1/dashboard/studysync').then((res) => {
    dispatch({
      type: FETCH_STUDYSYNC,
      payload: res.data,
    });
  });
};

export const getAssignmentsList = () => (dispatch) => {
  axios.get('/api/v1/dashboard/assignments').then((res) => {
    dispatch({
      type: FETCH_ASSIGNMENT,
      payload: res.data,
    });
  });
};

// get all the events in the list
export const getEventList = () => async (dispatch) => {
  const res = await axios.get('/api/v1/dashboard/events');
  dispatch({
    type: GET_EVENT_LIST,
    payload: res.data,
  });
};

// get an event from the list
export const getEvent = id => async (dispatch) => {
  const res = await axios.get(`/api/v1/dashboard/events/${id}`);
  dispatch({
    type: GET_EVENT,
    payload: res.data,
  });
};
