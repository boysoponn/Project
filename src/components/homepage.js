import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom';
import  firebase from 'firebase';
import LoginTemplate from './loginTemplate';
import config from '../config';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Header from './header';
class AppWithConnect extends React.Component {
    constructor(props){
        super(props);
        this.state={
          user:false,
          login:false,
          recaptcha:false,
          password:"",
          email:"",
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
    });
    this.setState({
        recaptcha:false,
        valueRecaptcha:'',
    })
    }
    loginGmail = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        config.auth().signInWithPopup(provider).then(function(result) {
        }).catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
        });
        this.setState({login:false})
    }
    loginFacebook = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        config.auth().signInWithPopup(provider).then(function(result) {
        }).catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
        });
        this.setState({login:false})
    }
    loginTwitter=()=>{
        alert("coming soon")
    }

render() {
    return (
      <Preloader>
        <div> 
          <Header/>
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
              <Placeholder>
              <Preload><Span>Loading...</Span></Preload>
              </Placeholder>
          </Preloader>
    )}}

    const mapStateToProps = state => ({
      user: state.user ,
    })

export default connect(mapStateToProps)(AppWithConnect);
const Preload = styled.div`
background-color:#f8f8f8;
height:100vh;
width:100vw;
`;

const Span = styled.span`
display:flex;
justify-content: center;
align-items: center;
height:100%;
`;

const Text = styled.div`
text-align: center;
color: #000;
padding:10vh 5vw 15vh;
`;

const H1 = styled.h1`
font-size: 7vw;
color: #313030;
font-weight: bolder;
font-family:Roboto;
`;

const P = styled.p`
text-align: center;
color: #313030;
font-size: 1vw;
font-weight: bold;
font-family:Roboto;
`;

const Button = styled.button`
  position: relative;
  width: 15vw;
  font-size: 1vw;
  font-weight: 400;
  font-family:Roboto;
  margin-top: 10vh;
  padding: 1.5vw 0.5vw;
  letter-spacing: 2px;
  color: black;
  border: 3px  solid #313030;
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
  .fillRight&{
    :hover {
      color: white;
    }
    :before {
      content: "";
      position: absolute;
      background: #313030;
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