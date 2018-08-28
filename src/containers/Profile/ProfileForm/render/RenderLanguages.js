import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from './RenderField';


const renderLanguages = ({ fields, meta: { error } }) => (
  <ul>
    <li className="btn-add">
      <button type="button" onClick={() => fields.push()}>
        Add Language
      </button>
    </li>
    {fields.map((language, index) => (
      <li key={`${index + 1}`}>
        <button type="button" onClick={() => fields.remove(index)} >Remove</button>
        <Field name={language} type="text" component={renderField} label={`Language #${index + 1}`} />
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
