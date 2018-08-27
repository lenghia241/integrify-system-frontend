import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';
import dashboardReducer from './dashboardReducer';
import eventsReducer from './eventsReducer';
import assignmentReducer from './assignmentReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  attendance: attendanceReducer,
  dash: dashboardReducer,
  event: eventsReducer,
  assignments: assignmentReducer,
});
export const getAuth = state => state.auth;
export const getAttendance = state => state.attendance;
export const getDash = state => state.dash;
export const getEvent = state => state.event;
