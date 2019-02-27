import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  imgUpload:{
    marginRight:10,
    border:"3px Solid red ",
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
  },
  input: {
    marginTop:10,
    display:'none',
  },
});

class UploadPicture extends React.Component {
  render() {
  const { classes } = this.props;
  
  return (
    <div>
      <div>
      {this.props.label.map((imageName) => {
          return <div><p key={imageName._key}>{imageName}</p></div> 
        })}
      </div>
      <input
        type="file" 
        onChange={this.props.onChange}
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
      />   
      <Button variant="contained" color="secondary" component="span" className={classes.button} onClick={this.props.onClick}>
          OK
      </Button>
    </div>
  );
}
}
UploadPicture.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadPicture);
