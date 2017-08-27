import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';
import Cart from './Cart';

class CartPage extends React.Component {

	handleRemoveFromCart = (id) => {
		this.props.removeFromCart(id);
	}

	render() {
		const { cart } = this.props;
		return (
			<Cart
				cart={cart}
				handleRemoveFromCart={this.handleRemoveFromCart}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	cart: state.cart.cartList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart: (id) => dispatch(removeFromCart(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);