import React from 'react';

const renderField = ({
  input, label, placeholder, htmlFor, type, meta: { touched, error },
}) => (
  <div>
    <label htmlFor={htmlFor}>
      {label}
      <input
        className="inputField validate"
        id={htmlFor}
        placeholder = {placeholder}
        {...input}
        type={type}
      />
      {touched && error && <span className="error">{error}</span>}
    </label>
  </div>
);

export default renderField;
