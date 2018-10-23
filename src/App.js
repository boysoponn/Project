import React, { Component } from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import exmessage from './components/ex-message';
import Member from './components/Member';
import Cms from './components/CMS';
import AppWithConnect from './components/header';
import config from './config'
import { connect } from 'react-redux'
import {login} from './components/actions'

class App extends Component {
  state = {
    authenticated: false,
    username:""
  };

  componentDidMount() {
    config.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState ({
            authenticated: true,
            email:authenticated.email
          })
        : this.setState(() => ({
            authenticated: false,
          }));      
        if(this.state.authenticated){
          const pathemail=this.state.email.replace(".","");
          let app = config.database().ref('user/'+pathemail);
          app.on('value', snapshot => { 
          let dataVal = snapshot.val();
          let data = _(dataVal)
                          .keys()
                          .map(dataKey => {
                            let cloned = _.clone(dataVal[dataKey]);
                            cloned.key = dataKey;
                            return cloned;
                          }).value();
                          this.setState({
                            username: _.map(data,'Username'),
                          }); 
          }); 
        }
    }); 
  }

  render() {
 this.props.dispatch(login(this.state.username));
    const user = this.state.username;
    function withRestriction(WrappedComponent) {
      return class RestrictedComponent extends React.Component {
        render() {
          if (user ==="") {
             return <Redirect to='/login' />
          }else{
           return <WrappedComponent {...this.props} />
          }  
        }
      }
    }
    const CMSWithRestriction = withRestriction(Cms);

function withRestriction2(WrappedComponent2) {
  return class RestrictedComponent extends React.Component {
    render() {
      if (user !== "") {
         return <Redirect to='/cms' />
      }else{
       return <WrappedComponent2 {...this.props} />
      }  
    }
  }
}
const LoginWithRestriction = withRestriction2(Member);
    return (
      <Router>
        <div> 
          <Route exact path="/" component={LoginWithRestriction} />
          <Route path="/login" component={LoginWithRestriction} />   
          <Route path="/message" component={exmessage} /> 
          <Route path="/cms" component={CMSWithRestriction} />   
          <Route path="/header" component={AppWithConnect} />   
          <Route path="/test" component={Cms} />                
        </div>
      </Router>
    );
   }
  }
  const mapStateToProps = state => ({
    user: state.user ,
  })
  export default connect(mapStateToProps)(App);