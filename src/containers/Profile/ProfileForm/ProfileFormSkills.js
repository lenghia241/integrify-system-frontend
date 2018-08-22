import React from 'react';
import { FieldArray, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import { PropTypes } from 'prop-types';
import renderSkills from './render/RenderSkills';

const ProfileFormSkills = (props) => {
  const { handleSubmit, previousPage, nextPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="skills" component={renderSkills} />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next" onClick={nextPage}>
          Next
        </button>
        <button type="submit" className="next">
          Save
        </button>
      </div>
    </form>
  );
};

ProfileFormSkills.propTypes = {
  ...reduxFormPropTypes,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'profileform', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(ProfileFormSkills);
