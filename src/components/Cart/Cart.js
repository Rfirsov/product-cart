import React from 'react';

class Cart extends React.Component {
	render() {
	console.log(this.props.cart);
	const { cart } = this.props;
	const cartTable = cart.map((cartItem) => {
		return (
			<tr key={cartItem.id}>
				<td>{cartItem.name}</td>
				<td className="text-center">{cartItem.price} uah</td>
				<td className="text-center">{cartItem.quantity}</td>
				<td className="text-right">{cartItem.price * cartItem.quantity} uah</td>
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
												<td className="thick-line text-right">444 uah</td>
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