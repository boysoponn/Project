import React from 'react';
import config from '../config';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles  } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingProject from '@material-ui/icons/SettingsOutlined';
import Button from '@material-ui/core/Button';
import ExitIcon from '@material-ui/icons/ExitToApp';
import TabWebsite from './template/tab'
import { connect } from 'react-redux'
import HeroInput from './sidebarInput/heroInput';
import CarouselInput from './sidebarInput/carouselInput';
import MenubarInput from './sidebarInput/menubarInput';
import GalleryInput from './sidebarInput/galleryInput';
import FooterInput from './sidebarInput/footerInput';
import { checkTab,project} from './actions';
import BlockInput from './template/blockInput';
import Popup from './template/popup'
import Avatar from '@material-ui/core/Avatar';
import avatarImage from './image/avatar.png'
import CreateProject from './loginTemplate'
import {Helmet} from "react-helmet";

const drawerWidth = 320;

const styles = theme => ({
  bigAvatar: {
    margin: 10,
  },
  buttonGroup:{
    justifyContent: 'flex-start',
  },
  button:{
    marginRight:'10px',
    marginLeft:'10px',
    width:100,
  },
  root: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  appBar: {
    backgroundColor:'#fff',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    overflowX: 'hidden',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: '2%',
    width:'70%',
  },
  grow: {
    flexGrow: 1,
    fontSize:'1vw',
    color:"#000000",
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class CMS extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    // isLoaded: false,
    open: true,
    hero:'none',
    carousel:'none',
    gallery:'none',
    menubar:'none',
    footer:'none',
    footerItem:[],
    footerSocial:[],
    carouselContent:[],
    menubarItem:[],
    galleryContent:[],
    font:[],
    openHeader:false,
    undefinedOneTab:false,
    createProject:false
  };
  }

componentDidMount(){
  this.firstTabs();
}

firstTabs=()=>{
  
  let searchData = config.database().ref('project/'+this.props.email);
  searchData.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
  
    if(snapshotArr[0] !== undefined){
      this.setState({undefinedOneTab:false})
     this.props.tabs===false?this.props.dispatch(checkTab(snapshotArr[0]._key)):this.props.dispatch(checkTab(this.props.tabs));
   }else{
     this.setState({undefinedOneTab:true})
   }
   });
  
  }

