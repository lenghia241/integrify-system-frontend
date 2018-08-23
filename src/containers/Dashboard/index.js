import React from 'react';
import StudySync from './components/StudySync';
import EventPanel from './components/EventPanel';
import Assignments from './components/Assignment';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';
import PageTemplate from '../../components/PageTemplate';
import './dashboard.css';


const Dashboard = () => {
  const DashboardComponents = [
    { heading: 'Test 1', componentBody: <StudySync /> },
    { heading: 'Test 2', componentBody: <EventPanel /> },
    { heading: 'Test 3', componentBody: <Assignments /> },
    { heading: 'Test 4', componentBody: <div>Component Body</div> },
  ];
  const renderComponents = DashboardComponents.map(({ heading, componentBody }) => (
    <DashboardComponent heading={heading}>{componentBody}</DashboardComponent>
  ));
  return (
    <PageTemplate heading="Dashboard">
      <div className="Dashboard">{renderComponents}</div>
    </PageTemplate>
  );
};

export default Dashboard;
