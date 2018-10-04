import { combineReducers } from 'redux'
import tabs from './tabs'
import user from './user'
import urlImage from './image'

export default combineReducers({
  tabs,
  user,
  urlImage
})