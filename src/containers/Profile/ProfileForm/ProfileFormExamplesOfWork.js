import React from 'react';
import { FieldArray, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import { PropTypes } from 'prop-types';
import renderExamplesOfWork from './render/RenderExamplesOfWork';
import validate from './validate/validate';

const ProfileFormExamplesOfWork = (props) => {
  const { handleSubmit, previousPage, nextPage } = props;
  return (
    <form onSubmit={handleSubmit} className="form-body">
      <FieldArray name="examplesofwork" component={renderExamplesOfWork} />
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

ProfileFormExamplesOfWork.propTypes = {
  ...reduxFormPropTypes,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'profileform', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(ProfileFormExamplesOfWork);
