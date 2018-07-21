import React, { Component } from 'react';
import { createStore } from 'redux';
//import { Provider } from 'react-redux'
import ReduxCounter from './counter/Counter';
import reducers from '../../components/reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Counter extends Component{
  render(){
    return(
      <ReduxCounter value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />    
    );
  }
}

export default Counter;