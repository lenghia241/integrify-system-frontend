import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
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
import StudySyncDetail from './components/Dashboard/StudySync/StudySyncDetail';
import AddStudySync from './components/Dashboard/StudySync/AddStudySync';
import EventPanelDetailed from './components/Dashboard/EventPanel/EventPanelDetailed';
import ForgotPassword from './containers/ForgotPassword';
import ConfirmPassword from './containers/ConfirmPassword';

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props;
    checkUser();
  }

  render() {
    const { user } = this.props;

    const routes = user ? (
      <Switch>
        <Route exact path="/attendance" component={Attendance} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/eventPanel" component={EventPanelDetailed} />
        <Route exact path="/studySync" component={StudySyncDetail} />
        <Route exact path="/studySync/add" component={AddStudySync} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/confirm-password" component={ConfirmPassword} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/" component={Login} />
      </Switch>
    );

    const aside = user ? <Aside className="App-aside" /> : null;

    return (
      <div className="App">
        {aside}
        <div className={user ? 'App-body' : 'App-body login'}>{routes}</div>
      </div>
    );
  }
}

App.defaultProps = {
  user: null,
};

App.propTypes = {
  user: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.bool]),
  checkUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: getAuth(state).user,
});

export default withRouter(
  connect(
    mapStateToProps,
    actions,
  )(App),
);
