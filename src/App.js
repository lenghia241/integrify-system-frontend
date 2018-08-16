import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Attendance from './containers/Attendance';
import Profile from './containers/Profile';
import Landing from './containers/Landing';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/attendance" component={Attendance}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/" component={Landing}/>
      </Switch>
    </div>
  );
};

export default App;
