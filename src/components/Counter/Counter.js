import React from 'react';
import { connect } from 'react-redux';
import { getProductQauntity } from '../../actions/counterActions';
import './counter.css';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 1
		}
	}

	onIncrement = (e) => {
		e.preventDefault();
		this.setState((prevState) => {
			return { counter: prevState.counter + 1 };
		});
	}

	onDecrement = (e) => {
		e.preventDefault();
		if (this.state.counter <= 1) {
			return this.state.counter;
		} else {
			this.setState((prevState) => {
				return { counter: prevState.counter - 1 };
			});
		}
	}

  render() {
  	console.log(this.state.counter);
    return (
    	<div className="counter-inline">
        <button className="counter-btn" onClick={this.onDecrement}>-</button>
      	<p className="counter-item">{this.state.counter}</p>
        <button className="counter-btn" onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProductQauntity: (quantity) => dispatch(getProductQauntity(quantity))
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
