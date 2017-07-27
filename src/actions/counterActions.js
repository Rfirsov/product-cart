import { INCREMENT, DECREMENT } from '../constants';

export function onIncrement() {
	return {
		type: INCREMENT,
		count: 1
	}
}

export function onDecrement() {
	return {
		type: DECREMENT,
		count: 1
	}
}
