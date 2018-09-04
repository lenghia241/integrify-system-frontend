import axios from 'axios';
import { GET_ATTENDANCE, UPDATE_ATTENDANCE, ATTENDANCE_LOADING } from './types';

export const setAttendanceLoading = () => ({ type: ATTENDANCE_LOADING });

export const getAttendance = userId => (dispatch) => {
  dispatch(setAttendanceLoading());
  axios
    .get(`/api/v2/attendance/today/students/${userId}`)
    .then(res => dispatch({ type: GET_ATTENDANCE, payload: res.data }))
    .catch((error) => {
      console.log(error.res);
    });
};

export const updateAttendance = userId => (dispatch) => {
  dispatch(setAttendanceLoading());
  axios
    .put(`/api/v2/attendance/today/students/${userId}`)
    .then(res => dispatch({ type: UPDATE_ATTENDANCE, payload: res.data }))
    .catch((error) => {
      console.log(error.res);
    });
};
