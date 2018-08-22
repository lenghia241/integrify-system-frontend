import React from 'react';
import ComponentTemplate from '../../components/dashboard/componentTemplate';
import HeaderTemplate from '../../components/dashboard/headerTemplate';
import SearchBar from '../../components/dashboard/searchBar';

import './dashboard.css';

const Dashboard = () => (
  <div className="main-container">
    <div className="aside">Aside</div>
    <div className="dashboard">
      <HeaderTemplate header="Dashboard" />
      <SearchBar />
      <ComponentTemplate />
      <ComponentTemplate />
      <ComponentTemplate />
      <ComponentTemplate />
    </div>
  </div>
);

export default Dashboard;
