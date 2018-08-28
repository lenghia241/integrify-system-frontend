import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from './RenderField';

const renderSkills = ({ fields, meta: { error } }) => (
  <ul>
    <li className="btn-add">
      <button type="button" onClick={() => fields.push()}>
        Add Skill
      </button>
    </li>
    {fields.map((skill, index) => (
      <li key={`${index + 1}`}>
        <button type="button" onClick={() => fields.remove(index)}>
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
