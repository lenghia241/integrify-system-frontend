import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import LoginField from './LoginField';

import './Login.css';

const Login = ({ handleSubmit }) => (
  <div className="background">
    <div className="section container" style={{ transform: 'translateY(40%)' }}>
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card card-wrapper">
            <div className="card-content">
              <div className="logo-container">
                <img
                  src="https://s3.eu-west-2.amazonaws.com/integrify-system-assets/logo-black.png"
                  alt="logo"
                  className="logo"
                />
              </div>
              <form onSubmit={handleSubmit}>
                <Field name="email" component={LoginField} type="email" label="Email" />
                <Field name="password" component={LoginField} type="password" label="Password" />
                <small>
                  <Link to="/forgot-password/" className="right-align forgot-pw">
                    Forgot your password?
                  </Link>
                </small>
                <div className="center">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="card-content grey lighten-4 center-align">
              <p>
                Don&apos;t have an account? <Link to="/signup">Sign up now!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
})(Login);
