import { GET_EVENTS, EVENTS_LOADING } from '../actions/types';

const intialState = {
  events: [],
  loading: false,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case EVENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
