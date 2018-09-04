import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import renderField from '../renderField';
import validate from '../../utils/validate';

const VerifyPassword = ({ handleSubmit, invalid }) => (
  <React.Fragment>
    <form onSubmit={handleSubmit}>
      <Field name="password" component={renderField} type="password" label="Password" />
      <Field name="password2" component={renderField} type="password" label="Confirm Password" />
      <div className="center">
        <button type="submit" className="btn login-btn" disabled={invalid}>
          Submit
        </button>
      </div>
    </form>
  </React.Fragment>
);

VerifyPassword.defaultProps = {
};

VerifyPassword.propTypes = {
  ...reduxFormPropTypes,
};

export default reduxForm({
  validate,
  form: 'verify-password',
})(VerifyPassword);
