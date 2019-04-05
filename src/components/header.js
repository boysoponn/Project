import React from 'react';
import '../css/menu.css';
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
import { withRouter,Link,Redirect } from 'react-router-dom';
import * as animationData from './data.json';
import Lottie from 'react-lottie';
import { Preloader, Placeholder } from 'react-preloading-screen';
import { chooseTemplate,checkTab } from './actions';
const styles = theme => ({
    button:{
        width:'100px'
    },
    button2:{
        width:200,
        position: 'absolute',
        bottom: '15%',
        zIndex:3
    },
    GettingStarted:{
        color:'#464646',
        fontSize:'1vw',
        fontWeight: 500,
        '&:hover': {
            cursor: 'pointer',
            color:'#000'
          },
      }
});
class AppWithConnect extends React.Component {
    constructor(props){
        super(props);
        this.state={
            password:"",
            email:"",
            login:false,
            register:false,
            recaptcha:false,
            valueRecaptcha:''
        }
    }
    componentDidMount(){
        this.props.dispatch(checkTab(false));
        this.props.dispatch(chooseTemplate("null"));
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
    onChangeRecaptcha=(value)=> {
        this.setState({valueRecaptcha:value})
        if(this.state.valueRecaptcha !==''){
            this.signin();
        }
    }
    onChangeRecaptchA=(value)=> {
        this.setState({valueRecaptcha:value})
        if(this.state.valueRecaptcha !==''){
            this.signUp();
        }
    }
    clickSubmit=(e)=>{
        e.preventDefault(); 
        this.setState({recaptcha:true});
    } 
    signin=()=> { 
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
            password:'',
            email:''
        })
    }
    loginGmail = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        config.auth().signInWithPopup(provider).then(function(result) {
        }).catch(function(error) {
        var errorMessage = error.message;
            alert(errorMessage)
        });
        this.setState({login:false})
    }
    loginFacebook = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        config.auth().signInWithPopup(provider).then(function(result) {
        }).catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage)
        });
        this.setState({login:false})
    }
    loginTwitter=()=>{
        // var provider = new firebase.auth.TwitterAuthProvider();
        // firebase.auth().signInWithPopup(provider).then(function(result) {
        //     // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        //     // You can use these server side with your app's credentials to access the Twitter API.
        //     var token = result.credential.accessToken;
        //     var secret = result.credential.secret;
        //     // The signed-in user info.
        //     var user = result.user;
        //     // ...
        //   }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     // ...
        //   });
        // this.setState({login:false})
        alert("coming soon")
    }
    signUp=()=>{
        config.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(() => {
            this.setState({
                register:false,
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
            password:'',
            email:''
        })
    }
    logout =() => {config.auth().signOut();window.location.reload(); };
    gocms=()=>{this.setState({redirect:true})}
    redirect=()=>{if(this.state.redirect){return <Redirect to='/cms'/>}}

render() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        isStopped:false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    const { classes } = this.props;
    return (
        <Preloader>
        
        <div style={{position:'relative',height:this.props.location.pathname==='/tutorial'?'10vh': '100vh',backgroundColor:'#f8f8f8'}}>
        {this.redirect()}
        <div style={{display: 'flex', justifyContent: 'center'}}>
        { this.props.location.pathname==='/tutorial'?null:
        !this.props.user ?
        <Button variant="contained" color="secondary" className={classes.button2} onClick={this.onChangeTrue('login')}>Getting Started</Button>
        :
        <Button variant="contained" color="primary" className={classes.button2} onClick={this.gocms}>Getting Started</Button>
        }
        </div> 
            <Nav style={{position:'absolute',height: '100%'}}>
                <All>
                <NavDesktop>
                <Content2><Link to="/" style={{textDecoration: 'none'}}><Logo>ProjectCMS</Logo></Link></Content2>
                <Content2><A>|</A></Content2>
                <Content2>
                    { !this.props.user ? <A onClick={this.onChangeTrue('login')}> Getting Started</A>
                    :
                    <Link to="/cms" style={{textDecoration: 'none'}}><A>Getting Started</A></Link>
                    }
                </Content2>
                <Content2><A>|</A></Content2>
                <Content2>
                    <Link to="/tutorial" style={{textDecoration: 'none'}}><A>Tutorial</A></Link>
                </Content2>
                <Content2><A>|</A></Content2>
                <Content2>
                    <A onClick={this.onChangeTrue('register')}>Register</A>
                </Content2> 
                </NavDesktop> 
                {this.props.user ?
                <div>
                    <Content> 
                        <Button variant="contained" color="secondary" className={classes.button} onClick={this.logout}>Logout<ExitIcon className={classes.rightIcon}/></Button>
                    </Content> 
                    <Content> 
                        <Avatar alt="Remy Sharp" src={this.props.photoURL? this.props.photoURL:avatarImage}  />
                    </Content> 
                    <Content> 
                        <P>{this.props.user}</P>
                    </Content> 
                </div>
                :
                    <Content> 
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.onChangeTrue('login')}>Login<ExitIcon className={classes.rightIcon}/></Button>
                    </Content>  
                }  
                 </All>              
            </Nav>
            <NavMobile>
            <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                {this.props.location.pathname!=='/'?<Link to="/" ><li>ProjectCMS</li></Link>:null}
                { !this.props.user ? <a onClick={this.onChangeTrue('login')}><li> Getting Started</li></a>
                :
                <Link to="/cms" style={{textDecoration: 'none'}}><li>Getting Started</li></Link>
                }
                {this.props.location.pathname!=='/tutorial'?<Link to="/tutorial" style={{textDecoration: 'none'}}><li>Tutorial</li></Link>:null}
                <a onClick={this.onChangeTrue('register')}><li>Register</li></a>
                </ul>
            </div>
            </nav>
            </NavMobile>
            {this.props.location.pathname==='/tutorial'?null:
            <Lottie options={defaultOptions}
              style={{position:'absolute'}}
            />
            }
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
            <LoginTemplate
            recaptcha={this.state.recaptcha}
            onChange={this.onChangeRecaptchA}
            open={this.state.register}
            onClose={this.onChangeFalse('register')}
            label='REGISTER'
            submit={this.clickSubmit}
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
    user:state.user,
    photoURL:state.photoURL
    })
export default withRouter(connect(mapStateToProps)(withStyles(styles)(AppWithConnect)));


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

const Nav = styled.div`
position: absolute;
padding: 2.5vh 2vw;
width: 100%;
z-index: 1;
`;
const NavDesktop = styled.div`
@media screen and (max-width: 600px) {
	display: none;
}
`;
const NavMobile = styled.div`
display:none;
position:absolute;
@media screen and (max-width: 600px) {
	display: block;
}
`;

const All = styled.div`
float: left;
width: 100%;
`;
const Content = styled.div`
float: right;
padding: 0.5vw;
display: flex;
justify-content: center;
height: 5vh;
align-items: center;
`;
const Content2 = styled.div`
float: left;
display: flex;
justify-content: center;
align-items: center;
height: 5vh;
padding: 0.5vw;

`;
const A = styled.p`
color:#464646;
font-size:1vw
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
:hover {
    color: #000;
    cursor:pointer;
  }
`;
const Logo = styled.p`
color:#000;
font-size:1.5vw;
font-weight: bolder;
`;

const P = styled.p`
color:#464646;
font-size:1vw;
margin-top:1vh;
font-weight: 500;
@media screen and (max-width: 600px) {
	display: none;
}
`;

