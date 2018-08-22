import axios from 'axios';
import { GET_ATTENDANCE, UPDATE_ATTENDANCE, ATTENDANCE_LOADING } from './types';

export const setStudentsLoading = () => ({ type: ATTENDANCE_LOADING });

export const getAttendance = id => (dispatch) => {
  dispatch(setStudentsLoading());
  axios
    .get(`/api/attendance/${id}`)
    .then(res => dispatch({ type: GET_ATTENDANCE, payload: res.data }))
    .catch((error) => {
      console.log(error.res);
    });
};

export const updateAttendance = id => (dispatch) => {
  dispatch(setStudentsLoading());
  axios
    .patch(`/api/attendance/${id}`)
    .then(res => dispatch({ type: UPDATE_ATTENDANCE, payload: res.data }))
    .catch((error) => {
      console.log(error.res);
    });
};
