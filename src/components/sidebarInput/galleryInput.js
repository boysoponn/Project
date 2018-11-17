import React from 'react';
import { connect } from 'react-redux'
import config from '../../config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InputText from './itemInput/inputText';
import InputTextarea from './itemInput/inputTextarea';
import ModalPicture from './itemInput/modalPicture';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Popover from '@material-ui/core/Popover';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/AddCircle';
import PickColor from './itemInput/pickColor'

function Transition(props) {
  return <Slide direction="right" {...props} />;
}
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  button: {
    width:130
   },
   paper: {
    width:200
  },
  rightIcon: {
    marginLeft:5,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  save:{
    width: 100,
    marginRight: 5,
    float:'right',
  },
  imgitem:{
    width:200,
    height:100,
    '&:hover': {
      cursor: 'pointer',
    },
  }
});

class NestedList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    open: false,
    image: null,
    open1: false,
    openItem1:false,
    };  
  }

  delete = gallery => () =>{
    let dbCon = config.database().ref('project/'+this.props.user+'/'+this.props.tabs+"/galleryItem");
    dbCon.child(gallery._key).remove();
  }
  addItem=()=>{
    let dbCon = config.database().ref('project/'+this.props.user+'/'+this.props.tabs+"/galleryItem");
    dbCon.push({
      image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2F3038591-poster-p-1-secrets-of-the-most-productive-peoplehow-to-work-different-productivity-styles.jpg?alt=media&token=aca301c1-8ed2-4353-942e-39df3bff3ed0'
    })  
  }
  OpenItem = gallery => () => { this.setState({ 
    openItem1: true ,
    galleryImage:gallery.image,
    galleryPath:gallery._key,
  });
};

  handleClick = () => {this.setState(state => ({ open: !state.open }));};
  handleClickOpen = (event) => {this.setState({ anchorEl: event.currentTarget, });};
  handleClose = () => {this.setState({ anchorEl: null, });};
  CloseItem = () => {this.setState({ openItem1: false });};

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open1 = Boolean(anchorEl);
    const pickColor={
      fontSize: '16px',
      marginLeft:10
    };
    return (
      <div className={classes.root} >
        <List disablePadding={true}>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Gallery" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.open} timeout="auto" unmountOnExit>    
            <List component="div" disablePadding={false}>
                <ListItem>
                  <p style={pickColor}> Background Color&nbsp;&nbsp;&nbsp;</p>
                  <PickColor
                  padding="0"
                  width="80px"
                  height="20px"
                  color={this.props.galleryBackgroundColor}
                  onChange={this.props.galleryBackgroundOnChangeColor}
                  />
                </ListItem>
              </List> 
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputText 
              Label="Title" 
              value={this.props.galleryTitle}  
              animate={this.props.galleryTitleAnimate} 
              onChange={this.props.galleryTitleOnChange} 
              duration={this.props.galleryTitleDuration}   
              FontFamily={this.props.galleryTitleFontFamily}
              FontSize={this.props.galleryTitleFontSize}
              FontWeight={this.props.galleryTitleFontWeight}
              FontStyle={this.props.galleryTitleFontStyle}
              Status={this.props.galleryTitleStatus}
              onChangeAnimate={this.props.galleryTitleOnChangeAnimate}              
              onChangeDuration={this.props.galleryTitleOnChangeDuration}            
              onChangeFontFamily={this.props.galleryTitleOnChangeFontFamily}
              onChangeFontSize={this.props.galleryTitleOnChangeFontSize}                           
              onChangeFontWeight={this.props.galleryTitleOnChangeFontWeight}
              onChangeFontStyle={this.props.galleryTitleOnChangeFontStyle}              
              onChangeStatus={this.props.galleryTitleOnChangeStatus}
              color={this.props.galleryTitleColor}
              onChangeColor={this.props.galleryTitleOnChangeColor}
              />
              </ListItem>
            </List>
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputTextarea 
              label="Description" 
              value={this.props.galleryDescription}  
              animate={this.props.galleryDescriptionAnimate} 
              onChange={this.props.galleryDescriptionOnChange} 
              duration={this.props.galleryDescriptionDuration}   
              FontFamily={this.props.galleryDescriptionFontFamily}
              FontSize={this.props.galleryDescriptionFontSize}
              FontWeight={this.props.galleryDescriptionFontWeight}
              FontStyle={this.props.galleryDescriptionFontStyle}
              Status={this.props.galleryDescriptionStatus}
              onChangeAnimate={this.props.galleryDescriptionOnChangeAnimate}              
              onChangeDuration={this.props.galleryDescriptionOnChangeDuration}            
              onChangeFontFamily={this.props.galleryDescriptionOnChangeFontFamily}
              onChangeFontSize={this.props.galleryDescriptionOnChangeFontSize}                           
              onChangeFontWeight={this.props.galleryDescriptionOnChangeFontWeight}
              onChangeFontStyle={this.props.galleryDescriptionOnChangeFontStyle}              
              onChangeStatus={this.props.galleryDescriptionOnChangeStatus}
              color={this.props.galleryDescriptionColor}
              onChangeColor={this.props.galleryDescriptionOnChangeColor}
              />
              </ListItem>
            </List>
          <ListItem className={classes.nested}>
            <Button  variant="contained" onClick={this.handleClickOpen} component="span" color="secondary" className={classes.button}>
             gallery Items
            </Button>
            <Popover
              open={open1}
              anchorEl={anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
            {this.props.galleryContent.map((gallery => (
            <ListItem key={gallery._key}>
            <img src={gallery.image} alt="item"className={classes.imgitem} onClick={this.OpenItem(gallery)}/>
            <DeleteIcon  onClick={this.delete(gallery)} className={classes.rightIcon}/>
            </ListItem>
             )))} 
             <ListItem>
            <Button variant="contained"  onClick={this.addItem} component="span" color="secondary" className={classes.paper}>
              ADD
              <AddIcon className={classes.rightIcon} />
            </Button>
            </ListItem>
            <Dialog
              maxWidth="lg"
              open={this.state.openItem1}
              TransitionComponent={Transition}
              onClose={this.CloseItem}
            >
            <DialogTitle>
            Item
            </DialogTitle>
            <p style={{marginLeft:20}}>*Should use image 350x300px</p>
              <ListItem>
                <ModalPicture
                imagePick={this.state.galleryImage}
                path={"/galleryItem/"+this.state.galleryPath}
                />
              </ListItem>
            </Dialog>
            </Popover>
            </ListItem>          
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  urlImage: state.urlImage ,
  tabs:state.tabs,
  user:state.user
})

export default connect(mapStateToProps)(withStyles(styles)(NestedList));