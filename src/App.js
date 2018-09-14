import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import exmessage from '../src/components/ex-message';
import login from './components/login';
import register from './components/register';
import MiniDrawer from './components/sidebar';
import ImageUpload from './components/tab';
import config from './config';
import firebase from 'firebase';
import './App.css'

const user = localStorage.getItem('user');


function withRestriction(WrappedComponent) {
  return class RestrictedComponent extends React.Component {
    render() {
      if (!user) {
         return <Redirect to='/login' />
      }else{
       return <WrappedComponent {...this.props} />
      }  
    }
  }
}

const ExMessageWithRestriction = withRestriction(exmessage);


class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Route path="/login" component={login} />   
          <Route path="/register" component={register} /> 
          <Route path="/message" component={ExMessageWithRestriction} />  
          <Route path="/tab" component={ImageUpload} />  
          <Route path="/sidebar" component={MiniDrawer} />                
        </div>
      </Router>
    );
   }
  }
  export default App;