import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import LoginField from './LoginField';

const Login = ({ handleSubmit }) => (
  <div
    style={{
      background:
        'url("https://s3.eu-west-2.amazonaws.com/integrify-system-assets/background-img.jpg") no-repeat center center fixed',
      backgroundSize: 'cover',
    }}
  >
    <div className="section container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card card-wrapper">
            <div className="card-content">
              <h5 className="center">Login</h5>
              <form onSubmit={handleSubmit}>
                <Field name="email" component={LoginField} type="email" label="Email" />
                <Field name="password" component={LoginField} type="password" label="Password" />
                <button type="submit" className="btn">
                  Submit
                </button>
                <Link
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    marginTop: '15px',
                  }}
                  to="/forgot-password/"
                >
                  Forgot Password?
                </Link>
              </form>
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
