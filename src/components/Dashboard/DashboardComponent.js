import React from 'react';
import PropTypes from 'prop-types';
import './DashboardComponent.css';
import { Link } from 'react-router-dom';

const DashboardComponent = ({ heading, children, link }) => (
  <div className="dashboard-component z-depth-1">
      <div className="dashboard-component-footer">
      <h5 className="white-text">{heading}</h5>
      <Link to={`${link}`}>
        <i className="small material-icons waves-effect waves-orange orange-text">zoom_out_map</i>
      </Link>
    </div>
    <div className="dashboard-component-body">{children}</div>
  </div>
);

DashboardComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  link: PropTypes.string,
};
DashboardComponent.defaultProps = {
  link: '',
};

export default DashboardComponent;
