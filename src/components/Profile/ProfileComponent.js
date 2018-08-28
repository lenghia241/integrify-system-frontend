import React from 'react';
import PropTypes from 'prop-types';
import './ProfileComponent.css';

const ProfileComponent = ({ heading, children }) => (
  <div className="profile-component z-depth-1">
    <div className="profile-component-header">
      <h5>{heading}</h5>
      <i className="small material-icons waves-effect waves-orange">zoom_out_map</i>
    </div>
    <div className="profile-component-body">{children}</div>
  </div>
);

ProfileComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProfileComponent;
