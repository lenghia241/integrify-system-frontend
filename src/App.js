import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import Attendance from './containers/Attendance';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Aside from './containers/Aside';

import * as actions from './store/actions/index';
import { getAuth } from './store/reducers';

class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    const { user } = this.props;

    const routes = user ? (
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

    const aside = user ? <Aside className="App-aside" /> : null;

    return (
      <div className="App">
        {aside}
        <div className="App-body">{routes}</div>
      </div>
    );
  }
}

App.defaultProps = {
  user: null,
};

App.propTypes = {
  user: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.bool]),
  fetchUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: getAuth(state).user,
});

export default connect(
  mapStateToProps,
  actions,
)(App);
