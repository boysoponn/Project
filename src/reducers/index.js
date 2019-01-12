import { combineReducers } from 'redux'
import tabs from './tabs'
import user from './user'
import urlImage from './image'
import email from './email'
import chooseTemplate from './chooseTemplate';
import photoURL from './photoURL';

export default combineReducers({
  tabs,
  user,
  urlImage,
  email,
  chooseTemplate,
  photoURL
})