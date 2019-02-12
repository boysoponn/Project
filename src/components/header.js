import React from 'react'
import styled from 'styled-components'
import  firebase from 'firebase';
import LoginTemplate from './loginTemplate'
import config from '../config';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from './image/avatar.png'
import ExitIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { withStyles  } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    button:{
        padding:'0.2vw',
        fontSize: '0.8vw'
    },
});
class AppWithConnect extends React.Component {
    constructor(props){
        super(props);
        this.state={
            password:"developers",
            email:"developers@mail.com",
            login:false,
            register:false,
        }
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
      e.preventDefault(); 
      config.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        this.setState({login:false})
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
    }
    loginGmail = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        config.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        this.props.history.push('/');
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
    signUp=(e)=>{
        e.preventDefault();  
        config.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(user) {      
          alert("สมัครเรียบร้อย");
        }, function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
          } else {
              console.error(error);
          }
          // [END_EXCLUDE]
      });
    }
    logout =() => {config.auth().signOut();window.location.reload(); };
render() {
    const { classes } = this.props;
    return (
        <div>
            <Nav >
            <Img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"/>
                {this.props.user ?
                <All2> 
                    <Content> 
                        <Button variant="contained" color="secondary" className={classes.button} onClick={this.logout}>Logout<ExitIcon className={classes.rightIcon}/></Button>
                    </Content> 
                    <Content> 
                        <Avatar alt="Remy Sharp" src={this.props.photoURL? this.props.photoURL:avatarImage}  />
                    </Content> 
                    <Content2> 
                        <P>{this.props.user}</P>
                    </Content2> 
                </All2>
                :
                <All2>
                    <Content> 
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.onChangeTrue('login')}>Login<ExitIcon className={classes.rightIcon}/></Button>
                    </Content>  
                </All2>
                }                 
                <All>
                    <Content>
                        <A onClick={this.onChangeTrue('register')}>Register</A>
                    </Content> 
                    <Content>
                        <A>Tutorial</A>
                    </Content>
                    <Content>
                        <A>Getting Started</A>
                    </Content>
                </All>
            </Nav>
            <LoginTemplate
            open={this.state.login}
            onClose={this.onChangeFalse('login')}
            label='SIGN IN'
            submit={this.signin}
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
            <LoginTemplate
            open={this.state.register}
            onClose={this.onChangeFalse('register')}
            label='REGISTER'
            submit={this.signup}
            labelButton='SUBMIT'
            textField=  {[
                        {_key:1,label:'Email',type:'email',value:this.state.email,onChange:this.onChangeValue('email')},
                        {_key:2,label:'Password',type:'password',value:this.state.password,onChange:this.onChangeValue('password')}
                        ]}
            />
        </div>
    )}}
const mapStateToProps = state => ({
    user:state.user,
    photoURL:state.photoURL
    })
export default withRouter(connect(mapStateToProps)(withStyles(styles)(AppWithConnect)));

const Nav = styled.div`
height: 20vh;
position:relative;
padding: 2vh 5vh;
`;

const Img = styled.img`
height: 10vw;
position: absolute;
`;
const All = styled.div`
float: right;
width: 100%;
`;
const All2 = styled.div`
float: right;
width: 100%;
`;
const Content = styled.div`
float: right;
padding: 1vh 2vh;
`;
const Content2 = styled.div`
float: right;
padding-top: 1vh;
`;
const A = styled.a`
color:#000;
font-size:0.8vw
`;

const P = styled.p`
color:#000;
font-size:1vw;
font-weight: 500;
`;
