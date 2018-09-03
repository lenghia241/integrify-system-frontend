import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from '../../../renderField';

const renderEducation = ({ fields, meta: { error } }) => {
  const workExperienceFields = [
    { field: 'school', label: 'School', type: 'text' },
    { field: 'degree', label: 'Degree', type: 'text' },
    { field: 'fieldofstudy', label: 'Field of study', type: 'text' },
    { field: 'from', label: 'From', type: 'date' },
    { field: 'to', label: 'To', type: 'date' },
    { field: 'description', label: 'description', type: 'text' },
  ];
  const renderEducationFields = fieldIndex => workExperienceFields.map(education => (
      <li key={`${education.field}`}>
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
          <div key={education} className="education">
            <button
              type="button"
              className="btn-add waves-effect waves-light red btn"
              onClick={() => fields.remove(fieldIndex)}
            >
              Remove
            </button>
            {renderEducationFields(fieldIndex)}
          </div>
        ))}
        <button
          className="btn-add waves-effect waves-light btn"
          type="button"
          onClick={() => fields.push()}
        >
          Add Education
        </button>
        {error && <li className="error">{error}</li>}
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
