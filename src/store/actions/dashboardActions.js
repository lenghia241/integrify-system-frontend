import axios from 'axios';

import {
  FETCH_STUDYSYNC,
  FETCH_ASSIGNMENT,
  GET_EVENT_LIST,
  GET_EVENT,
  ADD_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
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

// add an event to the list
export const addEvent = event => (dispatch) => {
  axios.post('/api/v1/dashboard/events', event).then(res => dispatch({
    type: ADD_EVENT,
    payload: res.data,
  }));
};

// remove an event from the list
export const deleteEvent = id => (dispatch) => {
  axios.delete(`/api/v1/dashboard/events/${id}`).then(res => dispatch({
    type: DELETE_EVENT,
    payload: id,
  }));
};

// update an event in the list
export const updateEvent = id => (dispatch) => {
  axios.put(`/api/events/${id}`).then(res => dispatch({
    type: UPDATE_EVENT,
  }));
};
