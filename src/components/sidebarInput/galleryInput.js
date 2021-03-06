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
import Grid from '@material-ui/core/Grid';
import ChooseLink from './itemInput/chooseLink';
import SaveIcon from '@material-ui/icons/Save';
import Dropdown from './itemInput/dropdown';
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

  },
  imgitem:{
    width:200,
    height:100,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  popover:{
    height:500
  },
  hover:{
    height:20
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
    anchorEl2:null
    };  
  }

  delete = gallery => () =>{
    let dbCon = config.database().ref('project/'+this.props.email+'/'+this.props.tabs+"/galleryItem");
    dbCon.child(gallery._key).remove();
    this.setState({messageDelete:true})
  }
  addItem=()=>{
    let dbCon = config.database().ref('project/'+this.props.email+'/'+this.props.tabs+"/galleryItem");
    dbCon.push({
      image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2F3038591-poster-p-1-secrets-of-the-most-productive-peoplehow-to-work-different-productivity-styles.jpg?alt=media&token=aca301c1-8ed2-4353-942e-39df3bff3ed0',
      title:'title',
      titleAnimate:'none',
      titleDuration:'1s',
      titleFontFamily:'Roboto Mono',
      titleFontSize:'25',
      titleFontWeight:'400',
      titleFontStyle:'normal',
      titleStatus:'block',
      titleColor:'#ffffff',
      description:'description',
      descriptionAnimate:'none',
      descriptionDuration:'1s',
      descriptionFontFamily:'Roboto Mono',
      descriptionFontSize:'13',
      descriptionFontWeight:'400',
      descriptionFontStyle:'normal',
      descriptionStatus:'block',
      descriptionColor:'#ffffff',
      link:'',
      linkTarget:'_blank',
      galleryHover:'sadie'
    })  
    this.setState({messageAdd:true})
  }
  OpenItem = gallery => () => { this.setState({ 
    openItem1: true ,
    galleryImage:gallery.image,
    galleryPath:gallery._key,
    galleryTitle:gallery.title,
    galleryTitleAnimate:gallery.titleAnimate,
    galleryTitleDuration:gallery.titleDuration,
    galleryTitleFontFamily:gallery.titleFontFamily,
    galleryTitleFontSize:gallery.titleFontSize,
    galleryTitleFontWeight:gallery.titleFontWeight,
    galleryTitleFontStyle:gallery.titleFontStyle,
    galleryTitleStatus:gallery.titleStatus,
    galleryTitleColor:gallery.titleColor,
    galleryDescription:gallery.description,
    galleryDescriptionAnimate:gallery.descriptionAnimate,
    galleryDescriptionDuration:gallery.descriptionDuration,
    galleryDescriptionFontFamily:gallery.descriptionFontFamily,
    galleryDescriptionFontSize:gallery.descriptionFontSize,
    galleryDescriptionFontWeight:gallery.descriptionFontWeight,
    galleryDescriptionFontStyle:gallery.descriptionFontStyle,
    galleryDescriptionStatus:gallery.descriptionStatus,
    galleryDescriptionColor:gallery.descriptionColor,
    galleryLink:gallery.link,
    galleryLinkTarget:gallery.linkTarget,
    galleryHover:gallery.galleryHover
  });
};

  save  = () => {
  let dbCon = config.database().ref('project/'+this.props.email+'/'+this.props.tabs+"/galleryItem");
  dbCon.child(this.state.galleryPath).update({
    title:this.state.galleryTitle,
    titleAnimate:this.state.galleryTitleAnimate,
    titleDuration:this.state.galleryTitleDuration,
    titleFontFamily:this.state.galleryTitleFontFamily,
    titleFontSize:this.state.galleryTitleFontSize,
    titleFontWeight:this.state.galleryTitleFontWeight,
    titleFontStyle:this.state.galleryTitleFontStyle,
    titleStatus:this.state.galleryTitleStatus,
    titleColor:this.state.galleryTitleColor,
    description:this.state.galleryDescription,
    descriptionAnimate:this.state.galleryDescriptionAnimate,
    descriptionDuration:this.state.galleryDescriptionDuration,
    descriptionFontFamily:this.state.galleryDescriptionFontFamily,
    descriptionFontSize:this.state.galleryDescriptionFontSize,
    descriptionFontWeight:this.state.galleryDescriptionFontWeight,
    descriptionFontStyle:this.state.galleryDescriptionFontStyle,
    descriptionStatus:this.state.galleryDescriptionStatus,
    descriptionColor:this.state.galleryDescriptionColor,
    link:this.state.galleryLink,
    linkTarget:this.state.galleryLinkTarget,
    galleryHover:this.state.galleryHover
  });
  this.setState({messageSave:true,openItem1:false})
  };
  onChangeFalse= name=>()=>{this.setState({[name]:false})};
  handleClick = () => {if(this.props.chooseTemplate==='Gallery'){this.props.dispatch(chooseTemplate("null"))}else{this.props.dispatch(chooseTemplate('Gallery'))}};
  handleClickOpen =name=> (event) => {this.setState({ [name]: event.currentTarget, });};
  handleClose =name=> () => {this.setState({ [name]: null, });};
  CloseItem = () => {this.setState({ openItem1: false });};
  onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};
  onChangeColor = name=> (color) => {this.setState({  [name]: color.hex });};
  
  render() {
    const { classes } = this.props;
    const { anchorEl,anchorEl2 } = this.state;
    const open1 = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const pickColor={fontSize: '14px',marginLeft:10,margin: 0};
    
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
            <ListItemText inset primary="Gallery" />
            {this.props.chooseTemplate ==='Gallery'? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.props.chooseTemplate ==='Gallery'?true:false} timeout="auto" unmountOnExit>    
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputText 
              Label="Title"
              font={this.props.font} 
              value={this.props.galleryTitle}  
              animate={this.props.galleryTitleAnimate} 
              onChange={this.props.galleryTitleOnChange} 
              duration={this.props.galleryTitleDuration}   
              FontFamily={this.props.galleryTitleFontFamily}
              FontSize={this.props.galleryTitleFontSize}
              FontWeight={this.props.galleryTitleFontWeight}
              FontStyle={this.props.galleryTitleFontStyle}
              Status={this.props.galleryTitleStatus}
              position={this.props.galleryTitlePosition}
              onChangePosition={this.props.galleryTitleOnChangePosition}   
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
              font={this.props.font}
              value={this.props.galleryDescription}  
              animate={this.props.galleryDescriptionAnimate} 
              onChange={this.props.galleryDescriptionOnChange} 
              duration={this.props.galleryDescriptionDuration}   
              FontFamily={this.props.galleryDescriptionFontFamily}
              FontSize={this.props.galleryDescriptionFontSize}
              FontWeight={this.props.galleryDescriptionFontWeight}
              FontStyle={this.props.galleryDescriptionFontStyle}
              Status={this.props.galleryDescriptionStatus}
              position={this.props.galleryDescriptionPosition}
              onChangePosition={this.props.galleryDescriptionOnChangePosition}
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
              
              <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button variant="contained" onClick={this.handleClickOpen('anchorEl2')} component="span" color="secondary" >
            Gallery Setting
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
              <p style={pickColor}> Background Color&nbsp;&nbsp;&nbsp;</p>
              <PickColor
              padding="0"
              width="80px"
              height="20px"
              color={this.props.galleryBackgroundColor}
              onChange={this.props.galleryBackgroundOnChangeColor}
              />
              </ListItem>
            </Popover>
            </ListItem>
            </List>

            </List>
          <ListItem className={classes.nested}>
            <Button  variant="contained" onClick={this.handleClickOpen('anchorEl')} component="span" color="secondary" className={classes.button}>
             Gallery Items
            </Button>
            <Popover
              className={classes.popover}
              open={open1}
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
            <Button variant="contained"  onClick={this.addItem} component="span" color="secondary" className={classes.paper}>
              ADD
              <AddIcon className={classes.rightIcon} />
            </Button>
            </ListItem>
            {this.props.galleryContent.map((gallery => (
            <ListItem key={gallery._key}>
            <img src={gallery.image} alt="item"className={classes.imgitem} onClick={this.OpenItem(gallery)}/>
            <DeleteIcon  onClick={this.delete(gallery)} className={classes.rightIcon}/>
            </ListItem>
             )))} 
            <Dialog
              maxWidth="xl"
              open={this.state.openItem1}
              TransitionComponent={Transition}
              onClose={this.CloseItem}
            >           
            <Grid container spacing={24}>
              <Grid item xs={5}>              
            <DialogTitle>
            Item
            </DialogTitle>
              <List>
              <ListItem className={classes.hover}>
                  <Dropdown 
                    label='Hover'
                    value={this.state.galleryHover}
                    onChange={this.onChangeValue('galleryHover')}
                    choice = {[
                      {_key:'1',value: 'none' , label: 'None'},
                      {_key:'2',value: 'lily', label: 'Lily'},
                      {_key:'3',value: 'sadie', label: 'Sadie'},
                      {_key:'4',value: 'honey', label: 'Honey'},
                      {_key:'5',value: 'layla', label: 'Layla'},
                      {_key:'6',value: 'zoe', label: 'Zoe'},
                      {_key:'7',value: 'oscar', label: 'Oscar'},
                      {_key:'8',value: 'marley', label: 'Marley'},
                      {_key:'9',value: 'ruby', label: 'Ruby'},
                      {_key:'10',value: 'roxy', label: 'Roxy'},
                      {_key:'11',value: 'romeo', label: 'Romeo'},
                      {_key:'12',value: 'bubba', label: 'Bubba'},
                      {_key:'13',value: 'dexter', label: 'Dexter'},
                      {_key:'14',value: 'sarah', label: 'Sarah'},
                      {_key:'15',value: 'chico', label: 'Chico'},
                      {_key:'16',value: 'milo', label: 'Milo'},
                      {_key:'17',value: 'julia', label: 'Julia'},
                      {_key:'18',value: 'goliath', label: 'Goliath'},
                      {_key:'19',value: 'selena', label: 'Selena'},
                      {_key:'20',value: 'apollo', label: 'Apollo'},
                      {_key:'21',value: 'steve', label: 'Steve'},
                      {_key:'22',value: 'moses', label: 'Moses'},
                      {_key:'23',value: 'jazz', label: 'Jazz'},
                      {_key:'24',value: 'ming', label: 'Ming'},
                      {_key:'25',value: 'lexi', label: 'Lexi'},
                      {_key:'26',value: 'duke', label: 'Duke'},
                    ]}
                  />
                </ListItem>
                <ListItem>
                  <ModalPicture
                    imagePick={this.state.galleryImage}
                    path={"/galleryItem/"+this.state.galleryPath}
                  />
                </ListItem>
                <ListItem>
                 <Button variant="contained" onClick={this.save} color="secondary"  className={classes.save}>SAVE<SaveIcon className={classes.rightIcon} /></Button>
                </ListItem> 
              </List>
              </Grid>
              <Grid item xs={7}>
              <DialogTitle></DialogTitle>
                  <ListItem>
                    <InputText 
                    Label="Title" 
                    font={this.props.font}
                    value={this.state.galleryTitle}  
                    animate={this.state.galleryTitleAnimate} 
                    duration={this.state.galleryTitleDuration}   
                    FontFamily={this.state.galleryTitleFontFamily}
                    FontSize={this.state.galleryTitleFontSize}
                    FontWeight={this.state.galleryTitleFontWeight}
                    FontStyle={this.state.galleryTitleFontStyle}
                    Status={this.state.galleryTitleStatus}
                    color={this.state.galleryTitleColor}
                    displayAnimate ={true}
                    onChange={this.onChangeValue('galleryTitle')}  
                    onChangeAnimate={this.onChangeValue('galleryTitleAnimate')}              
                    onChangeDuration={this.onChangeValue('galleryTitleDuration')}            
                    onChangeFontFamily={this.onChangeValue('galleryTitleFontFamily')} 
                    onChangeFontSize={this.onChangeValue('galleryTitleFontSize')}                            
                    onChangeFontWeight={this.onChangeValue('galleryTitleFontWeight')} 
                    onChangeFontStyle={this.onChangeValue('galleryTitleFontStyle')}               
                    onChangeStatus={this.onChangeValue('galleryTitleStatus')} 
                    onChangeColor={this.onChangeColor('galleryTitleColor')} 
                    />
                  </ListItem>
                  <ListItem>
                    <InputTextarea
                    label="Description" 
                    font={this.props.font}
                    value={this.state.galleryDescription}  
                    animate={this.state.galleryDescriptionAnimate} 
                    duration={this.state.galleryDescriptionDuration}   
                    FontFamily={this.state.galleryDescriptionFontFamily}
                    FontSize={this.state.galleryDescriptionFontSize}
                    FontWeight={this.state.galleryDescriptionFontWeight}
                    FontStyle={this.state.galleryDescriptionFontStyle}
                    Status={this.state.galleryDescriptionStatus}
                    color={this.state.galleryDescriptionColor}
                    displayAnimate ={true}
                    onChange={this.onChangeValue('galleryDescription')}  
                    onChangeAnimate={this.onChangeValue('galleryDescriptionAnimate')}              
                    onChangeDuration={this.onChangeValue('galleryDescriptionDuration')}            
                    onChangeFontFamily={this.onChangeValue('galleryDescriptionFontFamily')} 
                    onChangeFontSize={this.onChangeValue('galleryDescriptionFontSize')}                            
                    onChangeFontWeight={this.onChangeValue('galleryDescriptionFontWeight')} 
                    onChangeFontStyle={this.onChangeValue('galleryDescriptionFontStyle')}               
                    onChangeStatus={this.onChangeValue('galleryDescriptionStatus')} 
                    onChangeColor={this.onChangeColor('galleryDescriptionColor')} 
                    />
                  </ListItem>
                  <ListItem>
                    <ChooseLink
                      value={this.state.galleryLink}
                      onChange={this.onChangeValue('galleryLink')}
                      target={this.state.galleryLinkTarget}
                      onChangeTarget={this.onChangeValue('galleryLinkTarget')}
                    />
                  </ListItem>
              </Grid>
            </Grid>
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
  user:state.user,
  email:state.email,
  chooseTemplate:state.chooseTemplate
})

export default connect(mapStateToProps)(withStyles(styles)(NestedList));