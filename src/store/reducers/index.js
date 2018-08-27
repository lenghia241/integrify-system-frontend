import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import reduxFormReducer from './reduxFormReducer';
import assignmentFormReducer from './assignmentFormReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  reduxFormReducer,
  assignment: assignmentFormReducer,
});
