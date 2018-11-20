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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import SaveIcon from '@material-ui/icons/Save';
import Popover from '@material-ui/core/Popover';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/AddCircle';
import ChooseLink from './itemInput/chooseLink';
import InputTextarea from './itemInput/inputTextarea';
import ModalPictureGlobal from './itemInput/modalPictureGlobal';
// import Selection from './itemInput/selection';
import _ from 'lodash';
import InputText from './itemInput/inputText';

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper,
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
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  imgitem:{
    width:200,
    height:100,
    '&:hover': {
      cursor: 'pointer',
    },
  }
});

class CarouselInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    open: false,
    openItem:false,
    openItem1:false,
    image: null,
    anchorEl: null,
    anchorEl2: null,
    anchorEl3: null,
    linkTarget:'',
    link:'',
    key:'',
    label:'',
    groupData:[]
    };  
  }

  save =  () => {
    let dbCon = config.database().ref('global/'+this.props.user+'/footerContent/');
    dbCon.child(this.state.key).update({
      link:this.state.link,
      linkTarget:this.state.linkTarget,
      label:this.state.label,
    });
    alert("saved") 
  };
  delete = menubar => () =>{
    let dbCon = config.database().ref('global/'+this.props.user+'/footerContent/');
    dbCon.child(menubar._key).remove();
  }
  addItem=()=>{
    let dbCon = config.database().ref('global/'+this.props.user+'/footerContent/');
    dbCon.push({
      typeGroup:false,
      label:'Link',
      link:'',
      linkTarget:'_blank',
      // group:{
      //   link1:{
      //     label:'Link',
      //     link:'',
      //     linkTarget:'_blank',
      //     typeGroup:false
      //   },
      // }
    })  
  }
  OpenItem  = menubar => () =>{
    this.setState({ 
    openItem1: true ,
    linkTarget:menubar.linkTarget,
    link:menubar.link,
    key:menubar._key,
    label:menubar.label,
    typeGroup:menubar.typeGroup
  });
};
onChangeTypeGroup=menubar=>(e)=>{
  let dbCon = config.database().ref('global/'+this.props.user+'/footerContent');
  dbCon.child(menubar._key).update({
    typeGroup:e.target.checked ,
  });
 }
  CloseItem = () => {this.setState({ openItem1: false });};
  handleClick = () => {this.setState(state => ({ open: !state.open }));};
  handleClickOpen = (event) => {this.setState({ anchorEl: event.currentTarget, });};
  handleClose = () => {this.setState({ anchorEl: null, });};
  handleClickOpen2 = (event) => {this.setState({ anchorEl2: event.currentTarget, });};
  handleClose2 = () => {this.setState({ anchorEl2: null, });};
  handleClose3 = () => {this.setState({ anchorEl3: null, });};
  onChangeLinkTarget = (e) =>{this.setState({ linkTarget:e.target.value})};
  onChangeLink = (e) =>{this.setState({ link:e.target.value})};
  onChangeLabel = (e) =>{this.setState({ label:e.target.value})};

  render() {
    const { classes } = this.props;
    const { anchorEl,anchorEl2 ,anchorEl3} = this.state;
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);
    return (
      <div className={classes.root} >
        <List disablePadding={true}>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Footer" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button variant="contained" onClick={this.handleClickOpen} component="span" color="secondary" >
            Footer Setting
            </Button>
            <Popover
              open={open}
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
            </Popover>
            </ListItem>
            </List>
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputText 
              Label="Title" 
              value={this.props.footerTitle}  
              animate={this.props.footerTitleAnimate} 
              onChange={this.props.footerTitleOnChange} 
              duration={this.props.footerTitleDuration}   
              FontFamily={this.props.footerTitleFontFamily}
              FontSize={this.props.footerTitleFontSize}
              FontWeight={this.props.footerTitleFontWeight}
              FontStyle={this.props.footerTitleFontStyle}
              Status={this.props.footerTitleStatus}
              onChangeAnimate={this.props.footerTitleOnChangeAnimate}              
              onChangeDuration={this.props.footerTitleOnChangeDuration}            
              onChangeFontFamily={this.props.footerTitleOnChangeFontFamily}
              onChangeFontSize={this.props.footerTitleOnChangeFontSize}                           
              onChangeFontWeight={this.props.footerTitleOnChangeFontWeight}
              onChangeFontStyle={this.props.footerTitleOnChangeFontStyle}              
              onChangeStatus={this.props.footerTitleOnChangeStatus}
              color={this.props.footerTitleColor}
              onChangeColor={this.props.footerTitleOnChangeColor}
              />
              </ListItem>
            </List>

            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputTextarea 
              label="Description" 
              value={this.props.footerDescription}  
              animate={this.props.footerDescriptionAnimate} 
              onChange={this.props.footerDescriptionOnChange} 
              duration={this.props.footerDescriptionDuration}   
              FontFamily={this.props.footerDescriptionFontFamily}
              FontSize={this.props.footerDescriptionFontSize}
              FontWeight={this.props.footerDescriptionFontWeight}
              FontStyle={this.props.footerDescriptionFontStyle}
              Status={this.props.footerDescriptionStatus}
              onChangeAnimate={this.props.footerDescriptionOnChangeAnimate}              
              onChangeDuration={this.props.footerDescriptionOnChangeDuration}            
              onChangeFontFamily={this.props.footerDescriptionOnChangeFontFamily}
              onChangeFontSize={this.props.footerDescriptionOnChangeFontSize}                           
              onChangeFontWeight={this.props.footerDescriptionOnChangeFontWeight}
              onChangeFontStyle={this.props.footerDescriptionOnChangeFontStyle}              
              onChangeStatus={this.props.footerDescriptionOnChangeStatus}
              color={this.props.footerDescriptionColor}
              onChangeColor={this.props.footerDescriptionOnChangeColor}
              />
              </ListItem>
            </List>

            <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button  variant="contained" onClick={this.handleClickOpen2} component="span" color="secondary" className={classes.button}>
             Menubar Items
            </Button>
            <Popover
              open={open2}
              anchorEl={anchorEl2}
              onClose={this.handleClose2}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
            {this.props.footerContent.map((menubar => (
            <ListItem key={menubar._key}>
             <Button  variant="contained" onClick={this.OpenItem(menubar)} component="span" color="secondary" className={classes.button}>{menubar.label}</Button>
            <DeleteIcon  onClick={this.delete(menubar)} className={classes.rightIcon}/>
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
            {this.state.typeGroup === false ?
            <Button variant="contained" color="secondary" onClick={this.save} className={classes.save} >
              SAVE
            <SaveIcon className={classes.rightIcon} />
            </Button>
            :
            <Button variant="contained" color="secondary" onClick={this.saveInGroup} className={classes.save} >
              SAVE
            <SaveIcon className={classes.rightIcon} />
            </Button>
            }
            </DialogTitle> 
              <List>
              <ListItem>
              <InputText 
              Label="Label" 
              value={this.state.label}  
              animate={this.props.heroTitleAnimate} 
              onChange={this.onChangeLabel} 
              duration={this.props.heroTitleDuration}   
              FontFamily={this.props.heroTitleFontFamily}
              FontSize={this.props.heroTitleFontSize}
              FontWeight={this.props.heroTitleFontWeight}
              FontStyle={this.props.heroTitleFontStyle}
              Status={this.props.heroTitleStatus}
              displayAnimate ={'none'}
              onChangeAnimate={this.props.heroTitleOnChangeAnimate}              
              onChangeDuration={this.props.heroTitleOnChangeDuration}            
              onChangeFontFamily={this.props.heroTitleOnChangeFontFamily}
              onChangeFontSize={this.props.heroTitleOnChangeFontSize}                           
              onChangeFontWeight={this.props.heroTitleOnChangeFontWeight}
              onChangeFontStyle={this.props.heroTitleOnChangeFontStyle}              
              onChangeStatus={this.props.heroTitleOnChangeStatus}
              color={this.props.heroTitleColor}
              onChangeColor={this.props.heroTitleOnChangeColor}
              />
              </ListItem>
              <ListItem>
              <ChooseLink
                  value={this.state.link}
                  onChange={this.onChangeLink}
                  target={this.state.linkTarget}
                  onChangeTarget={this.onChangeLinkTarget}
              />
              </ListItem>
              </List>
              </Dialog>
            </Popover>
            </ListItem>           
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

CarouselInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  urlImage: state.urlImage ,
  tabs:state.tabs,
  user:state.user
})
export default connect(mapStateToProps)(withStyles(styles)(CarouselInput));

   
