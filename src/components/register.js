import React, { Component } from 'react';
import '../css/login.css';
import firebase from 'firebase';
import FluidInput from './fluidinput';

class Register extends Component {
    constructor(props){
      super(props);  
      this.register = this.register.bind(this);
    }
    signup(){
      var email =document.getElementById('email').value;
      var password =document.getElementById('password').value;
      this.props.db.auth().createUserWithEmailAndPassword(email,password)
    }
    gotologin(){
        window.location.href = "/login";
    }
    register(e){
        e.preventDefault();
      var firstname =document.getElementById('firstname');
      var lastname =document.getElementById('lastname');
      var username =document.getElementById('username');
      var email =document.getElementById('email');
      var password =document.getElementById('password');
      
      
      let dbCon = this.props.db.database().ref('/user');
        dbCon.push({
          Firstname:firstname.value,
          Lastname:lastname.value,
          Username:username.value,
          Email:email.value,
          Password:password.value
        });
        this.signup();
        alert("สมัครเรียบร้อย");
    }
    render() {  
      const style = {
        margin: "15px 0"
      };
      return (
        <form onSubmit={this.register}>
        <div  className="login-container " >
              <div className="title">Register</div>
              <FluidInput type="text" label="Firstname" id="firstname"  style={style} />
              <FluidInput type="text" label="Lastname" id="lastname" style={style} />
              <FluidInput type="text" label="Username" id="username" style={style} />            
              <FluidInput type="email" label="Email" id="email" style={style} />
              <FluidInput type="password" label="Password" id="password" style={style} />
              <button type="submit" className="login-button">Submit</button>
              <button className="login-button"onClick={this.gotologin}>Login</button>
        </div>
        </form>
      );
    }
  }

  class RegisterContainer extends Component {
    render() {
        return (
            <Register db={firebase}/>
        );
      }
    }
  export default RegisterContainer;