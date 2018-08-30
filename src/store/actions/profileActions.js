import axios from 'axios';
import { FETCH_USER_PROFILE } from './types';

const fetchUserProfile = () => dispatch => axios.get('https://integrify.network/api/profiles/5b7ab1957c9b3c63007d5c8c').then((res) => {
  dispatch({
    type: FETCH_USER_PROFILE,
    payload: res.data[0],
  });
});

export default fetchUserProfile;
