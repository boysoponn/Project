import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as  Router, Route, Redirect} from 'react-router-dom';
import CMS from './components/CMS';
import Header from './components/header';
import ggg from './components/ggg';
import Homepage from './components/homepage';
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
             return <Redirect to='/' />
          }else{
           return <WrappedComponent {...this.props} />
          }  
        }
      }
    }
    const CMSWithRestriction = withRestriction(CMS);

    function showNav(Nav) {
      return class showNav extends React.Component {
        render() {
          if (this.props.location.pathname === "/") {
            return <Nav {...this.props} />
          }else{
            return null;
          }  
        }
      }
    }
    const Navbar = showNav(Header);

    return (
      <div>
      <Body>
      <Router> 
        <div>        
          <Route exact path="/"  component={Navbar} /> 
          <Route exact path="/"  component={Homepage} />  
          <Route path="/cms"     component={CMSWithRestriction}/>
          <Route path="/ggg"     component={ggg} />               
        </div>
      </Router>

      </Body>
      </div>
    );
   }
  }
  const mapStateToProps = state => ({
    user: state.user ,
  })
  export default connect(mapStateToProps)(App);

const Body = styled.div`
  height: 100vh;
  overflow: hidden; 
  margin:0;
  background-color:#fff;
  background-size: cover;
`;
