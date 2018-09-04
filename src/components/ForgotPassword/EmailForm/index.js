import React from 'react';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import renderField from '../../renderField';
import validate from '../../../utils/validate';

const EmailForm = ({ handleSubmit, invalid }) => (
  <React.Fragment>
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" label="Email" component={renderField} />
      <div className="center">
        <button type="submit" className="btn login-btn" disabled={invalid}>
          Submit
        </button>
      </div>
    </form>
  </React.Fragment>
);

EmailForm.defaultProps = {};

EmailForm.propTypes = {
  ...reduxFormPropTypes,
};

export default reduxForm({
  validate,
  form: 'forgot-password',
})(EmailForm);
