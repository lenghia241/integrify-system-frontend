import { GET_CLASS_ATTENDANCE } from '../actions/types';

// initialize store with data
const initialState = {
  class: [],
  loading: true,
};

export default function (state = initialState, action) {
    console.log(action)
  switch (action.type) {
    case GET_CLASS_ATTENDANCE:
        console.log('action: ', action);
      return {
        ...state,
        class: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
