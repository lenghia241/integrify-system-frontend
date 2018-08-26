import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Aside.css';
import AsideSwitch from './AsideSwitch';

const Aside = ({ auth, onChange, logOut }) => {
  const links = [
    { to: '/', linkName: 'Dashboard', iconsClassName: 'dashboard' },
    { to: '/profile', linkName: 'Profile', iconsClassName: 'account_box' },
    { to: '/attendance', linkName: 'Attendance', iconsClassName: 'today' },
  ];
  const renderLinks = links.map(link => (
    <li key={links.indexOf(link)}>
      <NavLink to={link.to} activeClassName="active" className="waves-effect waves-orange">
        <span>{link.linkName}</span>
        <i className="material-icons">{link.iconsClassName}</i>
      </NavLink>
    </li>
  ));
  return (
    <ul className="sidenav sidenav-fixed">
      <li>
        <div className="background">
          <img
            src="https://s3.eu-west-2.amazonaws.com/integrify-system-assets/logo-white.png"
            alt="integrify-logo"
            className="logo"
          />
        </div>
        <div className="user-info center" href="#user">
          <i className="material-icons right">notifications</i>
          <Link to="/profile" className="user-photo">
            <img
              className="circle"
              alt="user"
              src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
            />
          </Link>
          <div className="user-name">Hello, {auth.firstName}! </div>
        </div>
        <div className="user-status">
          <AsideSwitch present={auth.present} onChange={onChange} />
        </div>
      </li>
      {renderLinks}
      <li className="logout">
        <div className="divider"/>
        <Link to="/" className="waves-effect waves-blue" onClick={logOut}>
          <span>Logout</span>
          <i className="material-icons">directions_run</i>
        </Link>
      </li>
    </ul>
  );
};

Aside.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  logOut: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Aside;
