import { GET_EVENT_LIST, EVENTS_LOADING } from '../actions/types';

const intialState = {
  events: [],
  loading: false,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_EVENT_LIST:
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
