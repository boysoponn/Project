import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import exmessage from '../src/components/ex-message';
import Member from './components/Member';
import Cms from './components/CMS';

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
const CMSWithRestriction = withRestriction(Cms);

function withRestriction2(WrappedComponent2) {
  return class RestrictedComponent extends React.Component {
    render() {
      if (user) {
         return <Redirect to='/cms' />
      }else{
       return <WrappedComponent2 {...this.props} />
      
      }  
    }
  }
}
const LoginWithRestriction = withRestriction2(Member);

class App extends Component {z
  render() {
    return (
      <Router>
        <div> 
          <Route exact path="/" component={LoginWithRestriction} />
          <Route path="/login" component={LoginWithRestriction} />   
          <Route path="/message" component={exmessage} /> 
          <Route path="/cms" component={CMSWithRestriction} />                
        </div>
      </Router>
    );
   }
  }
  export default App;