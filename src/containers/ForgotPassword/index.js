import React, { Component } from 'react';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';

import validate from '../../utils/validate';
import LoginLayout from '../../components/Login/LoginLayout';
import renderField from '../../components/renderField';

class ForgotPassword extends Component {
  render() {
    const { invalid } = this.props;

    return (
      <LoginLayout>
        <div className="card-content">
          <div className="logo-container">
            <img
              src="https://s3.eu-west-2.amazonaws.com/integrify-system-assets/logo-black.png"
              alt="logo"
              className="logo"
            />
            <h5>Reset Password</h5>
            <p>To reset your password, please provide your registered email: </p>
            <form>
              <Field name="email" type="email" label="Email" component={renderField} />
              <div className="center">
                <button type="submit" className="btn login-btn" disabled={invalid}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </LoginLayout>
    );
  }
}

ForgotPassword.propTypes = {
  ...reduxFormPropTypes,
};

export default reduxForm({
  validate,
  form: 'forget-password-email',
})(ForgotPassword);
