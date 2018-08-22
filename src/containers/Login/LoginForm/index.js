import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import FormField from '../FormField';

const LoginForm = ({ handleSubmit }) => (
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
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
})(LoginForm);
