import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  dash: dashboardReducer,
  event: eventsReducer,
});

export const getAuth = state => state.auth;
export const getDash = state => state.dash;
export const getEvent = state => state.event;