componentWillReceiveProps(nextProps){
  let app = config.database().ref('project/'+this.props.email+'/'+nextProps.tabs);
  app.on('value', async (snapshot) => { 
  const snapshotValue = snapshot.val(); 
  let data = _(snapshotValue).value();
  if(data !== null){
        this.setState({
          pathName:data.pathName,
          hero:data.hero,
          carousel:data.carousel,
          gallery:data.gallery,
          menubar:data.menubar,
          footer:data.footer,
          heroYoutubeID:data.heroContent.youtubeID,
          herobackgroundColor:data.heroContent.backgroundColor,
          heroBackgroundImage:data.heroContent.image,
          heroTitle:data.heroContent.title,
          heroTitleAnimate:data.heroContent.titleAnimate,
          heroTitleDuration:data.heroContent.titleDuration,
          heroTitleFontFamily:data.heroContent.titleFontFamily,
          heroTitleFontSize:data.heroContent.titleFontSize,
          heroTitleFontWeight:data.heroContent.titleFontWeight,
          heroTitleFontStyle:data.heroContent.titleFontStyle,
          heroTitleStatus:data.heroContent.titleStatus,
          heroTitleColor:data.heroContent.titleColor,
          heroTitlePosition:data.heroContent.titlePosition,

          heroDescription:data.heroContent.description,
          heroDescriptionAnimate:data.heroContent.descriptionAnimate,
          heroDescriptionDuration:data.heroContent.descriptionDuration,
          heroDescriptionFontFamily:data.heroContent.descriptionFontFamily,
          heroDescriptionFontSize:data.heroContent.descriptionFontSize,
          heroDescriptionFontWeight:data.heroContent.descriptionFontWeight,
          heroDescriptionFontStyle:data.heroContent.descriptionFontStyle,
          heroDescriptionStatus:data.heroContent.descriptionStatus,
          heroDescriptionColor:data.heroContent.descriptionColor,
          heroDescriptionPosition:data.heroContent.descriptionPosition,

          heroButton:data.heroContent.button,
          heroButtonPosition:data.heroContent.buttonPosition,
          heroButtonSelected:data.heroContent.buttonSelected,
          heroButtonAnimate:data.heroContent.buttonAnimate,
          heroButtonDuration:data.heroContent.buttonDuration,
          heroButtonFontFamily:data.heroContent.buttonFontFamily,
          heroButtonFontSize:data.heroContent.buttonFontSize,
          heroButtonFontWeight:data.heroContent.buttonFontWeight,
          heroButtonFontStyle:data.heroContent.buttonFontStyle,
          heroButtonStatus:data.heroContent.buttonStatus,
          heroButtonColor:data.heroContent.buttonColor,
          heroButtonSwapColor:data.heroContent.buttonSwapColor,
          heroButtonSwap:data.heroContent.buttonSwap,
          heroButtonLink:data.heroContent.buttonLink,
          heroButtonLinkTarget:data.heroContent.buttonLinkTarget,
          heroButtonRadius:data.heroContent.buttonRadius,
          heroButtonBGColor:data.heroContent.buttonBGColor,
          heroButtonHBGColor:data.heroContent.buttonHBGColor,
          heroButtonBDColor:data.heroContent.buttonBDColor,
          heroButtonHBDColor:data.heroContent.buttonHBDColor,
          heroButtonHoverColor:data.heroContent.buttonHoverColor,

          carouselBackgroundColor:data.carouselMain.backgroundColor,
          carouselSpeed:data.carouselSetting.speed,
          carouselPauseOnHover:data.carouselSetting.pauseOnHover,
          carouselDots:data.carouselSetting.dots,
          carouselAutoplay:data.carouselSetting.autoplay,
          carouselVertical:data.carouselSetting.vertical,
          carouselTitle:data.carouselMain.title,
          carouselTitlePosition:data.carouselMain.titlePosition,

          carouselDescriptionPosition:data.carouselMain.descriptionPosition,
          carouselDescription:data.carouselMain.description,
          carouselTitleAnimate:data.carouselMain.titleAnimate,
          carouselTitleDuration:data.carouselMain.titleDuration,
          carouselTitleFontFamily:data.carouselMain.titleFontFamily,
          carouselTitleFontSize:data.carouselMain.titleFontSize,
          carouselTitleFontWeight:data.carouselMain.titleFontWeight,
          carouselTitleFontStyle:data.carouselMain.titleFontStyle,
          carouselTitleStatus:data.carouselMain.titleStatus,
          carouselTitleColor:data.carouselMain.titleColor,
          carouselDescriptionAnimate:data.carouselMain.descriptionAnimate,
          carouselDescriptionDuration:data.carouselMain.descriptionDuration,
          carouselDescriptionFontFamily:data.carouselMain.descriptionFontFamily,
          carouselDescriptionFontSize:data.carouselMain.descriptionFontSize,
          carouselDescriptionFontWeight:data.carouselMain.descriptionFontWeight,
          carouselDescriptionFontStyle:data.carouselMain.descriptionFontStyle,
          carouselDescriptionStatus:data.carouselMain.descriptionStatus,
          carouselDescriptionColor:data.carouselMain.descriptionColor,

          galleryBackgroundColor:data.galleryContent.backgroundColor,
          galleryTitle:data.galleryContent.title,
          galleryTitlePosition:data.galleryContent.titlePosition,
          galleryTitleAnimate:data.galleryContent.titleAnimate,
          galleryTitleDuration:data.galleryContent.titleDuration,
          galleryTitleFontFamily:data.galleryContent.titleFontFamily,
          galleryTitleFontSize:data.galleryContent.titleFontSize,
          galleryTitleFontWeight:data.galleryContent.titleFontWeight,
          galleryTitleFontStyle:data.galleryContent.titleFontStyle,
          galleryTitleStatus:data.galleryContent.titleStatus,
          galleryTitleColor:data.galleryContent.titleColor,

          galleryDescription:data.galleryContent.description,
          galleryDescriptionPosition:data.galleryContent.descriptionPosition,
          galleryDescriptionAnimate:data.galleryContent.descriptionAnimate,
          galleryDescriptionDuration:data.galleryContent.descriptionDuration,
          galleryDescriptionFontFamily:data.galleryContent.descriptionFontFamily,
          galleryDescriptionFontSize:data.galleryContent.descriptionFontSize,
          galleryDescriptionFontWeight:data.galleryContent.descriptionFontWeight,
          galleryDescriptionFontStyle:data.galleryContent.descriptionFontStyle,
          galleryDescriptionStatus:data.galleryContent.descriptionStatus,
          galleryDescriptionColor:data.galleryContent.descriptionColor,
          // isLoaded: false
        }); 
      }else{
          this.setState({menubar:'none',footer:'none'})        
      }
  });

//สำหรับไอเทมที่เป็น Array
  let carouselItems = config.database().ref('project/'+this.props.email+'/'+nextProps.tabs+'/carouselContent');
  carouselItems.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
    this.setState({carouselContent:snapshotArr}); });

  let galleryContent = config.database().ref('project/'+this.props.email+'/'+nextProps.tabs+'/galleryItem');
  galleryContent.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
    this.setState({galleryContent:snapshotArr}); });

  let menubarItem = config.database().ref('global/'+this.props.email+'/menubarItem/');
  menubarItem.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
    this.setState({ menubarItem:snapshotArr});});

  let footerItem = config.database().ref('global/'+this.props.email+'/footerItem/');
  footerItem.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
    this.setState({ footerItem:snapshotArr});});

  let footerSocial = config.database().ref('global/'+this.props.email+'/footerSocial/');
  footerSocial.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
    this.setState({ footerSocial:snapshotArr});});

  let font = config.database().ref('global/'+this.props.email+'/font/');
  font.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
    this.setState({ font:snapshotArr});});
  
  
  let global = config.database().ref('global/'+this.props.email+'/');
  global.on('value', async (snapshot) => { 
    const snapshotValue = snapshot.val(); 
    let data = _(snapshotValue).value();
    if(data !== null){this.setState({menubarLogo:data.menubarLogo.image ,menubarbackgroundColor:data.menubarSetting.menubarbackgroundColor})}});
  
    let footerContent = config.database().ref('global/'+this.props.email+'/footerContent');
    footerContent.on('value', async (snapshot) => { 
    const snapshotValue = snapshot.val(); 
    let data = _(snapshotValue).value();
    if(data !== null){this.setState({
      footerTitle:data.title,
      footerDescription:data.description,
      footerPosition:data.position,
      footerbackgroundColor:data.backgroundColor,
      footerTitleAnimate:data.titleAnimate,
      footerTitleDuration:data.titleDuration,
      footerTitleFontFamily:data.titleFontFamily,
      footerTitleFontSize:data.titleFontSize,
      footerTitleFontWeight:data.titleFontWeight,
      footerTitleFontStyle:data.titleFontStyle,
      footerTitleStatus:data.titleStatus,
      footerTitleColor:data.titleColor,
  
      footerDescriptionAnimate:data.descriptionAnimate,
      footerDescriptionDuration:data.descriptionDuration,
      footerDescriptionFontFamily:data.descriptionFontFamily,
      footerDescriptionFontSize:data.descriptionFontSize,
      footerDescriptionFontWeight:data.descriptionFontWeight,
      footerDescriptionFontStyle:data.descriptionFontStyle,
      footerDescriptionStatus:data.descriptionStatus,
      footerDescriptionColor:data.descriptionColor,
    })}});
  
  }
  createProject=()=>{
    this.setState({createProject:true})
  }
  submitCreateProject=(e)=>{
    e.preventDefault();        
    this.setState({createProject:false});
    if(this.props.project !== ""){
      config.database().ref('production/'+this.props.project).remove();
    }
      let dbCon = config.database().ref('production/');
      dbCon.child(this.state.project.replace(/ /g,'-')).set(this.props.email); 
      let project = config.database().ref('project owner/');
      project.child(this.props.email).set(this.state.project.replace(/ /g,'-'));   

    this.createProjectName();
  }

  createProjectName=()=>{ 
    this.props.dispatch(project(this.state.project.replace(/ /g,'-')));
    this.props.dispatch(checkTab(false));

  }

  popupLogout = () => {this.setState({ popupLogout: true });};
  popupLogoutClose = () => {this.setState({ popupLogout: false });};
  logout =() => {config.auth().signOut();window.location.reload(); };
  handleDrawerOpen = () => {this.setState({ open: true ,});}
  handleDrawerClose = () => {this.setState({  open: false ,});};
  onChangeColor = name=> (color) => {this.setState({  [name]: color.hex });};
  onChangeChecked = name=> (e) => {this.setState({  [name]: e.target.checked });};  
  onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};
  onChangeProject = name=> (e) => {this.setState({ [name]: e.target.value.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi,'')})};
  popupClose = name=> () => {this.setState({ [name]: false });};
  render() {
    const { classes, theme } = this.props;
    let heroInput;
    if( this.state.hero !== "none"){
    heroInput =
      <HeroInput 
      {...this.state}
      heroOnChangeYoutubeID={this.onChangeValue('heroYoutubeID')}
      herobackgroundOnChangeColor={this.onChangeColor('herobackgroundColor')}
      heroTitleOnChange={this.onChangeValue('heroTitle')}
      heroTitleOnChangeAnimate={this.onChangeValue('heroTitleAnimate')}
      heroTitleOnChangeDuration={this.onChangeValue('heroTitleDuration')}         
      heroTitleOnChangeFontFamily={this.onChangeValue('heroTitleFontFamily')}      
      heroTitleOnChangeFontSize={this.onChangeValue('heroTitleFontSize')}        
      heroTitleOnChangeFontWeight={this.onChangeValue('heroTitleFontWeight')}        
      heroTitleOnChangeFontStyle={this.onChangeValue('heroTitleFontStyle')}
      heroTitleOnChangeStatus={this.onChangeValue('heroTitleStatus')}
      heroTitleOnChangeColor={this.onChangeColor('heroTitleColor')}
      heroTitleOnChangePosition={this.onChangeValue('heroTitlePosition')}

      heroDescriptionOnChange={this.onChangeValue('heroDescription')}
      heroDescriptionOnChangeAnimate={this.onChangeValue('heroDescriptionAnimate')}
      heroDescriptionOnChangeDuration={this.onChangeValue('heroDescriptionDuration')}        
      heroDescriptionOnChangeFontFamily={this.onChangeValue('heroDescriptionFontFamily')}            
      heroDescriptionOnChangeFontSize={this.onChangeValue('heroDescriptionFontSize')}            
      heroDescriptionOnChangeFontWeight={this.onChangeValue('heroDescriptionFontWeight')}          
      heroDescriptionOnChangeFontStyle={this.onChangeValue('heroDescriptionFontStyle')}
      heroDescriptionOnChangeStatus={this.onChangeValue('heroDescriptionStatus')}
      heroDescriptionOnChangeColor={this.onChangeColor('heroDescriptionColor')}
      heroDescriptionOnChangePosition={this.onChangeValue('heroDescriptionPosition')}
              
      heroButtonOnChangeHoverColor={this.onChangeColor('heroButtonHoverColor')}
      heroButtonOnChangeHBDColor={this.onChangeColor('heroButtonHBDColor')}
      heroButtonOnChangeBDColor={this.onChangeColor('heroButtonBDColor')}
      heroButtonOnChangeHBGColor={this.onChangeColor('heroButtonHBGColor')}
      heroButtonOnChangeBGColor={this.onChangeColor('heroButtonBGColor')}
      heroButtonOnChangeRadius={this.onChangeValue('heroButtonRadius')}
      heroButtonOnChangeLink={this.onChangeValue('heroButtonLink')}
      heroButtonOnChangeLinkTarget={this.onChangeValue('heroButtonLinkTarget')}
      heroButtonOnChangeSwap={this.onChangeValue('heroButtonSwap')}
      heroButtonOnChangeSelected={this.onChangeValue('heroButtonSelected')}
      heroButtonOnChange={this.onChangeValue('heroButton')}
      heroButtonOnChangePosition={this.onChangeValue('heroButtonPosition')}
      heroButtonOnChangeFontFamily={this.onChangeValue('heroButtonFontFamily')}
      heroButtonOnChangeFontSize={this.onChangeValue('heroButtonFontSize')}
      heroButtonOnChangeDuration={this.onChangeValue('heroButtonDuration')}
      heroButtonOnChangeAnimate={this.onChangeValue('heroButtonAnimate')}
      heroButtonOnChangeFontWeight={this.onChangeValue('heroButtonFontWeight')}
      heroButtonOnChangeFontStyle={this.onChangeValue('heroButtonFontStyle')}
      heroButtonOnChangeStatus={this.onChangeValue('heroButtonStatus')}
      heroButtonOnChangeColor={this.onChangeColor('heroButtonColor')}
      heroButtonOnChangeSwapColor={this.onChangeColor('heroButtonSwapColor')}
    />    
    };
    let carouselInput;
    if( this.state.carousel !== "none"){
      carouselInput =            
      <CarouselInput
      {...this.state}
      carouselOnChangeBackgroundColor={this.onChangeColor('carouselBackgroundColor')}
      carouselOnChangePauseOnHover={this.onChangeChecked('carouselPauseOnHover')}
      carouselOnChangeAutoplay={this.onChangeChecked('carouselAutoplay')}
      carouselOnChangeVertical={this.onChangeChecked('carouselVertical')}
      carouselOnChangeSpeed={this.onChangeValue('carouselSpeed')}
      carouselOnChangeDots={this.onChangeChecked('carouselDots')}

      carouselOnChangeTitle={this.onChangeValue('carouselTitle')}
      carouselOnChangeTitlePosition={this.onChangeValue('carouselTitlePosition')}
      carouselOnChangeTitleAnimate={this.onChangeValue('carouselTitleAnimate')}
      carouselOnChangeTitleDuration={this.onChangeValue('carouselTitleDuration')}
      carouselOnChangeTitleFontFamily={this.onChangeValue('carouselTitleFontFamily')}
      carouselOnChangeTitleFontSize={this.onChangeValue('carouselTitleFontSize')}
      carouselOnChangeTitleFontWeight={this.onChangeValue('carouselTitleFontWeight')}
      carouselOnChangeTitleFontStyle={this.onChangeValue('carouselTitleFontStyle')}
      carouselOnChangeTitleStatus={this.onChangeValue('carouselTitleStatus')}
      carouselOnChangeTitleColor={this.onChangeColor('carouselTitleColor')}

      carouselOnChangeDescription={this.onChangeValue('carouselDescription')}
      carouselOnChangeDescriptionPosition={this.onChangeValue('carouselDescriptionPosition')}
      carouselOnChangeDescriptionAnimate={this.onChangeValue('carouselDescriptionAnimate')}
      carouselOnChangeDescriptionDuration={this.onChangeValue('carouselDescriptionDuration')}
      carouselOnChangeDescriptionFontFamily={this.onChangeValue('carouselDescriptionFontFamily')}
      carouselOnChangeDescriptionFontSize={this.onChangeValue('carouselDescriptionFontSize')}
      carouselOnChangeDescriptionFontWeight={this.onChangeValue('carouselDescriptionFontWeight')}
      carouselOnChangeDescriptionFontStyle={this.onChangeValue('carouselDescriptionFontStyle')}
      carouselOnChangeDescriptionStatus={this.onChangeValue('carouselDescriptionStatus')}
      carouselOnChangeDescriptionColor={this.onChangeColor('carouselDescriptionColor')}

    />
    };
    let menubarInput; 
    if( this.state.menubar !== "none"){
      menubarInput= <MenubarInput
      {...this.state}
      onChangeLinkLogo={this.onChangeChecked('linkLogo')}
      onChangeLinkLogoTarget={this.onChangeChecked('linkLogoTarget')}
      menubarbackgroundOnChangeColor={this.onChangeColor('menubarbackgroundColor')}
    />
    }
    let galleryInput ;
    if( this.state.gallery !== "none"){
    galleryInput = <GalleryInput
    {...this.state}

    galleryBackgroundOnChangeColor={this.onChangeColor('galleryBackgroundColor')}
    galleryTitleOnChange={this.onChangeValue('galleryTitle')} 
    galleryTitleOnChangeAnimate={this.onChangeValue('galleryTitleAnimate')}           
    galleryTitleOnChangeFontFamily={this.onChangeValue('galleryTitleFontFamily')}
    galleryTitleOnChangeFontSize={this.onChangeValue('galleryTitleFontSize')}                         
    galleryTitleOnChangeFontWeight={this.onChangeValue('galleryTitleFontWeight')}
    galleryTitleOnChangeFontStyle={this.onChangeValue('galleryTitleFontStyle')}             
    galleryTitleOnChangeStatus={this.onChangeValue('galleryTitleStatus')}
    galleryTitleOnChangePosition={this.onChangeValue('galleryTitlePosition')}
    galleryTitleOnChangeColor={this.onChangeColor('galleryTitleColor')}

    galleryDescriptionOnChange={this.onChangeValue('galleryDescription')} 
    galleryDescriptionOnChangePosition={this.onChangeValue('galleryDescriptionPosition')} 
    galleryDescriptionOnChangeAnimate={this.onChangeValue('galleryDescriptionAnimate')}             
    galleryDescriptionOnChangeDuration={this.onChangeValue('galleryDescriptionDuration')}            
    galleryDescriptionOnChangeFontFamily={this.onChangeValue('galleryDescriptionFontFamily')}
    galleryDescriptionOnChangeFontSize={this.onChangeValue('galleryDescriptionFontSize')}                          
    galleryDescriptionOnChangeFontWeight={this.onChangeValue('galleryDescriptionFontWeight')}
    galleryDescriptionOnChangeFontStyle={this.onChangeValue('galleryDescriptionFontStyle')}             
    galleryDescriptionOnChangeStatus={this.onChangeValue('galleryDescriptionStatus')}
    galleryDescriptionOnChangeColor={this.onChangeColor('galleryDescriptionColor')}
    />
    
    }
    let footerInput ;
    if( this.state.footer !== "none"){
    footerInput=<FooterInput
    {...this.state}

    footerbackgroundOnChangeColor={this.onChangeColor('footerbackgroundColor')}
    footerPositionOnChange={this.onChangeValue('footerPosition')}
    footerTitleOnChange={this.onChangeValue('footerTitle')}
    footerTitleOnChangeAnimate={this.onChangeValue('footerTitleAnimate')}
    footerTitleOnChangeDuration={this.onChangeValue('footerTitleDuration')}         
    footerTitleOnChangeFontFamily={this.onChangeValue('footerTitleFontFamily')}      
    footerTitleOnChangeFontSize={this.onChangeValue('footerTitleFontSize')}        
    footerTitleOnChangeFontWeight={this.onChangeValue('footerTitleFontWeight')}        
    footerTitleOnChangeFontStyle={this.onChangeValue('footerTitleFontStyle')}
    footerTitleOnChangeStatus={this.onChangeValue('footerTitleStatus')}
    footerTitleOnChangeColor={this.onChangeColor('footerTitleColor')}

    footerDescriptionOnChange={this.onChangeValue('footerDescription')}
    footerDescriptionOnChangeAnimate={this.onChangeValue('footerDescriptionAnimate')}
    footerDescriptionOnChangeDuration={this.onChangeValue('footerDescriptionDuration')}        
    footerDescriptionOnChangeFontFamily={this.onChangeValue('footerDescriptionFontFamily')}            
    footerDescriptionOnChangeFontSize={this.onChangeValue('footerDescriptionFontSize')}            
    footerDescriptionOnChangeFontWeight={this.onChangeValue('footerDescriptionFontWeight')}          
    footerDescriptionOnChangeFontStyle={this.onChangeValue('footerDescriptionFontStyle')}
    footerDescriptionOnChangeStatus={this.onChangeValue('footerDescriptionStatus')}
    footerDescriptionOnChangeColor={this.onChangeColor('footerDescriptionColor')}
    
    />
    }
    // if (!this.state.isLoaded) return null;
    
    return (
      <div> 
      <Helmet>
      <title>{this.props.project}</title>
      {this.state.font.map((font => (
        font.font ==='none'?null:
      <link rel="stylesheet" key={font._key} href={"https://fonts.googleapis.com/css?family="+font.font}/>
      )))}
      </Helmet>
      <CreateProject
            open={this.state.createProject}
            onClose={this.popupClose('createProject')}
            label={this.props.project!==""?'Edit Project Name':'Create Project Name'}
            submit={this.submitCreateProject}
            labelButton='SUBMIT'
            textField=  {[
                        {_key:1,label:'Project Name',type:'text',value:this.state.project,onChange:this.onChangeProject('project')}
                        ]}
      /> 
      <div className={classes.root} >

        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
            <MenuIcon />
            </IconButton>   
            <Typography variant="title"  className={classes.grow} >
            <SettingProject style={{fontSize:'1vw',cursor: 'pointer',marginRight: '0.5vw'}} onClick={this.createProject}/>
              Project : {this.props.project.replace(/-/g,' ')}
            </Typography>
            <Typography variant="title" style={{fontSize:'1vw',color:"#000000"}} >
              Welcome : {this.props.user}
            </Typography>
            <Avatar alt="Remy Sharp" src={this.props.photoURL? this.props.photoURL:avatarImage} className={classes.bigAvatar} />
            <Button variant="contained" color="primary" className={classes.button} onClick={this.popupLogout}>Logout
            <ExitIcon className={classes.rightIcon}/>
            </Button>
            <Popup
              open={this.state.popupLogout}
              close={this.popupLogoutClose}
              title="Logout"
              description="Are you sure Logout"
              yes={this.logout}
              no={this.popupLogoutClose}
            />
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
            <List disablePadding={true}>
            <BlockInput
            open={this.state.openHeader}
            label='Header'
            content1={menubarInput}
            />
            <BlockInput
            open={this.state.openHeader}
            label='Content'
            content1={heroInput}
            content2={carouselInput}
            content3={galleryInput}
            />
            <BlockInput
            open={this.state.openHeader}
            label='Footer'
            content1={footerInput}
            />
            </List>    
           <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} /> 
            <TabWebsite    
              undefinedOneTab={this.state.undefinedOneTab}
              {...this.state}
            />       
        </main>
      </div>
      </div>   
    );
  }
}

CMS.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  tabs: state.tabs ,
  url: state.urlImage ,
  user:state.user,
  email:state.email,
  photoURL:state.photoURL,
  project:state.project
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(CMS));
