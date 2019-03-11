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
import ModalPictureGlobal from './itemInput/modalPictureGlobal';
import PickColor from './itemInput/pickColor'
// import Selection from './itemInput/selection';
import _ from 'lodash';
import InputText from './itemInput/inputText';
import Message from './itemInput/messageWarning';

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
  popover:{
    height:400
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
    let dbCon = config.database().ref('global/'+this.props.email+'/menubarItem/');
    dbCon.child(this.state.key).update({
      link:this.state.link,
      linkTarget:this.state.linkTarget,
      label:this.state.label,
      Animate:this.state.Animate,
      Duration:this.state.Duration,
      FontFamily:this.state.FontFamily,
      FontSize:this.state.FontSize,
      FontWeight:this.state.FontWeight,
      FontStyle:this.state.FontStyle,
      Status:this.state.Status,
      Color:this.state.Color,
    });
    this.setState({messageSave:true,openItem1:false})
  };

  delete = menubar => () =>{
    let dbCon = config.database().ref('global/'+this.props.email+'/menubarItem/');
    dbCon.child(menubar._key).remove();
    this.setState({messageDelete:true})
  }

  addItem=()=>{
    let dbCon = config.database().ref('global/'+this.props.email+'/menubarItem/');
    dbCon.push({
      typeGroup:false,
      label:'Link',
      link:'',
      linkTarget:'_blank',
      Animate:'none',
      Duration:'1s',
      FontFamily:'Roboto Mono',
      FontSize:'16',
      FontWeight:'400',
      FontStyle:'normal',
      Status:'block',
      Color:'#000000',
    })  
    this.setState({messageAdd:true})
  }
  OpenItem  = menubar => () =>{
    this.setState({ 
    openItem1: true ,
    linkTarget:menubar.linkTarget,
    link:menubar.link,
    key:menubar._key,
    label:menubar.label,
    typeGroup:menubar.typeGroup,
    Animate:menubar.Animate,
    Duration:menubar.Duration,
    FontFamily:menubar.FontFamily,
    FontSize:menubar.FontSize,
    FontWeight:menubar.FontWeight,
    FontStyle:menubar.FontStyle,
    Status:menubar.Status,
    Color:menubar.Color,
  });
};
onChangeTypeGroup=menubar=>(e)=>{
  let dbCon = config.database().ref('global/'+this.props.email+'/menubarItem');
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

  onChangeFalse= name=>()=>{this.setState({[name]:false})};
  onChangeColor = name=> (color) => {this.setState({  [name]: color.hex });};
  onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};

  render() {
    const pickColor={fontSize: '14px',marginLeft:10,margin: 0};
    const { classes } = this.props;
    const { anchorEl,anchorEl2 ,anchorEl3} = this.state;
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);
    return (
      <div className={classes.root} >
        <Message
        {...this.state}
        messageSaveClose={this.onChangeFalse('messageSave')}
        messageAddClose={this.onChangeFalse('messageAdd')}
        messageDeleteClose={this.onChangeFalse('messageDelete')}
        /> 
        <List disablePadding={true}>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Menubar" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button variant="contained" onClick={this.handleClickOpen} component="span" color="secondary" >
            Menubar Setting
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
            <ListItem>
              {this.props.menubar==="MenubarNo3"? <p style={pickColor}> Menubar Color&nbsp;&nbsp;&nbsp;</p>:<p style={pickColor}>Background Color&nbsp;&nbsp;&nbsp;</p>}
              <PickColor
              padding="0"
              width="80px"
              height="20px"
              color={this.props.menubarbackgroundColor}
              onChange={this.props.menubarbackgroundOnChangeColor}
            />
            </ListItem>
            </Popover>
            </ListItem>
            </List>
          {this.props.menubar === 'MenubarNo2' ?
          <List component="div" disablePadding={false}>
              <ListItem className={classes.nested}>
              <ModalPictureGlobal
              imagePick={this.props.menubarLogo}
              path="/menubarLogo"
              />
              </ListItem>
              {/* <ListItem>
              <ChooseLink
                  value={this.props.linkLogo}
                  onChange={this.props.onChangeLinkLogo}
                  target={this.props.linkLogoTarget}
                  onChangeTarget={this.props.onChangeLinkLogoTarget}
              />
              </ListItem> */}
            </List>
            :null
          }
            <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button  variant="contained" onClick={this.handleClickOpen2} component="span" color="secondary" className={classes.button}>
             Menubar Items
            </Button>
            <Popover
              className={classes.popover}
              open={open2}
              anchorEl={anchorEl2}
              onClose={this.handleClose2}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
            <ListItem>
            <Button variant="contained"  onClick={this.addItem} component="span" color="secondary" className={classes.paper}>
              ADD
              <AddIcon className={classes.rightIcon} />
            </Button>
            </ListItem> 
            {this.props.menubarItem.map((menubar => (
            <ListItem key={menubar._key}>
             <Button  variant="contained" onClick={this.OpenItem(menubar)} component="span" color="secondary" className={classes.button}>{menubar.label}</Button>
            <DeleteIcon  onClick={this.delete(menubar)} className={classes.rightIcon}/>
            {/* <Selection value={menubar.typeGroup}labelTrue='Group 'labelFalse='Not Group'onClick={this.onChangeTypeGroup(menubar)}/> */}
            </ListItem>
             )))}           
            
            <Dialog
              maxWidth="lg"
              open={this.state.openItem1}
              TransitionComponent={Transition}
              onClose={this.CloseItem}
            >
            <DialogTitle>
            Item
            
            <Button variant="contained" color="secondary" onClick={this.save} className={classes.save} >
              SAVE
            <SaveIcon className={classes.rightIcon} />
            </Button>
            </DialogTitle> 
              <List>
              <ListItem>
              <InputText 
              Label="Label" 
              font={this.props.font}
              value={this.state.label}  
              color={this.state.Color}
              animate={this.state.Animate} 
              duration={this.state.Duration}   
              FontFamily={this.state.FontFamily}
              FontSize={this.state.FontSize}
              FontWeight={this.state.FontWeight}
              FontStyle={this.state.FontStyle}
              Status={this.state.Status}
              color={this.state.Color}
              displayAnimate ={true}

              onChange={this.onChangeValue('label')}
              onChangeAnimate={this.onChangeValue('Animate')}           
              onChangeDuration={this.onChangeValue('Duration')}            
              onChangeFontFamily={this.onChangeValue('FontFamily')}
              onChangeFontSize={this.onChangeValue('FontSize')}                           
              onChangeFontWeight={this.onChangeValue('FontWeight')}
              onChangeFontStyle={this.onChangeValue('FontStyle')}              
              onChangeStatus={this.onChangeValue('Status')}
              onChangeColor={this.onChangeColor('Color')}
              />
              </ListItem>
              <ListItem>
              <ChooseLink
                  value={this.state.link}
                  onChange={this.onChangeValue('link')}
                  target={this.state.linkTarget}
                  onChangeTarget={this.onChangeValue('linkTarget')}
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
  user:state.user,
  email:state.email
})
export default connect(mapStateToProps)(withStyles(styles)(CarouselInput));

   
