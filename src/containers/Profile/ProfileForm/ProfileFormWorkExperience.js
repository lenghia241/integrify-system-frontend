import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import renderWorkExperience from './render/RenderWorkExperience';
import validate from './validate/validate';

const ProfileFormWorkExperience = (props) => {
  const { handleSubmit, previousPage, nextPage } = props;
  return (
    <form onSubmit={handleSubmit} className="form-body">
      <FieldArray name="workexperience" component={renderWorkExperience} />
      <div>
        <button type="button" className="btn-previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="btn-next" onClick={nextPage}>
          Next
        </button>
        <button type="submit" className="btn-submit">
          Save
        </button>
      </div>
    </form>
  );
};

ProfileFormWorkExperience.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'profileform', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(ProfileFormWorkExperience);
