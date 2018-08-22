import React from 'react';
import PropTypes from 'prop-types';
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


const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!/[a-zA-Z]+/.test(values.firstName)) {
    errors.firstName = 'Only alphabet characters allowed';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (!/[a-zA-Z]+/.test(values.firstName)) {
    errors.lastName = 'Only alphabet characters allowed';
  }

  return errors;
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  validate,
  form: 'signUp',
  destroyOnUnmount: false,
})(SignUpForm);
