import { FETCH_USER_PROFILE, USER_PROFILE_LOADING } from '../actions/types';

const initialState = {
  profiledata: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {
        ...state,
        profiledata: action.payload,
        loading: false,
      };
    case USER_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
