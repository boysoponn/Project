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
import ChooseLink from './chooseLink';
import Text from './Text';
import Selection from './selection';
import _ from 'lodash';

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
    let dbCon = config.database().ref('project/'+this.props.user+'/globel/menubar/');
    dbCon.child(this.state.key).update({
      link:this.state.link,
      linkTarget:this.state.linkTarget,
      label:this.state.label,
    });
    alert("saved") 
  };
  saveInGroup =  () => {
    let dbCon = config.database().ref('project/'+this.props.user+'/globel/menubar/'+this.state.keys+'/group');
    dbCon.child(this.state.key).update({
      link:this.state.link,
      linkTarget:this.state.linkTarget,
      label:this.state.label,
    });
    alert("saved") 
  };
  delete = menubar => () =>{
    let dbCon = config.database().ref('project/'+this.props.user+'/globel/menubar/');
    dbCon.child(menubar._key).remove();
  }
  deleteInGroup = menubar => () =>{
    let dbCon = config.database().ref('project/'+this.props.user+'/globel/menubar/'+this.state.keys+'/group');
    dbCon.child(menubar._key).remove();
  }
  addItemLittle= () => {
    let dbCon = config.database().ref('project/'+this.props.user+'/globel/menubar/'+this.state.keys+'/group');
    dbCon.push({
          label:'Link',
          link:'',
          linkTarget:'_blank',
          typeGroup:true
    }) 
  }
  addItem=()=>{
    let dbCon = config.database().ref('project/'+this.props.user+'/globel/menubar/');
    dbCon.push({
      typeGroup:false,
      label:'Link',
      link:'',
      linkTarget:'_blank',
      group:{
        link1:{
          label:'Link',
          link:'',
          linkTarget:'_blank',
          typeGroup:false
        },
      }
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
  let dbCon = config.database().ref('project/'+this.props.user+'/globel/menubar');
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
  handleClickOpen3 = menubar => (event) => {
    let globel = config.database().ref('project/'+this.props.user+'/globel/menubar/'+menubar._key+'/group');
    globel.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => { prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
    this.setState({groupData:snapshotArr,});});
    this.setState({anchorEl3: event.currentTarget,keys:menubar._key,typeGroup:menubar.typeGroup});};
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
            </Popover>
            </ListItem>
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
            {this.props.menubar.map((menubar => (
              menubar.typeGroup === false ? 
            <ListItem key={menubar._key}>
             <Button  variant="contained" onClick={this.OpenItem(menubar)} component="span" color="secondary" className={classes.button}>{menubar.label}</Button>
            <DeleteIcon  onClick={this.delete(menubar)} className={classes.rightIcon}/>
            <Selection value={menubar.typeGroup}labelTrue='Group 'labelFalse='Not Group'onClick={this.onChangeTypeGroup(menubar)}/>
            </ListItem>
            :
            <ListItem key={menubar._key}>
             <Button  variant="contained" onClick={this.handleClickOpen3(menubar)} component="span" color="secondary" className={classes.button}>{menubar.label}</Button>
               <DeleteIcon  onClick={this.delete(menubar)} className={classes.rightIcon}/>
               <Selection value={menubar.typeGroup}labelTrue='Group 'labelFalse='Not Group'onClick={this.onChangeTypeGroup(menubar)}/>
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
              <Text
              label='Label'
              value={this.state.label}
              onChange={this.onChangeLabel}
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
                 <Popover
              open={open3}
              anchorEl={anchorEl3}
              onClose={this.handleClose3}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
            >
              {this.state.groupData.map((menubar => (
                <ListItem key={menubar._key}>
                 <Button  variant="contained" onClick={this.OpenItem(menubar)} component="span" color="secondary" className={classes.button}>{menubar.label}</Button>
                <DeleteIcon  onClick={this.deleteInGroup(menubar)} className={classes.rightIcon}/>
                </ListItem>
                 )))}
            <ListItem>
            <Button variant="contained"  onClick={this.addItemLittle} component="span" color="secondary" className={classes.paper}>
              ADD
              <AddIcon className={classes.rightIcon} />
            </Button>
            </ListItem>
                 </Popover>
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

   
