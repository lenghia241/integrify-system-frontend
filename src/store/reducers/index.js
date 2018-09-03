import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';
import dashboardReducer from './dashboardReducer';
import eventsReducer from './eventsReducer';
import assignmentReducer from './assignmentReducer';
import signupRequestsReducer from './signuprequestsReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  attendance: attendanceReducer,
  dash: dashboardReducer,
  event: eventsReducer,
  assignments: assignmentReducer,
  signupRequests: signupRequestsReducer,
});
export const getAuth = state => state.auth;
export const getAttendance = state => state.attendance;
export const getDash = state => state.dash;
export const getEvent = state => state.event;
