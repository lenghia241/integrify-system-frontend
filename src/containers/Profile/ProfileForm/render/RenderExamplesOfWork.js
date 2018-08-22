import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from './RenderField';


const renderExamplesOfWork = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Examples of Work
      </button>
    </li>
    {fields.map((work, index) => (
      <li key={`${index + 1}`}>
        <button type="button" title="Remove Hobby" onClick={() => fields.remove(index)} />
        <Field name={`${work}.title`} type="text" component={renderField} label={`Title #${index + 1}`} />
        <Field name={`${work}.github`} type="text" component={renderField} label={`Github link #${index + 1}`} />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

renderExamplesOfWork.propTypes = {
  fields: PropTypes.shape({}),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

renderExamplesOfWork.defaultProps = {
  fields: {},
  meta: {},
};

export default renderExamplesOfWork;
