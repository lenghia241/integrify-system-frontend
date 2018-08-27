import React from 'react';
import PropTypes from 'prop-types';

const AsideSwitch = ({ present, onChange }) => (
  <div className="switch">
    <label htmlFor="Login-switch">
      <div className="lever-radio">
        <input type="checkbox" id="Login-switch" onChange={event => onChange(event)} />
        <span className="lever" />
      </div>
      <div className="user-check-status">
        {present ? (
          <div className="teal-text">Check In</div>
        ) : (
          <div className="red-text">Check Out</div>
        )}
      </div>
    </label>
  </div>
);

AsideSwitch.propTypes = {
  present: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
AsideSwitch.defaultProps = {
  present: false,
};

export default AsideSwitch;
