import { GET_PRODUCT_QUANTITY } from '../constants';


const initialState = {
	quantity: 1
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_QUANTITY:
      return {
      	...state, 
      	quantity: action.quantity
      }; 
    default: return state;
  }
}
