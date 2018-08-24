import React from 'react';
import StudySync from './components/StudySync';
import EventPanel from './components/EventPanel';
import Assignments from './components/Assignment';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';
import PageTemplate from '../../components/PageTemplate';
import './Dashboard.css';


const Dashboard = () => {
  const DashboardComponents = [
    { heading: 'Study Sync', componentBody: <StudySync /> },
    { heading: 'Event Panel', componentBody: <EventPanel /> },
    { heading: 'Assignments', componentBody: <Assignments /> },
    { heading: 'Notifications', componentBody: <div>Notifications</div> },
  ];
  const renderComponents = DashboardComponents.map(({ heading, componentBody }, i) => (
    <DashboardComponent heading={heading} key = {`${i + 1}${heading}`}>{componentBody}</DashboardComponent>
  ));
  return (
    <PageTemplate heading="Dashboard">
      <div className="Dashboard">{renderComponents}</div>
    </PageTemplate>
  );
};

export default Dashboard;
