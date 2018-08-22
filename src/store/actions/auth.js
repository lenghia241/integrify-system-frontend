import axios from 'axios';
import { FETCH_USER, FETCH_USER_START } from './types';

export const fetchUserStart = () => ({
  type: FETCH_USER_START,
});

export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserStart());
  const res = await axios.get(
    'https://integrify.network/api/profiles/5b7ab1957c9b3c63007d5c8cx',
  );

  const user = res.data.length > 0 ? res.data[0] : null;

  dispatch({
    type: FETCH_USER,
    payload: user,
    loading: false,
  });
};
