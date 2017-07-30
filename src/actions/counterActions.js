import { GET_PRODUCT_QUANTITY } from '../constants';

export function getProductQauntity(quantity) {
	console.log(quantity);
	return {
		type: GET_PRODUCT_QUANTITY,
		quantity
	}
}
