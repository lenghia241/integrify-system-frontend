import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from '../../../renderField';

const renderWorkExperience = ({ fields, meta: { error } }) => {
  const workExperienceFields = [
    { field: 'title', label: 'Title', type: 'text' },
    { field: 'company', label: 'company', type: 'text' },
    { field: 'location', label: 'location', type: 'text' },
    { field: 'from', label: 'from', type: 'date' },
    { field: 'to', label: 'to', type: 'date' },
    { field: 'description', label: 'description', type: 'text' },
  ];
  const renderworkExperienceFields = fieldIndex => workExperienceFields.map((work, index) => (
      <li key={`${work}`}>
        <Field
          name={`workexperience[${fieldIndex}].${work.field}`}
          type={work.type}
          component={renderField}
          label={`${work.label} #${fieldIndex + 1}`}
        />
        {error && <li className="error">{error}</li>}
      </li>
  ));
  return (
    <ul>
      <div>
        <button
          className="btn-add waves-effect waves-light btn"
          type="button"
          onClick={() => fields.push()}
        >
          Add Work Experience
        </button>
        {fields.map((work, fieldIndex) => (
          <div key={`${work}`}>
            <button
              type="button"
              className="btn-add waves-effect waves-light red btn"
              onClick={() => fields.remove(fieldIndex)}
            >
              Remove
            </button>
            {renderworkExperienceFields(fieldIndex)}
          </div>
        ))}
        {error && <li className="error">{error}</li>}
      </div>
    </ul>
  );
};
renderWorkExperience.propTypes = {
  fields: PropTypes.shape({}),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

renderWorkExperience.defaultProps = {
  fields: {},
  meta: {},
};

export default renderWorkExperience;
