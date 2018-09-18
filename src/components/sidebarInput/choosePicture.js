import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ModalChooseImageWrapped from './modalPicture';

const styles = theme => ({
  imgUpload:{
    marginRight:10,
    marginBottom:10,
    border:"3px Solid red ",
  },
  button: {
   marginTop:10,
  },
  input: {
    marginTop:10,
  },
});

class ChoosePicture extends React.Component {
  render() {
  const { classes } = this.props;
  return (
    <div>
      <div className={classes.imgUpload}><img src={this.props.url} alt="uploadPicture"/></div>
      <div>
      <ModalChooseImageWrapped/>
      </div>
    </div>
  );
}
}
ChoosePicture.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChoosePicture);
