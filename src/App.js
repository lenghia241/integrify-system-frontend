import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Aside from './components/Aside';
import Attendance from './containers/Attendance';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

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

    return (
      <React.Fragment>
        <Aside />
        {routes}
      </React.Fragment>
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
