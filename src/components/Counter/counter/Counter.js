import React, { Component } from "react";
import {connect} from 'react-redux';
//import PropTypes from 'prop-types';

class Counter extends Component {

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.dispatch({ type: 'INCREMENT' });
    }
  };

  incrementAsync = () => {
    setTimeout(this.props.dispatch({ type: 'INCREMENT' }), 1000)
  };
  
  increment=()=> {
    this.props.dispatch({ type: 'INCREMENT' });
  }
  decrement=()=> {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    //const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {this.props.value} times
        {" "}
        <button onClick={this.increment}>
          +
        </button>
        {" "}
        <button onClick={this.decrement}>
          -
        </button>
        {" "}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {" "}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    );
  }
}

const mapStateToProps= state =>({
  value: state.counter.count
});
export default connect(mapStateToProps)(Counter);
