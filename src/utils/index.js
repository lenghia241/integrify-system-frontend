export const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
};

export const getCookie = (name) => {
  const result = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return result ? result.pop() : '';
};

export const formValidate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 2 || values.firstName.length > 20) {
    errors.firstName = 'First name must be between 2 and 20 characters';
  } else if (!/^[a-zA-Z ]*$/.test(values.firstName)) {
    errors.firstName = 'First name must not contain numbers.';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 2 || values.lastName.length > 20) {
    errors.lastName = 'Last name must be between 2 and 20 characters';
  } else if (!/^[a-zA-Z ]*$/.test(values.lastName)) {
    errors.lastName = 'Last name must not contain numbers.';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be longer than 6 characters.';
  }

  return errors;
};
