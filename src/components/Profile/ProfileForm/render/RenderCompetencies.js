import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from '../../../renderField';

const renderCompetencies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button
        className="btn-add waves-effect waves-light btn"
        type="button"
        onClick={() => fields.push()}
      >
        Add Competence
      </button>
    </li>
    {fields.map((competence, index) => (
      <li key={`${competence}`}>
        <button
          type="button"
          className="btn-add waves-effect waves-light red btn"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <Field
          name={competence}
          type="text"
          component={renderField}
          label={`Competence #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

renderCompetencies.propTypes = {
  fields: PropTypes.shape({}),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

renderCompetencies.defaultProps = {
  fields: {},
  meta: {},
};

export default renderCompetencies;
