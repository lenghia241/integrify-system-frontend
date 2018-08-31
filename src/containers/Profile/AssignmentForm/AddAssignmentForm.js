import React from 'react';
import { reduxForm, Field, propTypes as reduxFormPropTypes } from 'redux-form';
import AssignmentFormStyle from './AssignmentFormStyle.css';
import renderField from '../../../utils/RenderField';

const AddAssignmentForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, invalid,
  } = props;

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
          <Field name="teacher" component={renderField} type="text" label="Teacher" />
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
})(AddAssignmentForm);