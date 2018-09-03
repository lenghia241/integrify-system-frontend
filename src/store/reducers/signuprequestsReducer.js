import { GET_REQUESTS, ACCEPT_REQUEST, DELETE_REQUEST } from '../actions/types';

const signupRequestsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REQUESTS:
      return [...state, ...action.payload];
    case ACCEPT_REQUEST:
      return [...state, ...action.payload];
    case DELETE_REQUEST:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default signupRequestsReducer;
