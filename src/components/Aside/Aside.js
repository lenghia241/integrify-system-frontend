import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AsideSwitch from './AsideSwitch';

const Aside = ({ auth, onChange }) => {
  const links = [
    { to: '/', linkName: 'Dashboard', iconsClassName: 'dashboard' },
    { to: '/profile', linkName: 'Profile', iconsClassName: 'account_box' },
    { to: '/attendance', linkName: 'Attendance', iconsClassName: 'today' },
  ];
  const renderLinks = links.map(link => (
    <li key={links.indexOf(link)}>
      <NavLink to={link.to} className="waves-effect waves-orange">
        {link.linkName}
        <i className="material-icons">{link.iconsClassName}</i>
      </NavLink>
    </li>
  ));
  return (
    <React.Fragment>
      <li>
        <div className="user-view">
          <div className="background">
            <img
              src="https://s3.eu-west-2.amazonaws.com/integrify-system-assets/logo-black.png"
              alt="integrify-logo"
            />
          </div>
          <div className="user-info" href="#user">
            <NavLink to="/profile" activeClassName="active" className="user-photo">
              <img
                className="circle"
                alt="user"
                src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
              />
            </NavLink>

            <div className="user-name">Hello, {auth.firstName}! </div>
            <div className="user-status">
              <AsideSwitch present={auth.present} onChange={onChange} />
            </div>
          </div>
        </div>
      </li>
      {renderLinks}
      <li className="logout">
        <div className="divider" />
        <NavLink to="/api/user/logout" className="waves-effect waves-orange">
          Logout
          <i className="material-icons">power_settings_new</i>
        </NavLink>
      </li>
    </React.Fragment>
  );
};

Aside.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Aside;
