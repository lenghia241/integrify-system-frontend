import {
  FETCH_STUDYSYNC,
  GET_EVENT_LIST,
  GET_EVENT,
  ADD_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  FETCH_ASSIGNMENT,
} from '../actions/types';

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

    case GET_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event._id !== action.payload),
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
}
