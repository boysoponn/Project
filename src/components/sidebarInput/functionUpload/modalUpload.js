import React from 'react';
import config from '../../../config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import UploadPicture from './uploadPicture';

const styles = theme => ({
  modal:{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  },
  button:{
    width:100,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,  
  },
});

class ModalUpload extends React.Component {
  constructor(props){
    super(props);
    this.handleChangeUploadPicture = this.handleChangeUploadPicture.bind(this);
    this.handleUploadPicture = this.handleUploadPicture.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
    open: false,
    image: [],
    imageName:[],
    Howmany:0,
    url: 'http://via.placeholder.com/400x300',
    };  
  }
  handleOpen = () => {
    this.setState({ 
      open: true,
      Howmany:0,
      image: [],
      imageName:[],
    });
  };

  handleClose = () => {
    this.setState({ 
      open: false,
      Howmany:0,
      image: [],
      imageName:[],
    });
  };
  
  handleChangeUploadPicture = e => {
    if (e.target.files[0]) {
      this.setState({
        Howmany:e.target.files.length
      });
    let row=0;
    while(row<e.target.files.length){
      this.state.image.push(e.target.files[row])
      this.state.imageName.push(e.target.files[row].name)
      row++;
    }  
    }
  }

  handleUploadPicture = e => {
    if(this.state.image !== [] ){ 
      let row=0; 
      while(row<this.state.Howmany){  
        const image = this.state.image[row] ; 
        config.storage().ref(`images/${this.state.imageName[row]}`).put(image);
      let dbCon = config.database().ref('/project/sopon/images');
      dbCon.push({
        imageName:this.state.imageName[row],
      }); 
      row++;
      }
      }
      this.setState({
        Howmany:0,
        image: [],
        imageName:[],
      });
      this.handleClose();
      alert("Uploaded");  
    }
  

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" onClick={this.handleOpen}component="span" color="secondary" className={classes.button}>
        Upload
        </Button>
        <Modal
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
          <UploadPicture 
              onChange={this.handleChangeUploadPicture} 
              onClick={this.handleUploadPicture}
              label={this.state.imageName}
          />
          </div>
        </Modal>
      </div>
    );
  }
}

ModalUpload.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ModalUploadWrapped = withStyles(styles)(ModalUpload);

export default ModalUploadWrapped;