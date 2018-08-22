import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from './RenderField';


const renderEducation = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Education
      </button>
    </li>
    {fields.map((education, index) => (
      <li key={`${index + 1}`}>
        <button type="button" onClick={() => fields.remove(index)} >Remove</button>
        <Field name={`${education}.school`} type="text" component={renderField} label={`School #${index + 1}`} />
        <Field name={`${education}.degree`} type="text" component={renderField} label={`Degree #${index + 1}`} />
        <Field name={`${education}.fieldofstudy`} type="text" component={renderField} label={`Field of study #${index + 1}`} />
        <Field name={`${education}.from`} type="date" component={renderField} label={`From #${index + 1}`} />
        <Field name={`${education}.to`} type="date" component={renderField} label={`To #${index + 1}`} />
        <Field name={`${education}.descriptopn`} type="text" component={renderField} label={`Descriptopn #${index + 1}`} />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

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
