import React, { Component } from 'react';
import './Aside.css';
import { NavLink } from 'react-router-dom';

class Aside extends Component {
  state = {
    loggedIn: true,
  };

  onChange = (event) => {
    if (event.target.checked) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  };

  render() {
    const { loggedIn } = this.state;
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
              <NavLink to="/profile" activeClassName="active" className="waves-effect waves-orange  user-photo">
                <img
                  className="circle"
                  alt="user"
                  src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
                />
              </NavLink>

              <div className="user-name">Hello, John Doe! </div>
              <div className="user-status">
                <div className="switch">
                  <label htmlFor="Login-switch">
                    <div className="user-check-status">
                      {loggedIn ? (
                        <div className="teal-text">Logging In</div>
                      ) : (
                        <div className="red-text">Logging Out</div>
                      )}
                    </div>
                    <div className="lever-radio">
                      <input
                        type="checkbox"
                        id="Login-switch"
                        onChange={event => this.onChange(event)}
                      />
                      <span className="lever" />
                    </div>
                  </label>
                </div>
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
          <NavLink to="/logout" className="waves-effect waves-orange">
            Logout
            <i className="material-icons">power_settings_new</i>
          </NavLink>
        </li>
      </React.Fragment>
    );
  }
}

export default Aside;
