import { GET_INFO, ADD_INFO } from '../actions/types';

const initialState = {
  items: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_INFO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
