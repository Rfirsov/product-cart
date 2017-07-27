import React from 'react';
import { connect } from 'react-redux';
import { onIncrement, onDecrement } from '../../actions/counterActions';
import './counter.css';

class Counter extends React.Component {
  render() {
	const { counter, onIncrement, onDecrement } = this.props;
    return (
    	<div className="counter-inline">
        <button className="counter-btn" onClick={onDecrement}>-</button>
      	<p className="counter-item">{counter}</p>
        <button className="counter-btn" onClick={onIncrement}>+</button>
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
		onIncrement: () => dispatch(onIncrement()),
		onDecrement: () => dispatch(onDecrement())
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
