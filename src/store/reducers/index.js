import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';
import dashboardReducer from './dashboardReducer';
import signupRequestsReducer from './signupRequestsReducer';
import assignmentFormReducer from './assignmentFormReducer';
import profileReducer from './profileReducer';
import classAttendanceReducer from './classAttendanceReducer';

export default combineReducers({
  form: reduxForm,
  profile: profileReducer,
  auth: authReducer,
  attendance: attendanceReducer,
  signupRequests: signupRequestsReducer,
  assignment: assignmentFormReducer,
  dashboard: dashboardReducer,
  classAttendance: classAttendanceReducer,
});

export const getAuth = state => state.auth;
export const getId = state => state.auth.user.id;
export const getAttendance = state => state.attendance;
export const getStudySyncs = state => state.dashboard.studysyncs;
export const getEvents = state => state.dashboard.events;
export const getEventDetail = state => state.dashboard.event;
export const getAssignments = state => state.dashboard.assignments;
export const getClassAttendance = state => state.classAttendance;
export const getProfile = state => state.profile;
