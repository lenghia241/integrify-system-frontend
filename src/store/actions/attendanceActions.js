import axios from 'axios';
import { GET_ATTENDANCE, UPDATE_ATTENDANCE, ATTENDANCE_LOADING } from './types';

export const setAttendanceLoading = () => ({ type: ATTENDANCE_LOADING });

export const getAttendance = id => (dispatch) => {
  dispatch(setAttendanceLoading());
  axios
    .get(`https://integrify.network/api/v1/attendance/today/${id}`)
    .then(res => dispatch({ type: GET_ATTENDANCE, payload: res.data }))
    .catch((error) => {
      console.log(error.res);
    });
};

export const updateAttendance = id => (dispatch) => {
  dispatch(setAttendanceLoading());
  axios
    .put(`https://integrify.network/api/v1/attendance/today/${id}`)
    .then(res => dispatch({ type: UPDATE_ATTENDANCE, payload: res.data }))
    .catch((error) => {
      console.log(error.res);
    });
};
