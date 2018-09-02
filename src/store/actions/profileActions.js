import axios from 'axios';
import { FETCH_USER_PROFILE } from './types';

const fetchUserProfile = () => dispatch => axios.get('https://integrify.network/api/v1/profiles/5b7c5ade5f49453eecccf351').then((res) => {
  dispatch({
    type: FETCH_USER_PROFILE,
    payload: res.data,
  });
});

export default fetchUserProfile;
