import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AttendanceButton from '../AttendanceButton';

import './Aside.css';
import M from 'materialize-css';

class Aside extends Component {
  componentDidMount = () => {
    const elem = document.querySelector('.sidenav');
    this.instance = M.Sidenav.init(elem, {
      inDuration: 350,
      outDuration: 350,
      edge: 'left'
    });
  }
  render() {
    const { auth, logOut } = this.props;
    const links = [
      { to: '/', linkName: 'Dashboard', iconsClassName: 'dashboard' },
      { to: '/profile', linkName: 'Profile', iconsClassName: 'account_box' },
      { to: '/attendance', linkName: 'Attendance', iconsClassName: 'today' }
    ];
    const renderLinks = links.map(link => (
      <li key={links.indexOf(link)}>
        <NavLink to={link.to} activeClassName="active" className="waves-effect waves-orange">
          <span>{link.linkName}</span>
          <i id="icons" className="material-icons">
            {link.iconsClassName}
          </i>
        </NavLink>
      </li>
    ));
    return (
      <div className="nav-wrapper">
        <a data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <div id="slide-out" className="sidenav sidenav-fixed">
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
            <AttendanceButton />
          </div>
          <ul>{renderLinks}</ul>
          <div className="logout">
            <div className="divider" />
            <Link to="/" className="waves-effect waves-orange" onClick={logOut}>
              <i className="material-icons">power_settings_new</i>
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };
}

Aside.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Aside;
