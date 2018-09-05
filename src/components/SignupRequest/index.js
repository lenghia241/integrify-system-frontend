import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './SignUpRequest.css';

const SignUpRequest = ({ firstName, lastName, email }) => (
  <div className="card-panel hoverable">
    <p className="bold">{firstName} </p>
    <p>{lastName}</p>
    <p>{email}</p>
    <select id="role" name="role" defaultValue="Student">
      <option value="student">Student</option>
      <option value="guest">Guest</option>
      <option value="teacher">Teacher</option>
    </select>
    <select id="batch" name="batch" disabled="true">
      <option value="batch1">Batch 1</option>
      <option value="batch2">Batch 2</option>
      <option value="batch3">Batch 3</option>
    </select>
    <Button label="Accept" />
    <Button label="Decline" />
  </div>
);
SignUpRequest.propTypes = {
  // handleAccept: PropTypes.func.isRequired,
  // handleDecline: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default SignUpRequest;
