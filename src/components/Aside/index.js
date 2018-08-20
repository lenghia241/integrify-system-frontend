import React from 'react';
import './Aside.css';

const Aside = () => (
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
            className="circle"
            alt="user"
            src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
          />
        </div>
      </div>
    </li>
    <li>
      <a href="#!">
        <i className="material-icons">cloud</i>
        First Link With Icon
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

export default Aside;
