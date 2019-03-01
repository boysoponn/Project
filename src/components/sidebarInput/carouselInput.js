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
import Selection from './itemInput/selection';
import Dropdown from './itemInput/dropdown';
import ModalPicture from './itemInput/modalPicture';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import SaveIcon from '@material-ui/icons/Save';
import Popover from '@material-ui/core/Popover';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/AddCircle';
import PickColor from './itemInput/pickColor'
import InputText from './itemInput/inputText';
import InputTextarea from './itemInput/inputTextarea';
import Message from './itemInput/messageWarning';


function Transition(props) {
  return <Slide direction="right" {...props} />;
}

const styles = theme => ({
  popover:{
    height:500
  },
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

class NestedList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    open: false,
    openItem:false,
    openItem1:false,
    image: null,
    anchorEl: null,
    anchorEl2: null,
    };  
  }

  save =  () => {
    let dbCon = config.database().ref('project/'+this.props.email+'/'+this.props.tabs+"/carouselContent/");
    dbCon.child(this.state.carouselPath).update({
      title:this.state.carouselTitle,
      description:this.state.carouselDescription,
      titleFontFamily:this.state.carouselTitleFontFamily,
      titleFontWeight:this.state.carouselTitleFontWeight,
      titleFontSize:this.state.carouselTitleFontSize,
      titleFontStyle:this.state.carouselTitleFontStyle,
      titleStatus:this.state.carouselTitleStatus,
      titleColor:this.state.carouselTitleColor,
      descriptionFontFamily:this.state.carouselDescriptionFontFamily,
      descriptionFontWeight:this.state.carouselDescriptionFontWeight,
      descriptionFontStyle:this.state.carouselDescriptionFontStyle,
      descriptionFontSize:this.state.carouselDescriptionFontSize,
      descriptionStatus:this.state.carouselDescriptionStatus,
      descriptionColor:this.state.carouselDescriptionColor,
    });
    this.setState({messageSave:true,anchorEl2:false})
  };
  delete = carousel => () =>{
    let dbCon = config.database().ref('project/'+this.props.email+'/'+this.props.tabs+"/carouselContent/");
    dbCon.child(carousel._key).remove();
    this.setState({messageDelete:true})
  }
  addItem=()=>{
    let dbCon = config.database().ref('project/'+this.props.email+'/'+this.props.tabs+"/carouselContent/");
    dbCon.push({
      title:'Title',
      description:'Description',
      titleFontFamily:'Montserrat',
      titleFontWeight:'700',
      titleFontSize:'70',
      titleFontStyle:'normal',
      titleStatus:'block',
      titleColor:'#ffffff',
      descriptionFontFamily:'Montserrat',
      descriptionFontWeight:'400',
      descriptionFontSize:'30',
      descriptionFontStyle:'normal',
      descriptionStatus:'block',
      descriptionColor:'#ffffff',  
      image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2F3038591-poster-p-1-secrets-of-the-most-productive-peoplehow-to-work-different-productivity-styles.jpg?alt=media&token=aca301c1-8ed2-4353-942e-39df3bff3ed0'
    }) 
    this.setState({messageAdd:true})
  }
  OpenItem = carousel => () => { this.setState({ 
    openItem1: true ,
    carouselTitle:carousel.title,
    carouselDescription:carousel.description,
    carouselImage:carousel.image,
    carouselPath:carousel._key,
    carouselTitleFontFamily:carousel.titleFontFamily,
    carouselTitleFontWeight:carousel.titleFontWeight,
    carouselTitleFontStyle:carousel.titleFontStyle,
    carouselTitleFontSize:carousel.titleFontSize,
    carouselTitleStatus:carousel.titleStatus,
    carouselTitleColor:carousel.titleColor,
    carouselDescriptionFontFamily:carousel.descriptionFontFamily,
    carouselDescriptionFontWeight:carousel.descriptionFontWeight,
    carouselDescriptionFontStyle:carousel.descriptionFontStyle,
    carouselDescriptionStatus:carousel.descriptionStatus,
    carouselDescriptionFontSize:carousel.descriptionFontSize,
    carouselDescriptionColor:carousel.descriptionColor,
  });
};
  CloseItem = () => {this.setState({ openItem1: false });};
  handleClick = () => {this.setState(state => ({ open: !state.open }));};
  handleClickOpen = (event) => {this.setState({ anchorEl: event.currentTarget, });};
  handleClose = () => {this.setState({ anchorEl: null, });};
  handleClickOpen2 = (event) => {this.setState({ anchorEl2: event.currentTarget, });};
  handleClose2 = () => {this.setState({ anchorEl2: null, });};
  onChangeColor = name=> (color) => {this.setState({  [name]: color.hex });};
  onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};
  onChangeFalse= name=>()=>{this.setState({[name]:false})};

  render() {
    const { classes } = this.props;
    const { anchorEl,anchorEl2 } = this.state;
    const open = Boolean(anchorEl);
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
            <ListItemText inset primary="Image Slide" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputText 
              Label="Title" 
              font={this.props.font}
              value={this.props.carouselTitle}  
              animate={this.props.carouselTitleAnimate} 
              onChange={this.props.carouselOnChangeTitle} 
              duration={this.props.carouselTitleDuration}   
              FontFamily={this.props.carouselTitleFontFamily}
              FontSize={this.props.carouselTitleFontSize}
              FontWeight={this.props.carouselTitleFontWeight}
              FontStyle={this.props.carouselTitleFontStyle}
              Status={this.props.carouselTitleStatus}
              position={this.props.carouselTitlePosition}
              color={this.props.carouselTitleColor}
              onChangePosition={this.props.carouselOnChangeTitlePosition} 
              onChangeAnimate={this.props.carouselOnChangeTitleAnimate}              
              onChangeDuration={this.props.carouselOnChangeTitleDuration}            
              onChangeFontFamily={this.props.carouselOnChangeTitleFontFamily}
              onChangeFontSize={this.props.carouselOnChangeTitleFontSize}                           
              onChangeFontWeight={this.props.carouselOnChangeTitleFontWeight}
              onChangeFontStyle={this.props.carouselOnChangeTitleFontStyle}              
              onChangeStatus={this.props.carouselOnChangeTitleStatus}
              onChangeColor={this.props.carouselOnChangeTitleColor}
              />
              </ListItem>
            </List>
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputTextarea 
              label="Description" 
              value={this.props.carouselDescription}  
              font={this.props.font}
              animate={this.props.carouselDescriptionAnimate} 
              onChange={this.props.carouselOnChangeDescription} 
              duration={this.props.carouselDescriptionDuration}   
              FontFamily={this.props.carouselDescriptionFontFamily}
              FontSize={this.props.carouselDescriptionFontSize}
              FontWeight={this.props.carouselDescriptionFontWeight}
              FontStyle={this.props.carouselDescriptionFontStyle}
              Status={this.props.carouselDescriptionStatus}
              position={this.props.carouselDescriptionPosition}
              color={this.props.carouselDescriptionColor}
              onChangeAnimate={this.props.carouselOnChangeDescriptionAnimate} 
              onChangePosition={this.props.carouselOnChangeDescriptionPosition}              
              onChangeDuration={this.props.carouselOnChangeDescriptionDuration}            
              onChangeFontFamily={this.props.carouselnOnChangeDescriptioFontFamily}
              onChangeFontSize={this.props.carouselOnChangeDescriptionFontSize}                           
              onChangeFontWeight={this.props.carouselOnChangeDescriptionFontWeight}
              onChangeFontStyle={this.props.carouselOnChangeDescriptionFontStyle}              
              onChangeStatus={this.props.carouselOnChangeDescriptionStatus}
              onChangeColor={this.props.carouselOnChangeDescriptionColor}
              />
              </ListItem>
            </List>
            <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button variant="contained" onClick={this.handleClickOpen} component="span" color="secondary" className={classes}>
            Carousel Setting
            </Button>
            <Popover
              className={classes.popover}
              open={open}
              anchorEl={anchorEl}
              onClose={this.handleClose}
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
                  color={this.props.carouselBackgroundColor}
                  onChange={this.props.carouselOnChangeBackgroundColor}
                  />
                </ListItem>
            <ListItem>
              <Dropdown 
                label='Speed'
                value={this.props.carouselSpeed}
                onChange={this.props.carouselOnChangeSpeed}
                choice = {[
                  {_key:'1',value: '1500' , label: 'Slow'},
                  {_key:'2',value: '1000', label: 'Normal'},
                  {_key:'3',value: '750', label: 'Fast'}
                ]}
              />
            </ListItem>
            <ListItem>
                <Selection
                value={this.props.carouselVertical}
                onChange={this.props.carouselOnChangeVertical}
                labelTrue="Vertical"
                labelFalse="Horizotal"
                />

                <Selection
                value={this.props.carouselAutoplay}
                onChange={this.props.carouselOnChangeAutoplay}
                labelTrue="Autoplay"
                labelFalse="Not autoplay"
                />

                <Selection
                value={this.props.carouselPauseOnHover}
                onChange={this.props.carouselOnChangePauseOnHover}
                labelTrue="Pause on hover"
                labelFalse="Not pause on hover"
                />

                <Selection
                value={this.props.carouselDots}
                onChange={this.props.carouselOnChangeDots}
                labelTrue="Have dots"
                labelFalse="Not have dots"
                />
              </ListItem>
            </Popover>
            </ListItem>
            <ListItem className={classes.nested}>
            <Button  variant="contained" onClick={this.handleClickOpen2} component="span" color="secondary" className={classes.button}>
             Carousel Items
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
            {this.props.carouselContent.map((carousel => (
            <ListItem key={carousel._key}>
            <img src={carousel.image} alt={carousel.title} className={classes.imgitem} onClick={this.OpenItem(carousel)}/>
            <DeleteIcon  onClick={this.delete(carousel)} className={classes.rightIcon}/>
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
            <Button variant="contained" color="secondary" onClick={this.save} className={classes.save} >
              SAVE
            <SaveIcon className={classes.rightIcon} />
            </Button>
            </DialogTitle> 
            <ListItem>
            <InputText
              displayAnimate={true}
              Label="Title"
              value={this.state.carouselTitle}
              font={this.props.font}
              FontFamily={this.state.carouselTitleFontFamily}
              FontSize={this.state.carouselTitleFontSize}
              FontWeight={this.state.carouselTitleFontWeight}
              FontStyle={this.state.carouselTitleFontStyle}
              Status={this.state.carouselTitleStatus}
              color={this.state.carouselTitleColor}
              onChange={this.onChangeValue('carouselTitle')}
              onChangeFontFamily={this.onChangeValue('carouselTitleFontFamily')}
              onChangeFontSize={this.onChangeValue('carouselTitleFontSize')}
              onChangeFontWeight={this.onChangeValue('carouselTitleFontWeight')}
              onChangeFontStyle={this.onChangeValue('carouselTitleFontStyle')}
              onChangeStatus={this.onChangeValue('carouselTitleStatus')}
              onChangeColor={this.onChangeColor('carouselTitleColor')}
              />   
              </ListItem>
              <ListItem> 
            <InputTextarea
              displayAnimate={true}
              label="description"
              font={this.props.font}
              value={this.state.carouselDescription}
              FontFamily={this.state.carouselDescriptionFontFamily}
              FontSize={this.state.carouselDescriptionFontSize}
              FontWeight={this.state.carouselDescriptionFontWeight}
              FontStyle={this.state.carouselDescriptionFontStyle}
              Status={this.state.carouselDescriptionStatus}
              color={this.state.carouselDescriptionColor} 
              onChange={this.onChangeValue('carouselDescription')}
              onChangeFontFamily={this.onChangeValue('carouselDescriptionFontFamily')}
              onChangeFontSize={this.onChangeValue('carouselDescriptionFontSize')}
              onChangeFontWeight={this.onChangeValue('carouselDescriptionFontWeight')}
              onChangeFontStyle={this.onChangeValue('carouselDescriptionFontStyle')}
              onChangeStatus={this.onChangeValue('carouselDescriptionStatus')}
              onChangeColor={this.onChangeColor('carouselDescriptionColor')}
              />  
              </ListItem>
              <ListItem>
                <ModalPicture
                imagePick={this.state.carouselImage}
                path={"/carouselContent/"+this.state.carouselPath}
                />
              </ListItem>
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

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  urlImage: state.urlImage ,
  tabs:state.tabs,
  user:state.user,
  email:state.email,
})
export default connect(mapStateToProps)(withStyles(styles)(NestedList));

   
