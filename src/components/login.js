import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import '../css/login.css';
import FluidInput from './fluidinput';
import config from '../config';
import  firebase from 'firebase';

class LoginContainer extends Component {    

  constructor(props){  
    super(props);
    this.signin = this.signin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
      this.state={
        messages:[],
        howmanyuser:0,
        user:'',
        username:'',
        password:'',
        inputPassword:"developers",
        inputEmail:"developers@mail.com"       
      };
  }
 
  onChangeEmail(e) {
    this.setState({
      inputEmail: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      inputPassword: e.target.value
    });
  }
   
  signin(e){ 
  e.preventDefault(); 
  config.auth().signInWithEmailAndPassword(this.state.inputEmail, this.state.inputPassword).then((user) => {
    this.props.history.push('/');
  })
}

  loginGmail = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    config.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  loginFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    config.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }



  render() {
    const style = {
      margin: "15px 0"
    }; 
    return (
        <div>
        <form onSubmit={this.signin}>
        <div className="login-container" >
          <div className="title">Login</div>
          <FluidInput type="email"    label="Email"      value={this.state.inputEmail}     onChange={this.onChangeEmail}     style={style} />
          <FluidInput type="password" label="Password"   value={this.state.inputPassword}  onChange={this.onChangePassword}  style={style} />
          <button className="login-button" type="submit">SIGN IN</button>
        </div>
        </form>
        <button onClick={this.loginGmail} >Gmail</button>
        <button onClick={this.loginFacebook} >Facebook</button>
        </div>
      )}
}


const LoginContainerWithRouter = withRouter(LoginContainer);

class login extends Component{
  render() {
    return (
      <LoginContainerWithRouter/>
    );
  }
}

export default login;
  