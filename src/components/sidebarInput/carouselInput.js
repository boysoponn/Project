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
import Text from './inputText';
import Selection from './selection';
import Dropdown from './dropdown';
import Textarea from './inputTextarea';
import ModalPicture from './modalPicture';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import SaveIcon from '@material-ui/icons/Save';
import Popover from '@material-ui/core/Popover';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/AddCircle';

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
    marginTop:10,
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
    speed:'',
    pauseOnHover:true,
    dots:true,
    autoplay:true,
    vertical:true
    };  
  }
  save =  () => {
    let dbCon = config.database().ref('project/test/'+this.props.tabs+"/carouselContent/");
    dbCon.child(this.state.carouselPath).update({
      title:this.state.carouselTitle,
      description:this.state.carouselDescription,
      carouselTitleFontFamily:this.state.carouselTitleFontFamily,
      carouselTitleFontWeight:this.state.carouselTitleFontWeight,
      carouselTitleFontSize:this.state.carouselTitleFontSize,
      carouselTitleFontStyle:this.state.carouselTitleFontStyle,
      carouselTitleStatus:this.state.carouselTitleStatus,
      carouselTitleColor:this.state.carouselTitleColor,
      carouselDescriptionFontFamily:this.state.carouselDescriptionFontFamily,
      carouselDescriptionFontWeight:this.state.carouselDescriptionFontWeight,
      carouselDescriptionFontStyle:this.state.carouselDescriptionFontStyle,
      carouselDescriptionFontSize:this.state.carouselDescriptionFontSize,
      carouselDescriptionStatus:this.state.carouselDescriptionStatus,
      carouselDescriptionColor:this.state.carouselDescriptionColor,
    });
    alert("saved") 
  };
  delete = carousel => () =>{
    let dbCon = config.database().ref('project/test/'+this.props.tabs+"/carouselContent/");
    dbCon.child(carousel._key).remove();
  }
  addItem=()=>{
    let dbCon = config.database().ref('project/test/'+this.props.tabs+"/carouselContent/");
    dbCon.push({
      title:'Title',
      description:'Description',
      carouselTitleFontFamily:'Montserrat',
      carouselTitleFontWeight:'700',
      carouselTitleFontSize:'70',
      carouselTitleFontStyle:'normal',
      carouselTitleStatus:'block',
      carouselTitleColor:'#ffffff',
      carouselDescriptionFontFamily:'Montserrat',
      carouselDescriptionFontWeight:'400',
      carouselDescriptionFontSize:'30',
      carouselDescriptionFontStyle:'normal',
      carouselDescriptionStatus:'block',
      carouselDescriptionColor:'#ffffff',  
      image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/images%2Fhero-set3-b.jpg?alt=media&token=278896f0-391e-475b-b6d3-4cb1b834651b'
    })  
  }
  OpenItem = carousel => () => { this.setState({ 
    openItem1: true ,
    carouselTitle:carousel.title,
    carouselDescription:carousel.description,
    carouselImage:carousel.image,
    carouselPath:carousel._key,
    carouselTitleFontFamily:carousel.carouselTitleFontFamily,
    carouselTitleFontWeight:carousel.carouselTitleFontWeight,
    carouselTitleFontStyle:carousel.carouselTitleFontStyle,
    carouselTitleFontSize:carousel.carouselTitleFontSize,
    carouselTitleStatus:carousel.carouselTitleStatus,
    carouselTitleColor:carousel.carouselTitleColor,
    carouselDescriptionFontFamily:carousel.carouselDescriptionFontFamily,
    carouselDescriptionFontWeight:carousel.carouselDescriptionFontWeight,
    carouselDescriptionFontStyle:carousel.carouselDescriptionFontStyle,
    carouselDescriptionStatus:carousel.carouselDescriptionStatus,
    carouselDescriptionFontSize:carousel.carouselDescriptionFontSize,
    carouselDescriptionColor:carousel.carouselDescriptionColor,
  });
};
  CloseItem = () => {this.setState({ openItem1: false });};
  handleClick = () => {this.setState(state => ({ open: !state.open }));};
  handleClickOpen = (event) => {this.setState({ anchorEl: event.currentTarget, });};
  handleClose = () => {this.setState({ anchorEl: null, });};
  handleClickOpen2 = (event) => {this.setState({ anchorEl2: event.currentTarget, });};
  handleClose2 = () => {this.setState({ anchorEl2: null, });};
  carouselTitleOnChange = (e) => {this.setState({ carouselTitle: e.target.value });};
  carouselTitleOnChangeFontFamily = (e) => {this.setState({ carouselTitleFontFamily: e.target.value });};
  carouselTitleOnChangeFontWeight = (e) => {this.setState({ carouselTitleFontWeight: e.target.value });};
  carouselTitleOnChangeFontSize = (e) => {this.setState({ carouselTitleFontSize: e.target.value });};
  carouselTitleOnChangeFontStyle = (e) => {this.setState({ carouselTitleFontStyle: e.target.value });};
  carouselTitleOnChangeStatus = (e) => {this.setState({ carouselTitleStatus: e.target.value });};
  carouselTitleOnChangeColor = (color) => {this.setState({ carouselTitleColor: color.hex });};

  carouselDescriptionOnChange = (e) => {this.setState({ carouselDescription: e.target.value });};
  carouselDescriptionOnChangeFontFamily = (e) => {this.setState({ carouselDescriptionFontFamily: e.target.value });};
  carouselDescriptionOnChangeFontWeight = (e) => {this.setState({ carouselDescriptionFontWeight: e.target.value });};
  carouselDescriptionOnChangeFontSize = (e) => {this.setState({ carouselDescriptionFontSize: e.target.value });};
  carouselDescriptionOnChangeFontStyle = (e) => {this.setState({ carouselDescriptionFontStyle: e.target.value });};
  carouselDescriptionOnChangeStatus = (e) => {this.setState({ carouselDescriptionStatus: e.target.value });};
  carouselDescriptionOnChangeColor = (color) => {this.setState({ carouselDescriptionColor: color.hex });};
  
  onChangeSpeed = (e) => {this.setState({ speed: e.target.value });};  
  onChangePauseOnHover = (e) => {this.setState({ pauseOnHover: e.target.checked });};   
  onChangeDots = (e) => {this.setState({ dots: e.target.checked });};  
  onChangeAutoplay = (e) => {this.setState({ autoplay: e.target.checked });};  
  onChangeVertical = (e) => {this.setState({ vertical: e.target.checked });};  

  render() {
    const { classes } = this.props;
    const { anchorEl,anchorEl2 } = this.state;
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    return (
      <div className={classes.root} >
        <List disablePadding={true}>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Carousel" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
            <Button variant="contained" onClick={this.handleClickOpen} component="span" color="secondary" className={classes.button}>
             Carousel Items
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
                horizontal: 'center',
              }}
            >
              <ListItem >
                <Selection
                value={this.state.vertical}
                onChange={this.onChangeVertical}
                labelTrue="Vertical"
                labelFalse="Horizotal"
                />
              </ListItem >
              <ListItem >
                <Selection
                value={this.state.autoplay}
                onChange={this.onChangeAutoplay}
                labelTrue="Autoplay"
                labelFalse="Not autoplay"
                />
              </ListItem>
              <ListItem >
                <Selection
                value={this.state.pauseOnHover}
                onChange={this.onChangePauseOnHover}
                labelTrue="Pause on hover"
                labelFalse="Not pause on hover"
                />
              </ListItem>
              <ListItem >
                <Selection
                value={this.state.dots}
                onChange={this.onChangeDots}
                labelTrue="Have dots"
                labelFalse="Not have dots"
                />
              </ListItem>
              <ListItem>
              <Dropdown 
                label='Speed'
                value={this.state.speed}
                onChange={this.onChangeSpeed}
                choice = {[
                  {value: '1500' , label: 'Fast'},
                  {value: '1000', label: 'Normal'},
                  {value: '500', label: 'Slow'}
                ]}
              />
            </ListItem>
            </Popover>
            <ListItem>
            <Button variant="contained" onClick={this.handleClickOpen2} component="span" color="secondary" className={classes.button}>
             Carousel Items
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
                horizontal: 'center',
              }}
            >
            {this.props.carousel.map((carousel => (
            <ListItem key={carousel._key}>
            <Button variant="contained"  onClick={this.OpenItem(carousel)} component="span" color="secondary" className={classes.paper}>
              {carousel.title}
            </Button>
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
            <Text
              displayAnimate='none'
              type="text"
              label="title"
              value={this.state.carouselTitle}
              onChange={this.carouselTitleOnChange}
              FontFamily={this.state.carouselTitleFontFamily}
              FontSize={this.state.carouselTitleFontSize}
              FontWeight={this.state.carouselTitleFontWeight}
              FontStyle={this.state.carouselTitleFontStyle}
              Status={this.state.carouselTitleStatus}
              color={this.state.carouselTitleColor}
              onChangeFontFamily={this.carouselTitleOnChangeFontFamily}
              onChangeFontSize={this.carouselTitleOnChangeFontSize}
              onChangeFontWeight={this.carouselTitleOnChangeFontWeight}
              onChangeFontStyle={this.carouselTitleOnChangeFontStyle}
              onChangeStatus={this.carouselTitleOnChangeStatus}
              onChangeColor={this.carouselTitleOnChangeColor}
              />   
              </ListItem>
              <ListItem> 
            <Textarea
              displayAnimate='none'
              label="description"
              value={this.state.carouselDescription}
              onChange={this.carouselDescriptionOnChange}
              FontFamily={this.state.carouselDescriptionFontFamily}
              FontSize={this.state.carouselDescriptionFontSize}
              FontWeight={this.state.carouselDescriptionFontWeight}
              FontStyle={this.state.carouselDescriptionFontStyle}
              Status={this.state.carouselDescriptionStatus}
              color={this.state.carouselDescriptionColor}
              onChangeFontFamily={this.carouselDescriptionOnChangeFontFamily}
              onChangeFontSize={this.carouselDescriptionOnChangeFontSize}
              onChangeFontWeight={this.carouselDescriptionOnChangeFontWeight}
              onChangeFontStyle={this.carouselDescriptionOnChangeFontStyle}
              onChangeStatus={this.carouselDescriptionOnChangeStatus}
              onChangeColor={this.carouselDescriptionOnChangeColor}
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
  tabs:state.tabs
})
export default connect(mapStateToProps)(withStyles(styles)(NestedList));

   
