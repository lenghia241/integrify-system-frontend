import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from './RenderField';

const renderEducation = ({ fields, meta: { error } }) => {
  const workExperienceFields = [
    { field: 'school', label: 'School', type: 'text' },
    { field: 'degree', label: 'Degree', type: 'text' },
    { field: 'fieldofstudy', label: 'Field of study', type: 'text' },
    { field: 'from', label: 'From', type: 'date' },
    { field: 'to', label: 'To', type: 'date' },
    { field: 'description', label: 'description', type: 'text' },
  ];
  const renderEducationFields = fieldIndex => workExperienceFields.map((education, index) => (
      <li key={`${index + 1 - 1}`}>
        <Field
          name={`education[${fieldIndex}].${education.field}`}
          type={education.type}
          component={renderField}
          label={`${education.label} #${fieldIndex + 1}`}
        />
        {error && <li className="error">{error}</li>}
      </li>
  ));
  return (
    <ul>
      <div>
        {fields.map((education, fieldIndex) => (
          <div key={`${fieldIndex + 1}`} className="education">
            <button type="button" onClick={() => fields.remove(fieldIndex)}>
              Remove
            </button>
            {renderEducationFields(fieldIndex)}
          </div>
        ))}
        <button className="btn-add" type="button" onClick={() => fields.push()}>
          Add Education
        </button>
      </div>
    </ul>
  );
};
renderEducation.propTypes = {
  fields: PropTypes.shape({}),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

renderEducation.defaultProps = {
  fields: {},
  meta: {},
};

export default renderEducation;
