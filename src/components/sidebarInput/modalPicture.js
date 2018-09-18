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
    url:[],
    messages:[],
    howMany:0,
    imageName:'',
    };
    // this.getData();
}

  getData(){
    let app = config.database().ref('/project/sopon/images');
    app.on('value', snapshot => { 
    let pictrueVal = snapshot.val();
    let pictrue = _(pictrueVal)
                    .keys()
                    .map(pictrueKey => {
                      let cloned = _.clone(pictrueVal[pictrueKey]);
                      cloned.key = pictrueKey;
                      return cloned;
                    }).value();
                    this.setState({
                      imageName: _.map(pictrue,'imageName'),
                      howMany:snapshot.numChildren(),
                    });     
                 let row=0;
    while(row<this.state.howMany){
      config.storage().ref(`images/${this.state.imageName[row]}`).getDownloadURL().then(url => {
        this.state.url.push(url);
    })
      row++;
    }        
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
          {this.state.url.map((imageUrl) => {
          return <div><img src={imageUrl} alt=""/></div> 
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