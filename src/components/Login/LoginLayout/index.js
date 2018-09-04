import React from 'react';
import PropTypes from 'prop-types';

const LoginLayout = ({ children }) => (
  <div className="background login valign-wrapper">
    <div className="section container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card card-wrapper">{children}</div>
        </div>
      </div>
    </div>
  </div>
);

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
