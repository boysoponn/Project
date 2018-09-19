import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import '../css/login.css';
import FluidInput from './fluidinput';
import _ from 'lodash';
import config from '../config';

class LoginContainer extends Component {    

  constructor(props){  
    super(props);
    this.getData = this.getData.bind(this);
    this.signin = this.signin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
      this.state={
        messages:[],
        howmanyuser:0,
        user:'',
        username:'',
        password:'',
        inputPassword:"",
        inputEmail:""
        
      };
    this.getData();
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
  getData(){
    let app = config.database().ref('user');
    app.on('value', snapshot => { 
    let messagesVal = snapshot.val();
    let messages = _(messagesVal)
                    .keys()
                    .map(messageKey => {
                      let cloned = _.clone(messagesVal[messageKey]);
                      cloned.key = messageKey;
                      return cloned;
                    }).value();
                    this.setState({
                      user: _.map(messages,'Email'),
                      username: _.map(messages,'Username'),
                      password: _.map(messages,'Password'),
                      howmanyuser:snapshot.numChildren(),
                    }); 
    });          
 }    
  signin(e){ 
  e.preventDefault(); 
  let row=0; 
    while(row<this.state.howmanyuser){     
      if(this.state.user[row]=== this.state.inputEmail){
        if(this.state.password[row]=== this.state.inputPassword){
            localStorage.setItem('user', this.state.username[row]);
            alert("เข้ามาละง้าบ");
            // return this.props.history.push('/cms');
            window.location.reload(true);
        }else{
          alert("รหัสผ่านผิดครับ")
          break;
        }      
      }
      row++;
      if(row>=this.state.howmanyuser){
      alert("อีเมลผิดค่าบบ")
      break;
      }
  }
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
  