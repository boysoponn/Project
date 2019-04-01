import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
store.subscribe(()=>{
  // console.log("Update",store.getState());
})

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'))
