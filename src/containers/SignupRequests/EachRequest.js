import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const EachRequest = ({
  firstName, lastName, email, handleAccept, handleDecline,
}) => (
  <div className="card-panel hoverable">
    <span className="bold">{firstName} </span>
    <span>{lastName}</span>
    <span>{email}</span>
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
    <Button label="Accept" onClick={handleAccept} />
    <Button label="Decline" onClick={handleDecline} />
  </div>
);
EachRequest.propTypes = {
  handleAccept: PropTypes.func.isRequired,
  handleDecline: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default EachRequest;
