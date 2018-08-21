import React from 'react';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import { PropTypes } from 'prop-types';
import renderField from './render/RenderField';
import validate from './validate/validate';

const ProfileFormPhotoBio = (props) => {
  const { handleSubmit, nextPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={renderField} label="First Name" />
      <Field name="lastName" type="text" component={renderField} label="Last Name" />
      <Field name="bio" type="text" component={renderField} label="Bio" />
      {/* <Field name="image" type="file" component={UploadImageInput} label="Last Name" /> */}
      <div>
        <button type="submit" onClick={nextPage}>
          Next
        </button>
        <button type="submit" className="next">
          Save
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
})(ProfileFormPhotoBio);
