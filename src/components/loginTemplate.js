import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components'
import Social from './template/buttonSocial';

class FormDialog extends React.Component {
  state = {
    open: false,
  };


  render() {
    return (
      
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle  id="form-dialog-title">{this.props.label}</DialogTitle>
          <form onSubmit={this.props.submit}>
          <div>
          <DialogContent style={{paddingTop:0}}>
          {this.props.textField.map((data) => 
            <TextField
              style={{marginTop:30}}
              key={data._key}
              autoFocus
              margin="dense"
              label={data.label}
              type={data.type}
              fullWidth
              required
              autoComplete="off"
              value={data.value}
              onChange={data.onChange}
            />
          )}
          <Content style={{paddingTop:20}}>
            <Button  color="primary" type="submit">{this.props.labelButton}</Button>
          </Content>
            {this.props.social === true ?
          <Content >
            <Social onClick={this.props.facebook} social='facebook'/>
            <Social onClick={this.props.google} social='google'/>
            <Social onClick={this.props.twitter} social='twitter'/>
          </Content>
            :null}
          </DialogContent>
          </div>
          </form>
        </Dialog>
        
    );
  }
}

export default  FormDialog; 

const Content = styled.div`
text-align: center;
padding-top:20px;
`;