import React from 'react';
import '../../styles/counter.css';

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	onIncrement = (e) => {
		e.preventDefault();
		this.setState((prevState) => {
			return { quantity: prevState.quantity + 1 };
		});
	}

	onDecrement = (e) => {
		e.preventDefault();
		if (this.state.quantity <= 1) {
			return this.state.quantity;
		} else {
			this.setState((prevState) => {
				return { quantity: prevState.quantity - 1 };
			});
		}
	}

	handleClick = () => {
		const { product } = this.props;
		const { quantity } = this.state;
		this.props.handleSetProductQuantity(product, quantity);
		this.props.handleAddToCart(product);
	}

	render() {
		const { product } = this.props;
		return (
			<div className="col-xs-6 col-md-3">
				<img className="img-responsive" src={product.image} alt={product.name} />
				<h4>{product.name}</h4>
				<p className="text-danger">Cost: {product.price} uah</p>
				<div className="counter-inline">
        	<button className="counter-btn" onClick={this.onDecrement}>-</button>
      		<p className="counter-item">{this.state.quantity}</p>
        	<button className="counter-btn" onClick={this.onIncrement}>+</button>
      	</div>
				<button 
					className="btn btn-primary btn-block"
					onClick={this.handleClick}
				>
				Add to cart
				</button>
			</div>
		);
	}
}


export default Product;