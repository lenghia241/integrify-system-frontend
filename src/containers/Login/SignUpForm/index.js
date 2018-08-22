import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import FormField from '../FormField';

const SignUpForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="firstName" component={FormField} type="text" label="First Name" />
    <Field name="lastName" component={FormField} type="text" label="Last Name" />
    <Field name="email" component={FormField} type="email" label="Email" />
    <div className="center">
      <button type="submit" className="btn">
        Submit
      </button>
    </div>
  </form>
);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
})(SignUpForm);
