import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Attendance from './containers/Attendance';
import Profile from './containers/Profile';
import Dashboard from './containers/Dashboard';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/attendance" component={Attendance}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/" component={Dashboard}/>
      </Switch>
    </div>
  );
};

export default App;
