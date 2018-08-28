import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import FormField from '../FormField';
import { formValidate as validate } from '../../../utils';

const LoginForm = ({ handleSubmit, submitErrors }) => (
  <React.Fragment>
    {submitErrors
      ? Object.keys(submitErrors).map(key => (
          <div className="red-text" key={key}>
            {submitErrors[key]}
          </div>
      ))
      : null}
    <form onSubmit={handleSubmit}>
      <Field name="email" component={FormField} type="email" label="Email" />
      <Field name="password" component={FormField} type="password" label="Password" />
      <small>
        <Link to="/forgot-password/" className="right-align forgot-pw">
          Forgot your password?
        </Link>
      </small>
      <div className="center">
        <button type="submit" className="btn login-btn">
          Log In
        </button>
      </div>
    </form>
  </React.Fragment>
);

LoginForm.defaultProps = {
  submitErrors: null,
};

LoginForm.propTypes = {
  ...reduxFormPropTypes,
  submitErrors: PropTypes.shape({}),
};

export default reduxForm({
  validate,
  form: 'login',
  destroyOnUnmount: false,
})(LoginForm);
