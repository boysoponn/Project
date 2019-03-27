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
import PickColor from './itemInput/pickColor'
import Dropdown from './itemInput/dropdown'
// import Selection from './itemInput/selection';
import InputText from './itemInput/inputText';
import Message from './itemInput/messageWarning';
import {chooseTemplate} from '../actions';

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper,
  },
  popover:{
    height:300
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
    hover:''
    };  
  }

  save =  () => {
    let dbCon = config.database().ref('global/'+this.props.email+'/footerItem/');
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
    this.setState({
      openItem1:null,
      messageSave:true
    })
  };
  delete = menubar => () =>{
    let dbCon = config.database().ref('global/'+this.props.email+'/footerItem/');
    dbCon.child(menubar._key).remove();
    this.setState({
      messageDelete:true
    }) 
  }
  addItem=()=>{
    let dbCon = config.database().ref('global/'+this.props.email+'/footerItem/');
    dbCon.push({
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
    this.setState({
      messageAdd:true
    })
  }
  OpenItem  = menubar => () =>{
    this.setState({ 
    openItem1: true ,
    linkTarget:menubar.linkTarget,
    link:menubar.link,
    key:menubar._key,
    label:menubar.label,
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

  saveItemSocial =  () => {
    let dbCon = config.database().ref('global/'+this.props.email+'/footerSocial/');
    dbCon.child(this.state.key).update({
      link:this.state.link,
      linkTarget:this.state.linkTarget,
      label:this.state.label,
      FontSize:this.state.FontSize,
      FontStyle:this.state.FontStyle,
      Status:this.state.Status,
      Color:this.state.Color,
      hover:this.state.hover
    });
    this.setState({
      openItemSocial:null,
      messageSave:true
    }) 
  };
  deleteItemSocial = menubar => () =>{
    let dbCon = config.database().ref('global/'+this.props.email+'/footerSocial/');
    dbCon.child(menubar._key).remove();
    this.setState({
      messageDelete:true
    })
  }
  addItemSocial=()=>{
    let dbCon = config.database().ref('global/'+this.props.email+'/footerSocial/');
    dbCon.push({
      link:'',
      label:'far fa-sticky-note',
      linkTarget:'_blank',
      FontSize:'30',
      FontStyle:'normal',
      Status:'block',
      Color:'#000000',
      hover:'#ffffff'
    })  
    this.setState({
      messageAdd:true
    })
  }
  OpenItemSocial  = menubar => () =>{
    this.setState({ 
    openItemSocial: true ,
    linkTarget:menubar.linkTarget,
    link:menubar.link,
    key:menubar._key,
    label:menubar.label,
    FontSize:menubar.FontSize,
    FontStyle:menubar.FontStyle,
    Status:menubar.Status,
    Color:menubar.Color,
    hover:menubar.hover
  });
  };

  CloseItem =name=> () => {this.setState({ [name]: false });};
  handleClick = () => {if(this.props.chooseTemplate==='Footer'){this.props.dispatch(chooseTemplate("null"))}else{this.props.dispatch(chooseTemplate('Footer'))}};
  handleClickOpen =name=> (event) => {this.setState({ [name]: event.currentTarget, });};
  handleClose =name=> () => {this.setState({ [name]: null, });};
  onChangeFalse= name=>()=>{this.setState({[name]:false})};
  onChangeColor = name=> (color) => {this.setState({  [name]: color.hex });};
  onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};

  render() {
    const pickColor={fontSize: '14px',marginLeft:10,margin: 0};
    const { classes } = this.props;
    const { anchorEl,anchorEl2,anchorEl3 } = this.state;
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
            <ListItemText inset primary="Footer" />
            {this.props.chooseTemplate ==='Footer'? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.props.chooseTemplate ==='Footer'?true:false} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={true}>
              <ListItem  className={classes.nested}>
              <InputText 
              Label="Title" 
              font={this.props.font}
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

            <List component="div" disablePadding={true}>
              <ListItem  className={classes.nested}>
              <InputTextarea 
              label="Description" 
              font={this.props.font}
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
            <Button variant="contained" onClick={this.handleClickOpen('anchorEl')} component="span" color="secondary" >
            Footer Setting
            </Button>
            <Popover
              className={classes.popover}
              open={open}
              anchorEl={anchorEl}
              onClose={this.handleClose('anchorEl')}
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
              <p style={pickColor}> Background Color&nbsp;&nbsp;&nbsp;</p>
              <PickColor
              padding="0"
              width="80px"
              height="20px"
              color={this.props.footerbackgroundColor}
              onChange={this.props.footerbackgroundOnChangeColor}
              />
            </ListItem>
            {this.props.footer=== 'footerNo1' ? null :
            <ListItem>
              <Dropdown
                label='position'
                value={this.props.footerPosition}
                onChange={this.props.footerPositionOnChange}
                choice = {[
                  {_key:'1',value: 'center' , label: 'Center'},
                  {_key:'2',value: 'right', label: 'Right'},
                  {_key:'3',value: 'left', label: 'Left'}
                ]}
              />
            </ListItem>
            }
            </Popover>
            </ListItem>
            </List>
            <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button  variant="contained" onClick={this.handleClickOpen('anchorEl2')} component="span" color="secondary" className={classes.button}>
             Footer Items
            </Button>
            <Popover
              className={classes.popover}
              open={open2}
              anchorEl={anchorEl2}
              onClose={this.handleClose('anchorEl2')}
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
            {this.props.footerItem.map((menubar => (
            <ListItem key={menubar._key}>
             <Button  variant="contained" onClick={this.OpenItem(menubar)} component="span" color="secondary" className={classes.button}>{menubar.label}</Button>
            <DeleteIcon  onClick={this.delete(menubar)} className={classes.rightIcon}/>
            </ListItem>
             )))}           
            <Dialog
              maxWidth="lg"
              open={this.state.openItem1}
              TransitionComponent={Transition}
              onClose={this.CloseItem('openItem1')}
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
            <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button  variant="contained" onClick={this.handleClickOpen('anchorEl3')} component="span" color="secondary" className={classes.button}>
             Footer social
            </Button>
            <Popover
              className={classes.popover}
              open={open3}
              anchorEl={anchorEl3}
              onClose={this.handleClose('anchorEl3')}
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
            <Button variant="contained"  onClick={this.addItemSocial} component="span" color="secondary" className={classes.paper}>
              ADD
              <AddIcon className={classes.rightIcon} />
            </Button>
            </ListItem> 
            {this.props.footerSocial.map((menubar => (
            <ListItem key={menubar._key}>
             <Button  variant="contained" onClick={this.OpenItemSocial(menubar)} component="span" color="secondary" className={classes.button}>{menubar.label}</Button>
            <DeleteIcon  onClick={this.deleteItemSocial(menubar)} className={classes.rightIcon}/>
            </ListItem>
             )))}  
            <Dialog
              maxWidth="lg"
              open={this.state.openItemSocial}
              TransitionComponent={Transition}
              onClose={this.CloseItem('openItemSocial')}
            >
            <DialogTitle>
            Item         
            <Button variant="contained" color="secondary" onClick={this.saveItemSocial} className={classes.save} >
              SAVE
            <SaveIcon className={classes.rightIcon} />
            </Button>
            </DialogTitle> 
              <List>
              <ListItem>
              <InputText 
              Label="Label" 
              value={this.state.label}  
              color={this.state.Color}
              FontSize={this.state.FontSize}
              FontStyle={this.state.FontStyle}
              Status={this.state.Status}
              color={this.state.Color}
              hoverColor={this.state.hover}
              displayAnimate ={true}
              displayFontFamily={true}
              displayFontWeight={true}
              showHoverColor={true}
              linkTo={'https://fontawesome.com/icons?d=gallery'}
              showLinkTo={true}

              onChange={this.onChangeValue('label')}
              onChangeFontSize={this.onChangeValue('FontSize')}                           
              onChangeFontWeight={this.onChangeValue('hover')}
              onChangeFontStyle={this.onChangeValue('FontStyle')}              
              onChangeStatus={this.onChangeValue('Status')}
              onChangeColor={this.onChangeColor('Color')}
              onChangeHoverColor={this.onChangeColor('hover')}
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
  email:state.email,
  chooseTemplate:state.chooseTemplate
})
export default connect(mapStateToProps)(withStyles(styles)(CarouselInput));

   
