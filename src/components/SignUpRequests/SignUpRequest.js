import React from 'react';
import PropTypes from 'prop-types';

const SignUpRequest = ({ name, email }) => (
  <div className="SignUpRequest">
    <div>{name}</div>
    <div>{email}</div>
    <div> Tick or X</div>
  </div>
);

SignUpRequest.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SignUpRequest;
