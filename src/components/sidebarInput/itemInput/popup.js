import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import Message from './snackbar';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
dialog:{
  textAlign:'center',
},
button:{
  width: 100,
},
GroupButton:{
  margin: '0 50 30',
  textAlign: 'center',
  display: 'block' 
},
});

class AlertDialogSlide extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <Message
      message={this.props.message}
      messageOpen={this.props.messageOpen}
      messageClose={this.props.messageClose}
      />
      <div>
        <Dialog
          open={this.props.open?this.props.open:false}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.close}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          className={classes.dialog}
        >
          <DialogTitle id="alert-dialog-slide-title" >
          {this.props.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            {this.props.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.GroupButton}>
            <Button className={classes.button} variant="contained" color="secondary" onClick={this.props.yes} color="primary">
              Yes
            </Button>
            <Button className={classes.button} variant="contained"  onClick={this.props.no} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      </div>
    );
  }
}
export default withStyles(styles)(AlertDialogSlide);

