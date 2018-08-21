import React, { Component } from 'react';
import './Aside.css';

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
    console.log(loggedIn);
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
              <img
                className="circle user-photo"
                alt="user"
                src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
              />
              <div className="user-name">Hello, John Doe! </div>
              <div className="user-status">
                <div className="switch">
                  <label htmlFor="Login-switch">
                    <div className="user-check-status">
                      {loggedIn ? 'Logging In' : 'Logging out'}
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
          <a href="#!" className="waves-effect waves-teal">
            Dashboard
            <i className="material-icons">dashboard</i>
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </React.Fragment>
    );
  }
}

export default Aside;
