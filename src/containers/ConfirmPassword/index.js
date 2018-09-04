import React, { Component } from 'react';

import LoginLayout from '../../components/Login/LoginLayout';
import VerifyPassword from '../../components/VerifyPassword';

class ConfirmPassword extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <LoginLayout>
        <div className="card-content">
          <div className="logo-container" style={{ marginBottom: '2em' }}>
            <img
              src="https://s3.eu-west-2.amazonaws.com/integrify-system-assets/logo-black.png"
              alt="logo"
              className="logo"
            />
          </div>
          <h5 className="center">Set your password here!</h5>
          <VerifyPassword onSubmit={this.handleSubmit} />
        </div>
      </LoginLayout>
    );
  }
}

export default ConfirmPassword;
