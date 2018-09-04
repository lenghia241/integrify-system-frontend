import React from 'react';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';

import renderField from '../../renderField';
import validate from '../../../utils/validate';

const ProfileFormPhotoBio = (props) => {
  const { handleSubmit, nextPage } = props;
  return (
    <form onSubmit={handleSubmit} className="form-body">
      <Field name="firstName" type="text" component={renderField} label="First Name" />
      <Field name="lastName" type="text" component={renderField} label="Last Name" />
      <Field name="bio" type="text" component={renderField} label="Bio" />
      <div className="buttons">
        <button type="button" className="btn-next waves-effect waves-light btn" onClick={nextPage}>
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

ProfileFormPhotoBio.propTypes = {
  ...reduxFormPropTypes,
};

export default reduxForm({
  form: 'profileform', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  enableReinitialize: true,
})(ProfileFormPhotoBio);
