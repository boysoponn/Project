import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import '../css/login.css';
import FluidInput from './fluidinput';
import config from '../config';

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
  // let row=0; 
  //   while(row<this.state.howmanyuser){     
  //     if(this.state.user[row]=== this.state.inputEmail){
  //       if(this.state.password[row]=== this.state.inputPassword){
  //           localStorage.setItem('user', this.state.username[row]);
  //           alert("เข้ามาละง้าบ");
  //           // return this.props.history.push('/cms');
  //           window.location.reload(true);
  //       }else{
  //         alert("รหัสผ่านผิดครับ")
  //         break;
  //       }      
  //     }
  //     row++;
  //     if(row>=this.state.howmanyuser){
  //     alert("อีเมลผิดค่าบบ")
  //     break;
  //     }
  // }
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
  