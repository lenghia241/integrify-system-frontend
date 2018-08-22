import axios from 'axios';
import { FETCH_USER, FETCH_STUDYSYNC } from './types';
/*eslint-disable */
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const fetchStudySync = () => dispatch => {
  axios.get('https://integrify.network/api/dashboard/studysync')
  .then(res=>{
    dispatch({
      type: FETCH_STUDYSYNC,
      payload: res.data,
    })
  })
};