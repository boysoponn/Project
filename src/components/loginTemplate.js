import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components'
import Social from './template/buttonSocial';
import ReCAPTCHA from "react-google-recaptcha";
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  button:{
  width:'90%'
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FormDialog extends React.Component {
  state = {
    open: false,
  };


  render() {
    const recaptchaRef = React.createRef();
    const { classes } = this.props;
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
          <Content>
            <Grid container  spacing={24}>
                <Grid item xs={12} >
                  <Button  variant="contained" color="primary" type="submit" className={classes.button}>{this.props.labelButton} </Button>
                </Grid>
                {!this.props.labelButtonReset?null:
                <Grid item xs={12} >
                  <Button  variant="contained" disabled={this.props.email?false:true}  onClick={this.props.onClickReset} className={classes.button} >{this.props.labelButtonReset}</Button>
                </Grid>
                }
            </Grid>     
          </Content>
            {this.props.social === true ?
          <Content >
            <Grid container  spacing={24}>
              <Grid item xs={12} sm={6}>
                <Social onClick={this.props.facebook} social='fab fa-facebook-f' text="facebook"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Social onClick={this.props.google} color="secondary" social='fab fa-google-plus' text="Gmail"/>
              </Grid>
            </Grid>
          </Content>
            :null}
          </DialogContent>
          </form>
        </Dialog>
        
    );
  }
}

export default  withStyles(styles)(FormDialog); 

const Content = styled.div`
text-align: center;
padding-top:20px;
`;