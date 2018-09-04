import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getRequests as getRequestsAction } from '../../store/actions/index';
import SignupRequest from '../../components/SignupRequest';

class SignupRequests extends Component {
  componentDidMount() {
    this.getRequests();
  }

  handleAccept = () => {
    this.acceptRequest();
  };

  handleDecline = () => {
    this.deleteRequest();
  };

  render() {
    return (
      <div>
        <SignupRequest />
      </div>
    );
  }
}
const mapStateToProps = state => ({ requests: state });
const mapDispatchToProps = dispatch => ({
  getRequests: requests => dispatch({
    type: 'GET_REQUESTS',
    requests,
  }),
  acceptRequest: requests => dispatch({
    type: 'ACCEPT_REQUEST',
    requests,
  }),
  deleteRequest: requests => dispatch({
    type: 'DELETE_REQUEST',
    requests,
  }),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupRequests);
