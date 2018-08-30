import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import FormField from '../FormField';
import validate from '../../../utils/validate';

const SignUpForm = ({
  handleSubmit, invalid, submitErrors, signUpMsg,
}) => (
  <React.Fragment>
    {submitErrors
      ? Object.keys(submitErrors).map(key => (
          <div className="red-text" key={key}>
            {submitErrors[key]}
          </div>
      ))
      : null}
    {signUpMsg ? <div className="green-text">{signUpMsg}</div> : null}
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

SignUpForm.defaultProps = {
  submitErrors: null,
};

SignUpForm.propTypes = {
  ...reduxFormPropTypes,
  submitErrors: PropTypes.shape({}),
  signUpMsg: PropTypes.string.isRequired,
};

export default reduxForm({
  validate,
  form: 'signUp',
  destroyOnUnmount: false,
})(SignUpForm);
