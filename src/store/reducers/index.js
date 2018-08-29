import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  attendance: attendanceReducer,
  dashboard: dashboardReducer,
});
export const getAuth = state => state.auth;
export const getAttendance = state => state.attendance;
export const getStudySyncs = state => state.dashboard.studysyncs;
export const getEvents = state => state.dashboard.events;
export const getAssignments = state => state.dashboard.assignments;
