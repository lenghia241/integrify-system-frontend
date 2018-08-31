import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut as logOutAction } from '../store/actions';

import { getAuth } from '../store/reducers';

import AsideComponent from '../components/Aside';

const Aside = ({ user, logOut }) => <AsideComponent user={user} logOut={logOut} />;

Aside.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  user: getAuth(state).user,
});

export default connect(
  mapStateToProps,
  {
    logOut: logOutAction,
  },
)(Aside);
