import React, { Component } from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import exmessage from './components/ex-message';
import Member from './components/Member';
import Cms from './components/CMS';
import Cdd from './components/template/Gallery/GalleryNo3';
import AppWithConnect from './components/header';
import config from './config'
import { connect } from 'react-redux'
import {login,loginEmail,photoURL} from './components/actions'


class App extends Component {
  state = {
    authenticated: false,
    username:"",
    email:"",
    photoURL:''
  };

  componentDidMount() {
    config.auth().onAuthStateChanged((authenticated) => {
      authenticated ? 
        authenticated.displayName ?
        this.setState ({
            authenticated: true,
            email:authenticated.email.replace(/\.|@|com/g,""),
            username:authenticated.displayName,
            photoURL:authenticated.photoURL
          })
        :
        this.setState ({
          authenticated: true,
          username:authenticated.email.replace(/@.*/, ""),
          email:authenticated.email.replace(/\.|@|com/g,""),
        })
      : 
      this.setState(() => ({
            authenticated: false,
      }));      
    }); 
  }

  render() {
    this.props.dispatch(loginEmail(this.state.email));
    this.props.dispatch(login(this.state.username));
    this.props.dispatch(photoURL(this.state.photoURL));
    const user = this.state.username;
    function withRestriction(WrappedComponent) {
      return class RestrictedComponent extends React.Component {
        render() {
          if (user ==="") {
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
          <Route path="/Cdd" component={Cdd} />                
        </div>
      </Router>
    );
   }
  }
  const mapStateToProps = state => ({
    user: state.user ,
  })
  export default connect(mapStateToProps)(App);