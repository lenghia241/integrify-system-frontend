import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageTemplate from '../../components/PageTemplate';
import SignUpRequest from '../../components/SignUpRequests/SignUpRequest';
import { getRequestList as getRequestListAction } from '../../store/actions';
import { getSignUpList } from '../../store/reducers';

class SignUpRequests extends Component {
  componentDidMount = () => {
    const { getRequestList } = this.props;
    getRequestList();
  };

  render() {
    const renderSignUpRequest = signUpList.map(({ name, email, id }) => (
      <SignUpRequest key={id} name={name} email={email} />
    ));
    return (
      <PageTemplate heading="Sign-up requests">
        <div className="SignUpRequest">{renderSignUpRequest}</div>
      </PageTemplate>
    );
  }
}

SignUpRequests.propTypes = {};

const mapStateToProps = state => ({
  signUpList: getSignUpList(state),
});

export default connect(
  mapStateToProps,
  { getRequestList: getRequestListAction },
)(SignUpRequests);
