import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Login from './Login';

const Landing = ({ auth }) => (auth ? <Dashboard /> : <Login />);

Landing.propTypes = {
  auth: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
