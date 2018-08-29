import { FETCH_STUDYSYNC, GET_EVENT_LIST, FETCH_ASSIGNMENT } from '../actions/types';

const initialState = {
  studysyncs: [],
  assignments: [],
  events: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDYSYNC:
      return {
        ...state,
        studysyncs: action.payload,
      };

    case FETCH_ASSIGNMENT:
      return {
        ...state,
        assignments: action.payload,
      };

    case GET_EVENT_LIST:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
}
