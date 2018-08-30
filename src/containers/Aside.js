import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser as fetchUserAction, logOut as logOutAction } from '../store/actions';

import { getAuth } from '../store/reducers';

import AsideComponent from '../components/Aside';

class Aside extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    const { auth, logOut } = this.props;
    return <AsideComponent auth={auth} logOut={logOut} />;
  }
}
Aside.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

export default connect(
  mapStateToProps,
  {
    fetchUser: fetchUserAction,
    logOut: logOutAction,
  },
)(Aside);
