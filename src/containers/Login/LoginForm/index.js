import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import FormField from '../FormField';

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

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be longer than 6 characters.';
  }

  return errors;
};

LoginForm.defaultProps = {
  submitErrors: null,
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitErrors: PropTypes.shape({}),
};

export default reduxForm({
  validate,
  form: 'login',
  destroyOnUnmount: false,
})(LoginForm);
