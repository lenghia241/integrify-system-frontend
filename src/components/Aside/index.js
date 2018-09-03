import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'materialize-css/js/sidenav';
import 'materialize-css/js/collapsible';

import './Aside.css';

import { navigationItems } from './navigationItems';
import { Navigation } from './Navigation';
import AttendanceButton from '../AttendanceButton';

class Aside extends Component {
  componentDidMount = () => {
    const elem = document.querySelector('.sidenav');

    const elems = document.querySelectorAll('.collapsible');
    this.instances = window.M.Collapsible.init(elems, {});

    this.instance = window.M.Sidenav.init(elem, {
      inDuration: 350,
      outDuration: 350,
      edge: 'left',
    });
  };

  render() {
    const { user, logOut } = this.props;

    return (
      <section className="nav-wrapper">
        <div data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons z-depth-1-half">menu</i>
        </div>
        <div id="slide-out" className="sidenav sidenav-fixed">
          <div className="background">
            <img
              src="https://s3.eu-west-2.amazonaws.com/integrify-system-assets/logo-white.png"
              alt="integrify-logo"
              className="logo"
            />
          </div>
          <div className="user-info center">
            <i className="material-icons right">notifications</i>
            <Link to="/profile" className="user-photo">
              <img
                className="circle"
                alt="user"
                src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
              />
            </Link>
            <div className="user-name">Hello, {user.firstName}! </div>
          </div>
          <div className="user-status">
            <AttendanceButton />
          </div>
          <Navigation navigationItems={navigationItems} className="collapsible" />
          <Link to="/" className="logout" onClick={logOut}>
            <i className="material-icons">power_settings_new</i>
            <span>Logout</span>
          </Link>
        </div>
      </section>
    );
  }
}

Aside.propTypes = {
  user: PropTypes.shape({}).isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Aside;
