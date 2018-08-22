import React from 'react';
import PropTypes from 'prop-types';
import './DashboardComponent.css';

const DashboardComponent = ({ heading, children }) => (
  <div className="dashboard-component z-depth-1">
    <div className="dashboard-component-header">
      <h5>{heading}</h5>
      <i className="small material-icons waves-effect waves-orange">zoom_out_map</i>
    </div>
    <div className="dashboard-component-body">{children}</div>
  </div>
);

DashboardComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default DashboardComponent;
