import { GET_ATTENDANCE, UPDATE_ATTENDANCE, ATTENDANCE_LOADING } from '../actions/types';

// initialize store with data
const initialState = {
  students: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ATTENDANCE:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    case UPDATE_ATTENDANCE: {
      const newState = {
        students: action.payload,
        loading: false,
      };
      return newState;
    }
    case ATTENDANCE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
