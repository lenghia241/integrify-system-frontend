const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Last Name is Required';
  }
  if (!values.bio) {
    errors.bio = 'Bio Required';
  }
  if (!values.skills) {
    errors.skills = 'You have to insert at least one skill.';
  }
  return errors;
};

export default validate;
