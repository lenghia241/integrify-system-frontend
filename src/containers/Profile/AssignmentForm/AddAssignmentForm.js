import React from 'react';
import { reduxForm, Field, propTypes as reduxFormPropTypes } from 'redux-form';
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
    !/^(https:\/\/)?(github\.com\/)([a-zA-Z0-9_-]){1,}$/i.test(values.github)
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
    handleSubmit, pristine, reset, submitting, invalid,
  } = props;

  const renderField = ({
    input, label, placeholder, htmlFor, type, meta: { touched, error },
  }) => (
    <div>
      <label htmlFor={htmlFor}>
        {label}
        <input id={htmlFor} {...input} placeholder={placeholder} type={type} />
        {touched && error && <span>{error}</span>}
      </label>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="AddAssignmentForm">
      <h2 className="heading">Add Assignment Form</h2>
      <div>
        <div>
          <Field name="assignment" component={renderField} type="text" placeholder="Assignment" />
        </div>
      </div>
      <div>
        <div>
          <Field name="github" component={renderField} type="text" placeholder="Github" />
        </div>
      </div>
      <br />
      <div>
        <div>
          <Field name="teacher" component={renderField} type="text" placeholder="Teacher" />
        </div>
      </div>
      <div className="button-class">
        <button type="submit" name="action" disabled={pristine || submitting || invalid} className="waves-effect waves-light btn orange">
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="waves-effect waves-light btn orange">
          Clear Values
        </button>
      </div>
    </form>
  );
};

AddAssignmentForm.propTypes = {
  ...reduxFormPropTypes,
};

export default reduxForm({
  form: 'assignment', // a unique identifier for this form
  AssignmentFormStyle, // css for the form
  validate, // validation function
})(AddAssignmentForm);
