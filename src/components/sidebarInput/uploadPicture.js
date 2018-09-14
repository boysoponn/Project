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
   marginTop:10,
  },
  input: {
    marginTop:10,
  },
});

class UploadPicture extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  const { classes } = this.props;
  return (
    <div>
      <div className={classes.imgUpload}><img src={this.props.url } /></div>
      <input
        type="file" onChange={this.props.onChange}
        accept="image/*"
        className={classes.input}
        id="fileUpload"
        multiple
        type="file"
      />
      <div>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button} onClick={this.props.onClick}>
          Upload
        </Button>
      </label>
      </div>
    </div>
  );
}
}
UploadPicture.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadPicture);
