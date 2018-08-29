import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import Attendance from './containers/Attendance';
import Profile from './containers/Profile';
// import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Aside from './containers/Aside';

import * as actions from './store/actions/index';
import { getAuth } from './store/reducers';

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props;
    checkUser();
  }

  render() {
    const { token } = this.props;

    const routes = token ? (
      <Switch>
        <Route exact path="/attendance" component={Attendance} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    );

    const aside = token ? <Aside className="App-aside" /> : null;

    return (
      <div className="App">
        {aside}
        <div className={token ? 'App-body' : 'App-body login'}>{routes}</div>
      </div>
    );
  }
}

App.defaultProps = {
  token: null,
};

App.propTypes = {
  token: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.bool]),
  checkUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  token: getAuth(state).token,
});

export default connect(
  mapStateToProps,
  actions,
)(App);
