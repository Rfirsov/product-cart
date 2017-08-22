import React from 'react';
import Counter from '../Counter/Counter.js';

const Product = ({handleAddToCart, product}) => {
	return (
		<div className="col-xs-6 col-md-3">
			<img className="img-responsive" src={product.image} alt={product.name} />
			<h4>{product.name}</h4>
			<p className="text-danger">Cost: {product.price} uah</p>
			<Counter />
			<button 
				className="btn btn-primary btn-block"
				onClick={() => {handleAddToCart(product)}}
			>
			Add to cart
			</button>
		</div>
	);
}

export default Product;