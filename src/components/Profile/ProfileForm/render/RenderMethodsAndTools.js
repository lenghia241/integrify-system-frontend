import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from '../../../renderField';

const renderMethodsAndTools = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button
        type="button"
        className="btn-add waves-effect waves-light btn"
        onClick={() => fields.push()}
      >
        Add Methods and Tools
      </button>
    </li>
    {fields.map((tool, index) => (
      <li key={`${tool}`}>
        <button
          type="button"
          className="btn-add waves-effect waves-light red btn"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <Field name={tool} type="text" component={renderField} label={`Tool #${index + 1}`} />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

renderMethodsAndTools.propTypes = {
  fields: PropTypes.shape({}),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

renderMethodsAndTools.defaultProps = {
  fields: {},
  meta: {},
};

export default renderMethodsAndTools;
