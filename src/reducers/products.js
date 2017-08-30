import { GET_PRODUCTS, SET_PRODUCT_QUANTITY } from '../constants';

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
		case SET_PRODUCT_QUANTITY:
		return {
			...state,
			productList: state.productList.map((product) => {
				if(product.id !== action.id) {
					return product;
				}
					return {
						...product,
						quantity: action.quantity
					};
			})
		}
		default: return state;
	}
}