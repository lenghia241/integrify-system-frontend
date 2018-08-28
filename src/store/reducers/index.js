import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';
import dashboardReducer from './dashboardReducer';
import eventsReducer from './eventsReducer';
import assignmentReducer from './assignmentReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  form: reduxForm,
  profile: profileReducer,
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
