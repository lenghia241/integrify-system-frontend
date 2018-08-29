import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from './RenderField';

const renderLanguages = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button
        type="button"
        className="btn-add waves-effect waves-light btn"
        onClick={() => fields.push()}
      >
        Add Language
      </button>
    </li>
    {fields.map((language, index) => (
      <li key={`${index + 1}`}>
        <button
          type="button"
          className="btn-add waves-effect waves-light red btn"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <Field
          name={language}
          type="text"
          component={renderField}
          label={`Language #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

renderLanguages.propTypes = {
  fields: PropTypes.shape({}),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

renderLanguages.defaultProps = {
  fields: {},
  meta: {},
};

export default renderLanguages;
