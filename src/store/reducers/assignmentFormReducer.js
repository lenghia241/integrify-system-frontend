import { GET_INFO,ADD_INFO} from '../actions/types';

const initialState = {
  items: [
  {
    assignment:"Gallery Apps",
    github:"Github link",
    status:"Done",
    teacher:"Teacher",

  }
],
};
export default function(state = initialState, action){
  switch(action.type){
    case GET_INFO:
     return {
       ...state,
     };
     case ADD_INFO:
     return {
       ...state,
       items:[...state.items,action.payload]
     };
     default:
      return state;
  }
}
