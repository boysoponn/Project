import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Redirect} from 'react-router-dom';
import CMS from './components/CMS';
import Homepage from './components/homepage';
import config from './config';
import Header from './components/header';
import { connect } from 'react-redux';
import {login,loginEmail,photoURL,project} from './components/actions';
import Tutorial from './components/tutorial';

class App extends Component {
  state = {
    authenticated: false,
    username:"",
    email:"",
    photoURL:'',
    project:''
  };


  componentDidMount() {
    config.auth().onAuthStateChanged((authenticated) => {
      authenticated ? 
        authenticated.displayName ?
        this.setState ({
            authenticated: true,
            email:authenticated.email.replace(/\.|@|com/g,""),
            username:authenticated.displayName,
            photoURL:authenticated.photoURL
          })
        :
        this.setState ({
          authenticated: true,
          username:authenticated.email.replace(/@.*/, ""),
          email:authenticated.email.replace(/\.|@|com/g,""),
        })
      : 
      this.setState(() => ({
            authenticated: false,
      }));      
    }); 
  }
  componentDidUpdate(){
    if(this.state.email !== "" && this.props.project == ""){
    let dbCon = config.database().ref('project owner/'+this.state.email);
    dbCon.on('value', async (snapshot) => { 
    const snapshotValue = snapshot.val(); 
    if(snapshotValue!==null){
    this.props.dispatch(project(snapshotValue))      
    }
  }) 
}
  }
  render() {
    if(this.state.authenticated){ 
    this.props.dispatch(loginEmail(this.state.email));
    this.props.dispatch(login(this.state.username));
    this.props.dispatch(photoURL(this.state.photoURL));
    }
    const user = this.state.username;

    function withRestriction(WrappedComponent) {
      return class RestrictedComponent extends React.Component { 
        render() {
          if (user ==="") {
             return <Redirect to='/' />
          }else{
           return <WrappedComponent {...this.props} />
          }  
        }
      }
    }
    const CMSWithRestriction = withRestriction(CMS);

    function showNav(Nav) {
      return class showNav extends React.Component {
        render() {
          if (this.props.location.pathname === "/" || this.props.location.pathname === "/tutorial") {
            return <Nav {...this.props} />
          }else{
            return null;
          }  
        }
      }
    }
    const Navbar = showNav(Header);
    return (
      <div> 
      <Router> 
        <div> 
          <Route exact path="/" component={Header} />   
          <Route exact path="/tutorial" component={Header} />       
          <Route exact path="/tutorial"  component={Tutorial} />  
          <Route path="/cms"     component={CMSWithRestriction}/>            
        </div>
      </Router>
      </div>
    );
   }
  }
  const mapStateToProps = state => ({
    user: state.user ,
    project:state.project
  })
  export default connect(mapStateToProps)(App);

