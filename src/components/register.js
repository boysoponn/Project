import React, { Component } from 'react';
import '../css/login.css';
import FluidInput from './fluidinput';
import config from '../config';

class Register extends Component {
    constructor(props){
      super(props);  
      this.register = this.register.bind(this);
      this.onChangeFirstname = this.onChangeFirstname.bind(this);
      this.onChangeLastname = this.onChangeLastname.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.state={
        Firstname: "",
        Lastname:"",
        Username:"",
        Email:"",
        Password:""
      };
    }
    onChangeFirstname(e) {
      this.setState({
        Firstname: e.target.value
      });
    }
    onChangeLastname(e) {
      this.setState({
        Lastname: e.target.value
      });
    }
    onChangeUsername(e) {
      this.setState({
        Username: e.target.value
      });
    }
    onChangeEmail(e) {
      this.setState({
        Email: e.target.value
      });
    }

    onChangePassword(e) {
      this.setState({
        Password: e.target.value
      });
    }

    gotologin(){
        window.location.href = "/login";
    }

    register(e){
      e.preventDefault();  
      const email = this.state.Email ;
      const pathemail=email.replace(".","");  
      let dbCon = config.database().ref('/user/'+pathemail);
        dbCon.push({
          Firstname:this.state.Firstname,
          Lastname:this.state.Lastname,
          Username:this.state.Username,
          Email:this.state.Email,
          Password:this.state.Password
        }); 
        this.signUp();
        alert("สมัครเรียบร้อย");
    }
    signUp(){
      config.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password)
    }

    render() {  
      const style = {
        margin: "15px 0"
      };
      return (
        <form onSubmit={this.register}>
        <div  className="login-container " >
              <div className="title">Register</div>
              <FluidInput type="text"     label="Firstname"  value={this.state.Firstname} onChange={this.onChangeFirstname} style={style} />
              <FluidInput type="text"     label="Lastname"   value={this.state.Lastname}  onChange={this.onChangeLastname}  style={style} />
              <FluidInput type="text"     label="Username"   value={this.state.Username}  onChange={this.onChangeUsername}  style={style} />            
              <FluidInput type="email"    label="Email"      value={this.state.Email}     onChange={this.onChangeEmail}     style={style} />
              <FluidInput type="password" label="Password"   value={this.state.Password}  onChange={this.onChangePassword}  style={style} />
              <button type="submit" className="login-button">SIGN UP</button>
        </div>
        </form>
      );
    }
  }

  class RegisterContainer extends Component {
    render() {
        return (
            <Register />
        );
      }
    }
  export default RegisterContainer;