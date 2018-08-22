import React from 'react';
import PropTypes from 'prop-types';

/* eslint jsx-a11y/label-has-for: 0 */
const LoginField = ({ input = {}, type, label, meta: { error, touched, active } }) => {
  let activeClass = '';

  if (input.value !== '') activeClass = 'active';
  else if (active) activeClass = 'active';
  else activeClass = '';


  return (
    <div className="input-field">
      <label htmlFor={input.name} className={activeClass}>
        {label}
      </label>
      <input {...input} type={type} name={input.name} />
      <div className="red-text">{touched && error}</div>
    </div>
  );
};

LoginField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    active: PropTypes.bool,
  }),
};

LoginField.defaultProps = {
  meta: {
    touched: false,
    error: '',
    active: false,
  },
};
export default LoginField;
