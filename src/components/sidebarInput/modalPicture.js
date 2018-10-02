import React from 'react';
import _ from 'lodash';
import config from '../../config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  modal:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridList: {
    width: 700,
    height: 600,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  imgUpload:{
    marginRight:10,
    marginBottom:10,
    border:"3px Solid red ",
  },
  gg:{
    width:200,
  },
  button: {
   marginTop:10,
  },
  input: {
    marginTop:10,
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
    imagePick:''
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
      console.log({pictures})

      this.setState({
        images: pictures,
      });    
    });    
 }

  imageOnClick = image => () => {
    this.setState({  
      imagePick: image.imageName
    });
  };

  handleOpen () {
    this.setState({ open: true });
  };

  handleClose (){
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.imgUpload}><img className={classes.gg} src={this.state.imagePick} alt="uploadPicture"/></div>
        <Button variant="contained" onClick={this.handleOpen} component="span" color="secondary" className={classes.button}>
        Choose image
        </Button>
        <Modal
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
        > 
        <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: '50' }}>
          <ListSubheader component="div">Images</ListSubheader>
        </GridListTile>
        {this.state.images.map((image => (
          <GridListTile >
            <img src={image.imageName} key={image._key} onClick={this.imageOnClick(image)} alt="gg" />
            {/* <GridListTileBar/> */}
          </GridListTile>
        )))}
      </GridList>
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