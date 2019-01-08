import React from 'react';
import config from '../../../config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import UploadPicture from './uploadPicture';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from 'react-redux'

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
  rightIcon: {
    marginLeft: theme.spacing.unit,
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
      url:[],
    });
  };
  
  handleChangeUploadPicture(e) {
    if (e.target.files.length > 0) {
    let row=0;
    let images = [];
    while(row<e.target.files.length){
      images.push(e.target.files.item(row));
      row++;
    }  
    this.setState({
      image: images,
      imageName: images.map(image => image.name),
      url: images.map(image => image.url),
      Howmany: e.target.files.length
    });
    }
  }

  handleUploadPicture (e){
    if(this.state.image !== [] ){ 
      let row=0; 
      while(row<this.state.Howmany){  
        const image = this.state.image[row] ; 
        config.storage().ref(`${this.props.email}/${this.state.imageName[row]}`).put(image);
      let dbCon = config.database().ref('image/'+this.props.email);
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
      <div className={this.props.className}>
        <Button variant="contained" onClick={this.handleOpen} component="span" color="secondary" className={classes.button}>
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
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
              url={this.state.url}
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
const mapStateToProps = state => ({
  tabs: state.tabs ,
  user:state.user,
  email:state.email
})

export default connect(mapStateToProps)(ModalUploadWrapped);