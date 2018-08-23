import { FETCH_USER, CHECK_IN, CHECK_OUT } from '../actions/types';

const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;

    case CHECK_IN:
      return { ...state, present: true };
    case CHECK_OUT:
      return { ...state, present: false };

    default:
      return state;
  }
}
