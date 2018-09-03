import React from 'react';
import { reduxForm, Field, propTypes as reduxFormPropTypes } from 'redux-form';
import './AssignmentFormStyle.css';
import renderField from '../../renderField';
import validate from '../../../utils/validate';

const AddAssignmentForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, invalid,
  } = props;

  return (
    <form onSubmit={handleSubmit} className="AddAssignmentForm">
      <div className="form-body">
        <div>
          <Field name="assignment" component={renderField} type="text" label="Assignment" />
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
          <button
            type="submit"
            name="action"
            disabled={pristine || submitting || invalid}
            className="waves-effect waves-light btn"
          >
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            className="waves-effect waves-light btn"
          >
            Clear Values
          </button>
        </div>
      </div>
    </form>
  );
};

AddAssignmentForm.propTypes = {
  ...reduxFormPropTypes,
};

export default reduxForm({
  form: 'assignment', // a unique identifier for this form
  validate,
})(AddAssignmentForm);
