import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../../components/Login/LoginForm';
import SignUpForm from '../../components/Login/SignUpForm';

import Loader from '../../components/Loader';

import * as actions from '../../store/actions';
import { getAuth } from '../../store/reducers';

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
    const {
      authUser, signUpUser, loading, authErrors, signUpErrors, signUpMsg,
    } = this.props;

    let form = null;
    if (loading) {
      form = <Loader />;
    } else if (signUp) {
      form = (
        <SignUpForm
          onSubmit={values => signUpUser(values)}
          submitErrors={signUpErrors}
          signUpMsg={signUpMsg}
        />
      );
    } else form = <LoginForm onSubmit={values => authUser(values)} submitErrors={authErrors} />;

    return (
      <div className="background login valign-wrapper">
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
                        onClick={this.handleLogInTab}>
                        Log In
                      </button>
                    </li>
                    <li className="tab">
                      <button
                        type="button"
                        className={`btn-flat btn-tab ${signUp ? 'active' : ''}`}
                        onClick={this.handleSignUpTab}>
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
                  {form}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: getAuth(state).loading,
  authErrors: getAuth(state).authErrors,
  signUpErrors: getAuth(state).signUpErrors,
  signUpMsg: getAuth(state).signUpMsg,
});

Login.defaultProps = {
  authErrors: null,
  signUpErrors: null,
};

Login.propTypes = {
  authUser: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  authErrors: PropTypes.shape({}),
  signUpErrors: PropTypes.shape({}),
  signUpMsg: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  actions,
)(Login);
