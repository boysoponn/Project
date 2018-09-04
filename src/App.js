import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import exmessage from '../src/components/ex-message';
import Login from './components/login';
import config from './config';
import firebase from 'firebase';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login} />    
          <Route path="/message" component={exmessage} />     
        </div>
      </Router>
    );
   }
  }
  export default App;