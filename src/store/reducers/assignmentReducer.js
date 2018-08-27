import { FETCH_ASSIGNMENT } from '../actions/types';

const assignmentReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ASSIGNMENT:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default assignmentReducer;
