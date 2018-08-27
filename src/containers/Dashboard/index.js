import React from 'react';
import StudySync from './components/StudySync';
import EventPanel from './components/EventPanel';
import Assignments from './components/Assignment';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';
import PageTemplate from '../../components/PageTemplate';
import './Dashboard.css';

const Dashboard = () => {
  const DashboardComponents = [
    { heading: 'Study-Sync/Lectures', componentBody: <StudySync /> },
    { heading: 'Event Panel', componentBody: <EventPanel /> },
    { heading: 'Assignments', componentBody: <Assignments /> },
    { heading: 'Notification ', componentBody: <div>Notification</div> },
  ];
  const renderComponents = DashboardComponents.map(component => (
    <DashboardComponent heading={component.heading} key={DashboardComponents.indexOf(component)}>
      {component.componentBody}
    </DashboardComponent>
  ));
  return (
    <div className="Dash">
      <PageTemplate heading="Dashboard">
        <div className="Dashboard">{renderComponents}</div>
      </PageTemplate>
    </div>
  );
};

export default Dashboard;
