import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FormField from '../FormField';

const SignUpForm = ({ handleSubmit, invalid, submitErrors }) => (
  <React.Fragment>
    {Object.keys(submitErrors).map(key => (
      <div className="red-text" key={key}>{submitErrors[key]}</div>
    ))}
    <form onSubmit={handleSubmit}>
      <Field name="firstName" component={FormField} type="text" label="First Name" />
      <Field name="lastName" component={FormField} type="text" label="Last Name" />
      <Field name="email" component={FormField} type="email" label="Email" />
      <div className="center">
        <button type="submit" className="btn" disabled={invalid}>
          Submit
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

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  return errors;
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitErrors: PropTypes.shape({}).isRequired,
};

export default reduxForm({
  validate,
  form: 'signUp',
  destroyOnUnmount: false,
})(SignUpForm);
