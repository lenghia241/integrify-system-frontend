import axios from 'axios';
import { FETCH_USER_PROFILE } from './types';

const fetchUserProfile = userId => dispatch => axios.get(`/api/v1/profiles/${userId}`).then((res) => {
  dispatch({
    type: FETCH_USER_PROFILE,
    payload: res.data,
  });
});

export default fetchUserProfile;
