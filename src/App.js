import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import exmessage from '../src/components/ex-message';
import Member from './components/Member';
import Cms from './components/CMS';
import ImageUpload from './components/tab';

const user = localStorage.getItem('user');

function withRestriction(WrappedComponent) {
  return class RestrictedComponent extends React.Component {
    render() {
      if (!user) {
         return <Redirect to='/login' />
      }else{
       return <WrappedComponent {...this.props} />
      }  
    }
  }
}
const CMSWithRestriction = withRestriction(Cms);


class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Route exact path="/" component={Member} />
          <Route path="/login" component={Member} />   
          <Route path="/message" component={exmessage} />  
          <Route path="/tab" component={ImageUpload} />  
          <Route path="/cms" component={CMSWithRestriction} />                
        </div>
      </Router>
    );
   }
  }
  export default App;