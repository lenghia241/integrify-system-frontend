import axios from 'axios';
import { FETCH_USER_PROFILE } from './types';

<<<<<<< HEAD
const fetchUserProfile = () => dispatch => axios.get('https://integrify.network/api/v1/profiles/5b7c5ade5f49453eecccf351').then((res) => {
=======
const fetchUserProfile = userId => dispatch => axios.get(`/api/v1/profiles/${userId}`).then((res) => {
>>>>>>> 984fe114d40e129ab4f91ce6ba36f33d3f54ec30
  dispatch({
    type: FETCH_USER_PROFILE,
    payload: res.data,
  });
});

export default fetchUserProfile;
