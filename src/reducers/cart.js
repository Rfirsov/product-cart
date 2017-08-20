import { ADD_TO_CART } from '../constants';

const initialState = {
	cartList: []
};


export default function cart (state = initialState, action) {
	switch(action.type) {
		case ADD_TO_CART:
		return {
			cartList: [...state.cartList, action.payload]
		}
		default: return state; 
	}
}