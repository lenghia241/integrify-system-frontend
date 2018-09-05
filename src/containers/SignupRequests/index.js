import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSignUpRequestsAction } from '../../store/actions';
import SignUpRequest from '../../components/SignUpRequest';
import { getSignUpRequests } from '../../store/reducers';

class SignUpRequests extends Component {
  componentDidMount = () => {
    const { getSignUpRequestsAction } = this.props;
    getSignUpRequestsAction();
  };

  render() {
    const { signUpRequests } = this.props;

    const renderSignUpRequests = signUpRequests.map(({
      firstName, lastName, email, id,
    }) => (
      <SignUpRequest key={id} firstName={firstName} lastName={lastName} email={email} />
    ));
    return (
      <div>
        <div>{renderSignUpRequests}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signUpRequests: getSignUpRequests(state),
});

export default connect(
  mapStateToProps,
  { getSignUpRequestsAction },
)(SignUpRequests);
