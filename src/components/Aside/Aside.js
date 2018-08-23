import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AsideSwitch from './AsideSwitch';

const Aside = ({ auth, onChange }) => (
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
    <li>
      <NavLink to="/" activeClassName="active" className="waves-effect waves-orange">
        Dashboard
        <i className="material-icons">dashboard</i>
      </NavLink>
    </li>
    <li>
      <NavLink to="/profile" activeClassName="active" className="waves-effect waves-orange">
        Profile
        <i className="material-icons">account_box</i>
      </NavLink>
    </li>
    <li>
      <NavLink to="/attendance" className="waves-effect waves-orange">
        Attendance
        <i className="material-icons">today</i>
      </NavLink>
    </li>
    <li className="logout">
      <div className="divider" />
      <NavLink to="/api/user/logout" className="waves-effect waves-orange">
        Logout
        <i className="material-icons">power_settings_new</i>
      </NavLink>
    </li>
  </React.Fragment>
);

Aside.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Aside;
