import React from "react";

import { reduxForm, Field } from "redux-form";

import AssignmentFormStyle from "./AssignmentFormStyle.css";

const validate = values => {
  const errors = {};

  if (!values.assignment) {
    errors.assignment = "Required";
  }

  if (!values.github) {
    errors.github = "Required";
  }

  if (!values.status) {
    errors.status = "Required";
  }

  if (!values.teacher) {
    errors.teacher = "Required";
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    {" "}
    <div>
      {touched && (error && <span className="error">{error}</span>)}
      <input {...input} type={type} />{" "}
    </div>
  </div>
);

const AddAssignmentForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className="AddAssignmentForm">
      <h2 className="heading">Add Assignment Form</h2>

      <div>
        <label>Assignment</label>

        <div>
          <Field
            name="assignment"
            component={renderField}
            type="text"
            label="assignment"
          />
        </div>
      </div>

      <div>
        <label>Github</label>

        <div>
          <Field
            name="github"
            component={renderField}
            type="text"
            label="github"
          />
        </div>
      </div>

      <div>
        <label htmlFor="status">Done</label>

        <div>
          <Field
            name="status"
            id="status"
            component="input"
            type="checkbox"
            style={{ opacity: 1, pointerEvents: "auto" }}
          />
        </div>
      </div>

      <br />

      <div>
        <label>Teacher</label>

        <div>
          <Field
            name="teacher"
            component={renderField}
            type="text"
            label="teacher"
          />
        </div>
      </div>

      <div className="button-class">
        <button
          type="submit"
          disabled={pristine || submitting}
          className="button"
        >
          Submit
        </button>

        <button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
          className="button"
        >
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "assignment", // a unique identifier for this form

  validate // validation function
})(AddAssignmentForm);
