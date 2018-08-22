import React from 'react';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';
import PageTemplate from '../../components/PageTemplate';
import './Dashboard.css';

const Dashboard = () => {
  const DashboardComponents = [
    { heading: 'Test 1', componentBody: <div>Component Body</div> },
    { heading: 'Test 2', componentBody: <div>Component Body</div> },
    { heading: 'Test 3', componentBody: <div>Component Body</div> },
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
