import { INCREMENT, DECREMENT } from '../constants';


const initialState = 1;

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.count; 
    case DECREMENT:
      return state - action.count;
    default: return state;
  }
}
