import React, {Component} from 'react';
import Message from './message';
import _ from 'lodash';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
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
      messages: messages
    });
  }
  
  render() {
    let messageNodes = this.state.messages.map((dd) => {
      return (
        
        <div className="card">
          <div className="card-content">
          <Message 
            msgKey={dd.key} 
            message = {dd.message} 
            db={this.props.db}
          />
          </div>
        </div>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}
export default MessageList;