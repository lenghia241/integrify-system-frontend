import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';
import eventsReducer from './eventsReducer';
import assignmentReducer from './assignmentReducer';
import assignmentFormReducer from './assignmentFormReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  dash: dashboardReducer,
  event: eventsReducer,
  assignments: assignmentReducer,
  assignment: assignmentFormReducer,
});
export const getAuth = state => state.auth;
export const getDash = state => state.dash;
export const getEvent = state => state.event;
