import React, { Component } from 'react';
import '../css/login.css';
import firebase from 'firebase';
class FluidInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      focused: false,
      value: ""
    };
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused
    });
  }
  
  render() {
    const { type, label, style } = this.props;
    const { focused, value } = this.state;
    
    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value !== "") {
      inputClass += " fluid-input--open";
    }
    
    return (
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">
          <input 
            className="fluid-input-input"
            type={type}    
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}
            id={this.props.id}
            value={this.state.value}
            required 
            autocomplete="off"
          />
          <label className="fluid-input-label">{label}</label>
          
        </div>
      </div>
    );
  }
}


class LoginContainer extends Component {

  signin(){
  var email =document.getElementById('email').value;
  var password =document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(firebaseUser) {
    alert("เข้ามาละง้าบ");
  })
  .catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
  });
  }

  render() {
    const style = {
      margin: "15px 0"
    };
    return (
      <div className="login-container" >
        <div className="title">Login</div>
        <FluidInput type="text" label="Email"  id="email" style={style} />
        <FluidInput type="password" label="Password" id="password" style={style} />
        <button className="button login-button" onClick={this.signin}>Submit</button>
      </div>
    );
  }
}

class RegisterContainer extends Component {
  constructor(props){
    super(props);  
    this.register = this.register.bind(this);
  }
  signup(){
    var email =document.getElementById('email').value;
    var password =document.getElementById('password').value;
    this.props.db.auth().createUserWithEmailAndPassword(email,password)
  }
  register(e){
    var firstname =document.getElementById('firstname');
    var lastname =document.getElementById('lastname');
    var username =document.getElementById('username');
    var email =document.getElementById('email');
    var password =document.getElementById('password');
    e.preventDefault();
    if(firstname.value &&lastname.value &&email.value &&password.value !== "" ){
    let dbCon = this.props.db.database().ref('/user');
      dbCon.push({
        Firstname:firstname.value,
        Lastname:lastname.value,
        Username:username.value,
        Email:email.value,
        Password:password.value
      });
      this.signup()
  }else{
    alert("กรุณากรอกข้อมูลให้ครบ");
  }
}
  render() {  
    const style = {
      margin: "15px 0"
    };
    return (
      <form>
      <div className="register-container" >
            <div className="title">Register</div>
            <FluidInput type="text" label="Firstname" id="firstname"  style={style} />
            <FluidInput type="text" label="Lastname" id="lastname" style={style} />
            <FluidInput type="text" label="Username" id="username" style={style} />            
            <FluidInput type="text" label="Email" id="email" style={style} />
            <FluidInput type="password" label="Password" id="password" style={style} />
            <button className="button register-button" onClick={this.register}>Submit</button>
      </div>
      </form>
    );
  }
}
class Container extends Component {
constructor( props ){
  super( props )
  this.state = { shows : false };
  this.state = { show : true };
  this.toggleDiv = this.toggleDiv.bind(this)
}

toggleDiv() {
  const { shows } = this.state;
  this.setState( { shows : !shows } )
  const { show } = this.state;
  this.setState( { show : !show } )
}
render() { 
  return (
    <div>
      <button onClick={ this.toggleDiv }>Toggle </button>
    { this.state.show && <RegisterContainer db={firebase}/> }
    { this.state.shows && <LoginContainer db={firebase}/> }
  </div>
);
}
}

export default Container;
  