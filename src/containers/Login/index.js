import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import './Login.css';

class Login extends Component {
  state = {
    signUp: false,
  };

  handleLogInTab = () => {
    this.setState({
      signUp: false,
    });
  };

  handleSignUpTab = () => {
    this.setState({
      signUp: true,
    });
  };

  render() {
    const { signUp } = this.state;

    return (
      <div className="background valign-wrapper">
        <div className="section container">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <div className="card card-wrapper">
                <div className="card-tabs">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab">
                      <button
                        type="button"
                        className={`btn-flat btn-tab ${signUp ? '' : 'active'}`}
                        onClick={this.handleLogInTab}
                      >
                        Log In
                      </button>
                    </li>
                    <li className="tab">
                      <button
                        type="button"
                        className={`btn-flat btn-tab ${signUp ? 'active' : ''}`}
                        onClick={this.handleSignUpTab}
                      >
                        Sign Up
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card-content">
                  <div className="logo-container">
                    <img
                      src="https://s3.eu-west-2.amazonaws.com/integrify-system-assets/logo-black.png"
                      alt="logo"
                      className="logo"
                    />
                  </div>
                  {signUp ? <SignUpForm /> : <LoginForm />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
