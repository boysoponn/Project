import React from 'react'
import Message from './snackbar';

class MessageWarning extends React.Component {
  render() {

    return (
      <div>
        <Message
        message='Item Saved'
        messageOpen={this.props.messageSave}
        messageClose={this.props.messageSaveClose}
        />
        <Message
        message='Item Deleted'
        variant='error'
        messageOpen={this.props.messageDelete}
        messageClose={this.props.messageDeleteClose}
        />
        <Message
        message='Item Added'
        variant='warning'
        messageOpen={this.props.messageAdd}
        messageClose={this.props.messageAddClose}
        />
      </div>
    )
  }
}

export default MessageWarning