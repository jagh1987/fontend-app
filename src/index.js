import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import Reducer from './components/reducers/'

const store = createStore(Reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <App
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
  ,
  rootEl
)

render()
store.subscribe(render)