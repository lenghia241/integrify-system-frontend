import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import LoginLayout from '../../components/Login/LoginLayout';
import EmailForm from '../../components/ForgotPassword/EmailForm';
import Loader from '../../components/Loader';

class ForgotPassword extends Component {
  state = {
    loading: false,
    submitted: false,
  };

  handleSubmit = (values) => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      console.log(values);

      this.setState({
        loading: false,
        submitted: true,
      });
    }, 1000);
  };

  handleBackButton = () => {
    const { history } = this.props;
    history.replace('/');
  };

  render() {
    const { loading, submitted } = this.state;

    const form = submitted ? (
      <div className="valign-wrapper" style={{ height: '70%' }}>
        <div style={{ width: '100%' }}>
          <h5>Email sent!</h5>
          <p>Password reset instructions have been sent to your email address.</p>
        </div>
      </div>
    ) : (
      <React.Fragment>
        <h5>Reset Password</h5>
        <p>To reset your password, please provide your registered email: </p>
        <EmailForm onSubmit={this.handleSubmit} />
      </React.Fragment>
    );

    const render = loading ? <Loader /> : form;

    return (
      <LoginLayout>
        <div className="card-content" style={{ height: '420px' }}>
          <button
            type="button"
            className="btn login-btn btn-floating"
            style={{ marginBottom: '1.5em' }}
            onClick={this.handleBackButton}
          >
            <i className="large material-icons">arrow_back</i>
          </button>
          <div className="logo-container" style={{ marginBottom: '2em' }}>
            <img
              src="https://s3.eu-west-2.amazonaws.com/integrify-system-assets/logo-black.png"
              alt="logo"
              className="logo"
            />
          </div>
          <div className="center" style={{ height: '45%' }}>{render}</div>
        </div>
      </LoginLayout>
    );
  }
}

ForgotPassword.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default ForgotPassword;
