import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  type, disabled, onClick, className, label,
}) => (
  <button type={type} disabled={disabled} onClick={onClick} className={`Button ${className}`}>
    {label}
  </button>
);

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: '',
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
