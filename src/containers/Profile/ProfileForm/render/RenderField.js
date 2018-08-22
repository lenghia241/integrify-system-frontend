import React from 'react';

const renderField = ({
  input, label, htmlFor, type, meta: { touched, error },
}) => (
  <div>
    <label htmlFor={htmlFor}>
      {label}
      <input id={htmlFor} {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </label>
  </div>
);

export default renderField;
