import React from 'react';
import { FieldArray, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import { PropTypes } from 'prop-types';
import renderCompetencies from './render/RenderCompetencies';
import validate from './validate/validate';
import '../ProfileStyles/Forms.css';

const ProfileFormCompetencies = (props) => {
  const { handleSubmit, previousPage, nextPage } = props;
  return (
    <form onSubmit={handleSubmit} className="form-body">
      <FieldArray name="competencies" component={renderCompetencies} />
      <div className="buttons">
        <button
          type="button"
          className="btn-previous waves-effect waves-light btn"
          onClick={previousPage}
        >
          Previous
        </button>
        <button type="submit" className="btn-next waves-effect waves-light btn" onClick={nextPage}>
          Next
        </button>
        <button type="submit" className="btn-submit waves-effect waves-light btn">
          Save
          <i className="material-icons right">send</i>
        </button>
      </div>
    </form>
  );
};

ProfileFormCompetencies.propTypes = {
  ...reduxFormPropTypes,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'profileform', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(ProfileFormCompetencies);
