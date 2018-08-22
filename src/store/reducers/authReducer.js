import { FETCH_USER, FETCH_USER_START } from '../actions/types';

const initState = {
  user: null,
  loading: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER:
      return {
        user: action.payload || false,
        loading: false,
      };
    default:
      return state;
  }
}
