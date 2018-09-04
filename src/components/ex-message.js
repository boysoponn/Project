import React, { Component } from 'react';
import MessageList from './message/messagelist';
import MessageBox from './message/messagebox';
import firebase from 'firebase';
class allmessage extends Component {
  render() {
    return (
      <div className="container"> 
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
   }
  }
  export default allmessage;