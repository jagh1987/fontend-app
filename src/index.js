import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import App from './components/App'
import reducer from './lib/Redux/reducers/'


// 1 CREATE THE STORE
//const store = createStore(reducer);
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);
const rootEl = document.getElementById('root');

store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({ type: 'DECREMENT' });

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  rootEl
)

render()
store.subscribe(render)