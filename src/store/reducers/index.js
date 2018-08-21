import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import assignmentReducer from './assignmentReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  assignments: assignmentReducer,
});
export const getAuth = state => state.auth;
