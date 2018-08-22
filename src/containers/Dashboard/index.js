import React from 'react';
import ComponentTemplate from '../../components/dashboard/template';
import './dashboard.css';

const Dashboard = () => (
  <div className="main-container">
    <div className="aside">Aside</div>
    <div className="dashboard">
      <h1>Dashboard</h1>
      <input type="text" placeholder="search" />
      <ComponentTemplate />
      <ComponentTemplate />
      <ComponentTemplate />
      <ComponentTemplate />
    </div>
  </div>
);

export default Dashboard;
