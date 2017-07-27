import React from 'react';
import Counter from '../Counter/Counter.js';

const Product = (props) => {
	const { id, category, name, image, price } = props;
		return (
			<div className="col-xs-6 col-md-3">
				<img className="img-responsive" src={image} alt={name} />
				<h4>{name}</h4>
				<p className="text-danger">Cost: {price}</p>
				<Counter />
				<button className="btn btn-primary btn-block">Add to cart</button>
			</div>
		);
}

export default Product;