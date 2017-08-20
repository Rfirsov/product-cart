import { GET_PRODUCTS } from '../constants';

const initialState = {
	productList: [],
	isLoading: false
};

export default function products (state = initialState, action) {
	switch(action.type) {
		case GET_PRODUCTS:
		return {
			...state,
			isLoading: true,
			productList: action.products
		}
		default: return state;
	}
}