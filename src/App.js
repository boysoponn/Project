import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import exmessage from './components/ex-message';
import Member from './components/Member';
import Cms from './components/CMS';
import AppWithConnect from './components/header';
import config from './config'







class App extends Component {
  state = {
    authenticated: false,
    username:""
  };
  componentDidMount() {
    config.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
            username:"sdfsd"
          }))
        : this.setState(() => ({
            authenticated: false,
          }));
    alert(this.state.username);});
  }
  render() {
    const user = this.state.username;
    function withRestriction(WrappedComponent) {
      return class RestrictedComponent extends React.Component {
        render() {
          if (user =="") {
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
      if (user !== "") {
         return <Redirect to='/cms' />
      }else{
       return <WrappedComponent2 {...this.props} />
      }  
    }
  }
}
const LoginWithRestriction = withRestriction2(Member);
    return (
      <Router>
        <div> 
          <Route exact path="/" component={LoginWithRestriction} />
          <Route path="/login" component={LoginWithRestriction} />   
          <Route path="/message" component={exmessage} /> 
          <Route path="/cms" component={CMSWithRestriction} />   
          <Route path="/header" component={AppWithConnect} />                
        </div>
      </Router>
    );
   }
  }
  export default App;