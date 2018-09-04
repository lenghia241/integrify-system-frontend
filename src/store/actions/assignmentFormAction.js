import axios from 'axios';
import { GET_INFO } from './types';

export const getInfo = () => (dispatch) => {
  axios.get('https://integrify.network/api/v1/profiles/assignments/5b7c5ade5f49453eecccf351').then((res) => {
    dispatch({
      type: GET_INFO,
      payload: res.data,
    });
  });
};
export const addInfo = item => ({
  type: 'ADD_INFO',
  payload: item,
});
