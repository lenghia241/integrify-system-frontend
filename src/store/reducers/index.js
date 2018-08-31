import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';
import dashboardReducer from './dashboardReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  form: reduxForm,
  profile: profileReducer,
  auth: authReducer,
  attendance: attendanceReducer,
  dashboard: dashboardReducer,
});

export const getAuth = state => state.auth;
export const getId = state => state.auth.user.id;
export const getAttendance = state => state.attendance;
export const getStudySyncs = state => state.dashboard.studysyncs;
export const getEvents = state => state.dashboard.events;
export const getAssignments = state => state.dashboard.assignments;
export const getProfile = state => state.profile;
