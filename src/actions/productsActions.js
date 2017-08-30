import jsonData from '../api/products.json';
import { GET_PRODUCTS, SET_PRODUCT_QUANTITY } from '../constants';

export const getProducts = () => {
	return {
		type: GET_PRODUCTS,
		products: jsonData
	};
}

export const setProductQuantity = (id, quantity) => {
	return {
		type: SET_PRODUCT_QUANTITY,
		id,
		quantity
	}
}
