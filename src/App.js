import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Attendance from './containers/Attendance';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

const App = ({ auth }) => {
  const routes = auth ? (
    <Switch>
      <Route exact path="/attendance" component={Attendance} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );

  return <div>{routes}</div>;
};

App.propTypes = {
  auth: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);