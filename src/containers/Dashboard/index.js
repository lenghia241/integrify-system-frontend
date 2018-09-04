import React from 'react';

import './Dashboard.css';

import StudySync from '../../components/Dashboard/StudySync';
import EventPanel from '../../components/Dashboard/EventPanel';
import Assignments from '../../components/Dashboard/Assignment';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';
import PageTemplate from '../../components/PageTemplate';

const Dashboard = () => {
  const DashboardComponents = [
    { heading: 'Study-Sync/Lectures', componentBody: <StudySync />, link: '/studySync' },
    { heading: 'Event Panel', componentBody: <EventPanel />, link: '/eventPanel' },
    { heading: 'Assignments', componentBody: <Assignments /> },
    { heading: 'Notification ', componentBody: <div>Notification</div> },
  ];
  const renderComponents = DashboardComponents.map(component => (
    <DashboardComponent
      heading={component.heading}
      key={DashboardComponents.indexOf(component)}
      link={component.link}>
      {component.componentBody}
    </DashboardComponent>
  ));
  return (
    <div className="Dashboard-header">
      <PageTemplate heading="Dashboard">
        <div className="Dashboard">{renderComponents}</div>
      </PageTemplate>
    </div>
  );
};

export default Dashboard;
