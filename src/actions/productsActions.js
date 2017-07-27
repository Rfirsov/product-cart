import jsonData from '../api/products.json';
import { GET_PRODUCTS } from '../constants';

export const getProducts = () => {
	return {
		type: GET_PRODUCTS,
		products: jsonData
	};
}