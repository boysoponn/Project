import React from 'react';
import _ from 'lodash';
import config from '../../config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  modal:{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow:'hidden',
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,  
  },
});

class ModalChooseImage extends React.Component {
  constructor(props){  
  super(props);
  this.getData = this.getData.bind(this);
  this.handleOpen = this.handleOpen.bind(this);
  this.handleClose = this.handleClose.bind(this);
    this.state = {
    open: false,
    images:[],
    imageName:'',
    };
}

componentDidMount() {
  this.getData();
}

  getData(){
    const app = config.database().ref('/project/sopon/images');
    app.on('value', async (snapshot) => { 
      const snapshotValue = snapshot.val();
      const snapshotArr = _.keys(snapshotValue).reduce((prev, cur) => {
        prev.push({
          _key: cur,
          ...snapshotValue[cur]
        });
        return prev;     
      }, []);

      const pictures = await Promise.all(snapshotArr.map(async (obj) => {
        obj.imageName = await config.storage().ref(`images/${obj.imageName}`).getDownloadURL();
        return Promise.resolve(obj);
      }));

      this.setState({
        images: pictures,
      });     
    });    
 }

  handleOpen = () => {
    this.setState({ open: true });  
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" onClick={this.handleOpen} component="span" color="secondary" className={classes.button}>
        Choose image
        </Button>
        <Modal
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
          {this.state.images.map((image) => {
          return <div key={image._key}><img src={image.imageName} alt=""/></div> 
        })}
          </div>
        </Modal>
      </div>
    );
  }
}

ModalChooseImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ModalChooseImageWrapped = withStyles(styles)(ModalChooseImage);

export default ModalChooseImageWrapped;