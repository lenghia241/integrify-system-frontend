import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from './RenderField';


const renderWorkExperience = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Work Experience
      </button>
    </li>
    {fields.map((work, index) => (
      <li key={`${index + 1}`}>
        <button type="button" onClick={() => fields.remove(index)} >Remove</button>
        <Field name={`${work}.title`} type="text" component={renderField} label={`Title #${index + 1}`} />
        <Field name={`${work}.company`} type="text" component={renderField} label={`Company #${index + 1}`} />
        <Field name={`${work}.location`} type="text" component={renderField} label={`Location #${index + 1}`} />
        <Field name={`${work}.from`} type="date" component={renderField} label={`From #${index + 1}`} />
        <Field name={`${work}.to`} type="date" component={renderField} label={`To #${index + 1}`} />
        <Field name={`${work}.descriptopn`} type="text" component={renderField} label={`Descriptopn #${index + 1}`} />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

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
