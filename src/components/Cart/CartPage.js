import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';

class CartPage extends React.Component {
	render() {
		const { cart } = this.props;
		return (
			<Cart
				cart={cart}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	cart: state.cart.cartList
	}
}

export default connect(mapStateToProps)(CartPage);