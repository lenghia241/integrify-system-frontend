export const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
};

export const getCookie = (name) => {
  const result = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return result ? result.pop() : '';
};
