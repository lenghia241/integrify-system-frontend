import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import AssignmentFormStyle from './AssignmentFormStyle.css';

const validate = (values) => {
  const errors = {};

  if (!values.assignment) {
    errors.assignment = 'Required';
  } else if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/i.test(values.assignment)) {
    errors.assignment = 'Invalid assignment name';
  }

  if (!values.github) {
    errors.github = 'Required';
  } else if (
    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()\\+,;=.]+$/i.test(values.github)
  ) {
    errors.github = 'Invalid github Link';
  }

  if (!values.status) {
    errors.status = 'Required';
  }

  if (!values.teacher) {
    errors.teacher = 'Required';
  } else if (!/^[a-zA-Z\s]+$/i.test(values.teacher)) {
    errors.teacher = 'Invalid name';
  }

  return errors;
};

const AddAssignmentForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting,
  } = props;

  const renderField = ({
    input, label, htmlFor, type, meta: { touched, error },
  }) => (
    <div>
      <label htmlFor={htmlFor}>
        {label}
        <input id={htmlFor} {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </label>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="AddAssignmentForm">
      <h2 className="heading">Add Assignment Form</h2>

      <div>
        <div>
          <Field name="assignment" component={renderField} type="text" label="Assignment" />
        </div>
      </div>

      <div>
        <div>
          <Field name="github" component={renderField} type="text" label="Github" />
        </div>
      </div>

      <div>
        <div>
          <Field
            name="status"
            id="status"
            component={renderField}
            type="checkbox"
            label="Status"
            style={{ opacity: 1, pointerEvents: 'auto' }}
          />
        </div>
      </div>

      <br />

      <div>
        <div>
          <Field name="teacher" component={renderField} type="text" label="Teacher" />
        </div>
      </div>

      <div className="button-class">
        <button type="submit" disabled={pristine || submitting} className="button">
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="button">
          Clear Values
        </button>
      </div>
    </form>
  );
};

AddAssignmentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};
export default reduxForm({
  form: 'assignment', // a unique identifier for this form
  AssignmentFormStyle, // css for the form
  validate, // validation function
})(AddAssignmentForm);
