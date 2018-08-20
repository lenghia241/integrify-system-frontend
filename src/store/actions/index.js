import axios from 'axios';
import { FETCH_USER, GET_EVENTS, EVENTS_LOADING } from './types';

/*eslint-disable */
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

//wait data to load
export const setEventsLoading = () => {
    return {
        type: EVENTS_LOADING
    };
};

//get all the events in the list
export const getEvents = () => async dispatch => {
    dispatch(setEventsLoading());
    const res = await axios.get('https://integrify.network/api/dashboard/events');
    dispatch({
        type: GET_EVENTS,
        payload: res.data
    })
};

