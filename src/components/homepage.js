import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom';
import  firebase from 'firebase';
import LoginTemplate from './loginTemplate';
import config from '../config';

class AppWithConnect extends React.Component {
    constructor(props){
        super(props);
        this.state={
          user:false,
          login:false,
          recaptcha:false,
          password:"developers",
          email:"developers@mail.com",
          valueRecaptcha:''
        }
    }    
    onChangeRecaptcha=(value)=> {
      this.setState({valueRecaptcha:value})
      if(this.state.valueRecaptcha !==''){
          this.signin();
      }
    }
    clickSubmit=(e)=>{
    e.preventDefault(); 
    this.setState({recaptcha:true});
    } 
    onChangeTrue=name=>()=>{
      this.setState({
          [name]:true
      })
    }
    onChangeFalse=name=>()=>{
      this.setState({
          [name]:false
      })
    }
    onChangeValue=name=>(e)=> {
      this.setState({
        [name]: e.target.value
      });
    } 
    closePopup=()=>{
      if(this.props.user!==''){this.setState({login:false})}
    }   
    signin=(e)=> { 
      config.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
        this.setState({
            login:false,
        })
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);         
        }
        console.log(error);
    });
    this.setState({
        recaptcha:false,
        valueRecaptcha:'',
    })
    }
    loginGmail = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        config.auth().signInWithPopup(provider).then(function(result) {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // // ...
        // this.props.history.push('/');
        // }).catch(function(error) {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
        });
        this.setState({login:false})
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
        this.setState({login:false})
    }
    loginTwitter=()=>{
        alert("coming soon")
    }

render() {
    return (
      <div>
            <Text>
                <H1>ProjectCMS</H1>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</P>
                {this.props.user===""?
                <Button className='fillRight' onClick={this.onChangeTrue('login')}>Getting Started</Button>
                : <Link to="/cms"><Button className='fillRight'>Getting Started</Button></Link>
                }
            </Text>
            <LoginTemplate
            open={this.state.login}
            recaptcha={this.state.recaptcha}
            onChange={this.onChangeRecaptcha}
            onClose={this.onChangeFalse('login')}
            label='SIGN IN'
            submit={this.clickSubmit}
            social={true}
            facebook={this.loginFacebook}
            google={this.loginGmail}
            twitter={this.loginTwitter}
            labelButton='SUBMIT'
            textField=  {[
                        {_key:1,label:'Email',type:'email',value:this.state.email,onChange:this.onChangeValue('email')},
                        {_key:2,label:'Password',type:'password',value:this.state.password,onChange:this.onChangeValue('password')}
                        ]}
            />
      </div>
    )}}

    const mapStateToProps = state => ({
      user: state.user ,
    })

export default connect(mapStateToProps)(AppWithConnect);

const Text = styled.div`
text-align: center;
color: #000;
padding:0 5vw;
`;

const H1 = styled.h1`
font-size: 7vw;
color: #000;
`;

const P = styled.p`
text-align: center;
color: #000;
font-size: 1vw;
`;

const Button = styled.button`
  position: relative;
  height: 60px;
  width: 200px;
  margin: 30px 7px;
  padding: 5px 5px;
//   font-style:${props=> props.FontStyle}
//   font-family:${props => props.FontFamily};
//   font-weight: ${props => props.FontWeight};
//   font-size: ${props => props.FontSize};
  letter-spacing: 2px;
  color: black;
  border: 2px  solid;
  border-radius: 20px;
  text-transform: uppercase;
  outline: 0;
  overflow:hidden;
  background: white;
  z-index: 1;
  cursor: pointer;
  transition:         0.09s ease-in;
  -o-transition:      0.09s ease-in;
  -ms-transition:     0.09s ease-in;
  -moz-transition:    0.09s ease-in;
  -webkit-transition: 0.09s ease-in;
  :hover{
    border: 2px ${props => props.buttonHBDColor} solid; 
    color:${props => props.buttonHoverColor}
  }
  .fillRight&{
    :hover {
      color: white;
    }
    :before {
      content: "";
      position: absolute;
      background: black;
      bottom: 0;
      left:0 ;
      right: 100%;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      right: 0;
    }
  }
`;