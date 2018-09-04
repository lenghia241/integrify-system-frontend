import React from 'react';
import './SignupRequests.css';
import { connect } from 'react-redux';
// import { getRequests as getRequestsAction } from '../../store/actions/index';
import EachRequest from './EachRequest';

class SignupRequests extends React.Component {
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
        <ul>
          <EachRequest />
          {/* {signupRequests.map(users => (
            <EachRequest />
          ))} */}
        </ul>
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
