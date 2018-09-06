import React, { Component } from 'react';
import '../css/login.css';
import firebase from 'firebase';
import FluidInput from './fluidinput';
import _ from 'lodash';

class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.getData = this.getData.bind(this);
    this.signin = this.signin.bind(this);
      this.state={
        user:[]
      };
    
    let app = this.props.db.database().ref('user');
    app.on('value', snapshot => {
      console.log(snapshot.numChildren());
      this.getData(snapshot.val());
    }); 
  }
  getData(values){
    let messagesVal = values;
    let messages = _(messagesVal)
                    .keys()
                    .map(messageKey => {
                      let cloned = _.clone(messagesVal[messageKey]);
                      cloned.key = messageKey;
                      return cloned;
                    }).value();
   
    this.setState({
      user: _.map(messages, 'Email')
    }); 

 }    
  signin(){ 
  var email =document.getElementById('email').value;
  var password =document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(firebaseUser) {
    alert("เข้ามาละง้าบ");

    let row=0; 
    while(row<5){       
      if(this.user[row]=="sopon@gmail.com"){
     alert(this.user[row]);
     break;
   }  
      row++;
    }   

  })
  .catch(function(error){
    var errorCode = error.code;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert("Check your email please");
    }
  });
  }

  render() {
    const style = {
      margin: "15px 0"
    };
    return (
      <div  className="login-container" >
        <div className="title">Login</div>
        <FluidInput type="text" label="Email"  id="email" style={style} />
        <FluidInput type="password" label="Password" id="password" style={style} />
        <button className="login-button" onClick={this.signin}>Submit</button>
        <a href="/register"><button className="login-button">Register</button></a>
      </div>
    );
  }
}

// class Container extends Component {
// constructor( props ){
//   super( props )
//   this.state = { shows : false };
//   this.state = { show : true };
//   this.toggleDiv = this.toggleDiv.bind(this)
// }

// toggleDiv() {
//   const { shows } = this.state;
//   this.setState( { shows : !shows } )
//   const { show } = this.state;
//   this.setState( { show : !show } )
// }
class login extends Component{
  render() {
    return (
      <LoginContainer db={firebase}/>
    );
  }
}


export default login;
  