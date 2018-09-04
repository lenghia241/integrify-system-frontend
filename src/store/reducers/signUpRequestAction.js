import { GET_REQUEST_LIST, ACCEPT_REQUEST, DECLINE_REQUEST } from '../actions/types';

const initialState = {
  requestList: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REQUEST_LIST:
      return {
        ...state,
        requestList: action.payload,
      };

    default:
      return state;
  }
}
