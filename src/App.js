import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import exmessage from '../src/components/ex-message';
import login from './components/login';
import register from './components/register';
import withStyles from './components/sidebar';
import config from './config';
import firebase from 'firebase';
import './App.css'

const token = true;

function withRestriction(WrappedComponent) {
  return class RestrictedComponent extends React.Component {
    render() {
      if (token) {
        return <WrappedComponent {...this.props} />
      }

      return <Redirect to='/login' />
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

          <Route path="/sidebar" component={withStyles} />                
        </div>
      </Router>
    );
   }
  }
  export default App;