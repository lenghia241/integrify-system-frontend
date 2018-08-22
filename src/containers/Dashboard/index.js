import React from 'react';
import StudySync from './components/StudySync';
import EventPanel from './components/EventPanel';
import Assignments from './Assignment/allAssignments';

const Dashboard = () => (
    <div className="row">
      <StudySync />
      <Assignments />
      <EventPanel />
    </div>
);

export default Dashboard;
