import { combineReducers } from 'redux'
import tabs from './tabs'
import user from './user'

export default combineReducers({
  tabs,
  user
})