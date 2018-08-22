import React from 'react';
import StudySync from './components/StudySync';
import EventPanel from './components/EventPanel';
import Assignments from './components/Assignment';

const Dashboard = () => (
    <div className="row">
      <StudySync />
      <EventPanel />
      <Assignments />
    </div>
);

export default Dashboard;
