import axios from 'axios';
import {
  FETCH_USER, FETCH_STUDYSYNC, GET_EVENT_LIST, EVENTS_LOADING, FETCH_ASSIGNMENT,
} from './types';

/*eslint-disable */
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const fetchStudySync = () => dispatch => {
  axios.get('https://integrify.network/api/dashboard/studysync').then(res => {
    dispatch({
      type: FETCH_STUDYSYNC,
      payload: res.data,
    });
  });
};

export const getAssignments = () => dispatch => {
  axios.get('https://integrify.network/api/dashboard/assignments').then(res => {
    dispatch({
      type: FETCH_ASSIGNMENT,
      payload: res.data,
    });
  });
};

//wait data to load
export const setEventsLoading = () => {
  return {
    type: EVENTS_LOADING,
  };
};

//get all the events in the list
export const getEventList = () => async dispatch => {
  dispatch(setEventsLoading());
  const res = await axios.get('https://integrify.network/api/dashboard/events');
  dispatch({
    type: GET_EVENT_LIST,
    payload: res.data,
  });
};
