import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import exmessage from '../src/components/ex-message';
import login from './components/login';
import register from './components/register';
import sidebar from './components/sidebar';
import config from './config';
import firebase from 'firebase';
import './App.css'
class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={login} />   
          <Route path="/register" component={register} /> 
          <Route path="/message" component={exmessage} />  
          <Route path="/sidebar" component={sidebar} />                
        </div>
      </Router>
    );
   }
  }
  export default App;