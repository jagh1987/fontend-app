import { combineReducers } from 'redux'
import counter from './counter'
import appForms from './appForms'

export default combineReducers({
  counter,
  appForms
})