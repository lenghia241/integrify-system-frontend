import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  attendance: attendanceReducer,
});

export const getAuth = state => state.auth;
export const getAttendance = state => state.attendance;
