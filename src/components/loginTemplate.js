import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components'
import Social from './template/buttonSocial';
import ReCAPTCHA from "react-google-recaptcha";
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FormDialog extends React.Component {
  state = {
    open: false,
  };


  render() {
    const recaptchaRef = React.createRef();
    return (
      
        <Dialog
          TransitionComponent={Transition}
          open={this.props.open}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle  id="form-dialog-title">{this.props.label}</DialogTitle>
          <form onSubmit={this.props.submit}>

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
           {this.props.recaptcha?
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdRLpEUAAAAAGX-vss-WN3KL0Xoifa6FFewGxn3"
            onChange={this.props.onChange}
          />:null}
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