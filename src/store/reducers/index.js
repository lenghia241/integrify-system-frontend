import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  event: eventsReducer,
});

export const getAuth = state => state.auth;
export const getEvent = state => state.event;
