import React from 'react';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalSum: 0
		};	
	}

	render() {
	console.log(this.props.cart);
	const { cart, handleRemoveFromCart } = this.props;

	const totalSum = cart.map((item) => {
		return item.price * item.quantity;
	}).reduce((a, b) => {
		return a + b;
	}, 0);

	const cartTable = cart.map((cartItem, index) => {
		let totals = cartItem.price * cartItem.quantity;
		return (
			<tr key={index}>
				<td className="text-left">
					{cartItem.name}
					<button 
						type="button"
						className="close" 
						onClick={() => {handleRemoveFromCart(cartItem.id)}}>
						<span aria-hidden="true">&times;</span>
					</button>
				</td>
				<td className="text-center">{cartItem.price} uah</td>
				<td className="text-center">{cartItem.quantity}</td>
				<td className="text-right">{totals} uah</td>
			</tr>
		)
	});
	
		return (
			<div className="container">
				<h2 className="text-center">Cart</h2>
				<div className="row">
					<div className="col-md-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title"><strong>Order summary</strong></h3>
							</div>
							<div className="panel-body">
								<div className="table-responsive">
									<table className="table table-condensed">
										<thead>
											<tr>
												<td><strong>Name of product</strong></td>
												<td className="text-center"><strong>Price</strong></td>
												<td className="text-center"><strong>Quantity</strong></td>
												<td className="text-right"><strong>Totals</strong></td>
											</tr>
										</thead>
										<tbody>
											{cartTable}
											<tr>
												<td className="thick-line"></td>
												<td className="thick-line"></td>
												<td className="thick-line text-center"><strong>Total sum</strong></td>
												<td className="thick-line text-right">{totalSum} uah</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cart;