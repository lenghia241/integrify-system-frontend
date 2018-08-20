import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  dash: dashboardReducer,
});

export const getAuth = state => state.auth;
