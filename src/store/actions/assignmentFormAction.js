export const getInfo = () => ({
  type: 'GET_INFO',
});
export const addInfo = item => ({
  type: 'ADD_INFO',
  payload: item,
});
