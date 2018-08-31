import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from '../../../renderField';

const renderSkills = ({ fields, meta: { error } }) => (
  <ul>
    <li className="btn-add">
      <button type="button" className="waves-effect waves-light btn" onClick={() => fields.push()}>
        Add Skill
      </button>
    </li>
    {fields.map((skill, index) => (
      <li key={`${skill}`}>
        <button
          type="button"
          className="waves-effect waves-light red btn"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <Field name={skill} type="text" component={renderField} label={`Skill #${index + 1}`} />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

renderSkills.propTypes = {
  fields: PropTypes.shape({}),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

renderSkills.defaultProps = {
  fields: {},
  meta: {},
};

export default renderSkills;
