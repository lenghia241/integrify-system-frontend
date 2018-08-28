import React from 'react';
import { FieldArray, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import { PropTypes } from 'prop-types';
import renderLanguages from './render/RenderLanguages';
import validate from './validate/validate';

const ProfileFormLanguages = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit} className="form-body">
      <FieldArray name="languages" component={renderLanguages} />
      <div>
        <button type="button" className="btn-previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="btn-submit">
          Save
        </button>
      </div>
    </form>
  );
};

ProfileFormLanguages.propTypes = {
  ...reduxFormPropTypes,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'profileform', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(ProfileFormLanguages);
