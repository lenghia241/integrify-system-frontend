import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ navigationItems, className }) => (
  <ul className={className}>
    {navigationItems.map(navigationLink => (
      <li key={navigationLink.label}>
        <NavLink
          to={navigationLink.to}
          activeClassName="active"
          className={navigationLink.className}
        >
          <i className="material-icons">{navigationLink.icon}</i>
          <span>{navigationLink.label}</span>
        </NavLink>
        {navigationLink.subNavigationItems && (
          <Navigation
            navigationItems={navigationLink.subNavigationItems}
            className="collapsible-body"
          />
        )}
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  navigationItems: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
};
export default Navigation;
