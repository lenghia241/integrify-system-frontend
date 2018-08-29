import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import renderField from '../../../../utils/RenderField';

const renderExamplesOfWork = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button
        type="button"
        className="btn-add waves-effect waves-light btn"
        onClick={() => fields.push()}
      >
        Add Examples of Work
      </button>
    </li>
    {fields.map((work, index) => (
      <li key={`${index + 1}`}>
        <button
          type="button"
          className="btn-add waves-effect waves-light red btn"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
        <Field
          name={`${work}.title`}
          type="text"
          component={renderField}
          label={`Title #${index + 1}`}
        />
        <Field
          name={`${work}.github`}
          type="text"
          component={renderField}
          label={`Github link #${index + 1}`}
        />
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
