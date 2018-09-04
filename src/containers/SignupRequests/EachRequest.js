import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import { reduxForm, Field } from 'redux-form';

class EachRequest extends React.Component{
render(){
  componentDidMount(){
    this.props.getRequests();
  };
  handleAccept = () => {
    this.props.acceptRequest();
  };
  handleDecline = () => {
    this.props.deleteRequest();
  };
return(
  <div className="card-panel hoverable">
    <span className="bold">{user.firstName} </span>
    <span>{user.lastName}</span>
    <span>{user.email}</span>
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
    <Button label="Accept" onClick={this.props.handleAccept} />
    <Button label="Decline" onClick={this.props.handleDecline} />
  </div>
)
}


EachRequest.propTypes = {
  request: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default EachRequest;
