import { FETCH_STUDYSYNC } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_STUDYSYNC:
      return action.payload;

    default:
      return state;
  }
}
