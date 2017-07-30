import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productsActions';
import Product from './Product.js';


class ProductsPage extends React.Component {
	componentDidMount() {
		this.props.getProducts();
	}
	render() {
		const { products,isLoading } = this.props;
		if (!isLoading) {
			return <p>Loading</p>;
		}
		const productNode = products.map((product) => {
			return (
				<Product
					key={product.id}
					id={product.id} 
					category={product.category} 
					name={product.name} 
					image={product.image} 
					price={product.price} 
				/>
			);
		}); 
		return (
			<div className="container text-center">
				{productNode}
			</div>
		);
	}
}

ProductsPage.propTypes = {
	id: PropTypes.object,
	category: PropTypes.object,
	name: PropTypes.object,
	image: PropTypes.object,
	price: PropTypes.object
}

const mapStateToProps = (state) => {
	return {
		products: state.products.productList,
		isLoading: state.products.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProducts: () => dispatch(getProducts())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);