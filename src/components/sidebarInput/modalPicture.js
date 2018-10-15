import React from 'react';
import _ from 'lodash';
import config from '../../config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux'
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
   width:130
  },
  image:{
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      opacity:0.5,
    },
  }
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

  imageOnClick = image => () => {
    // this.props.dispatch(getUrlImage(image.imageName));
    let dbCon = config.database().ref('project/test/'+this.props.tabs+'/heroContent');
    dbCon.update({
      heroBackgroundImage:image.imageName,
    }); 
  };

  handleOpen () {
    this.setState({ open: true });
    this.getData();
  };

  handleClose (){
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.imgUpload}>
        <img className={classes.gg} src={this.props.imagePick} alt="uploadPicture"/>
        </div>
        <Button variant="contained" onClick={this.handleOpen} component="span" color="secondary" className={classes.button}>
        Choose image
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
         <DialogTitle id="alert-dialog-slide-title">
            {"Choose Image"}
        </DialogTitle>
        <div className={classes.root}>
        <GridList cellHeight={200} cellWidth={1000} className={classes.gridList}>
        {this.state.images.map((image => (
          <GridListTile >
            <img src={image.imageName} key={image._key} className={classes.image} onClick={this.imageOnClick(image)} alt="gg" />
            {/* <GridListTileBar/> */}
          </GridListTile>
        )))}
      </GridList>
      </div>
        </Dialog>
      </div>
    );
  }
}

ModalChooseImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ModalChooseImageWrapped = withStyles(styles)(ModalChooseImage);
const mapStateToProps = state => ({
  tabs: state.tabs ,
})

export default connect(mapStateToProps)(ModalChooseImageWrapped);