import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants';

const initialState = {
	cartList: []
};

export default function cart (state = initialState, action) {
	switch(action.type) {
		case ADD_TO_CART:
		return {
			cartList: [...state.cartList, action.payload]
		}
		case REMOVE_FROM_CART:
		return {
			cartList: state.cartList.filter(item => item.id !== action.id)
		}
		default: return state; 
	}
}