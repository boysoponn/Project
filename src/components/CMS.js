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
import Button from '@material-ui/core/Button';
import ExitIcon from '@material-ui/icons/ExitToApp';
import TabWebsite from './template/tab'
import { connect } from 'react-redux'
import HeroInput from './sidebarInput/heroInput';
import CarouselInput from './sidebarInput/carouselInput';
import MenubarInput from './sidebarInput/menubarInput';
import GalleryInput from './sidebarInput/galleryInput';
import FooterInput from './sidebarInput/footerInput';
import { checkTab} from './actions';
import BlockInput from './template/blockInput';
import Popup from './template/popup'
import Avatar from '@material-ui/core/Avatar';
import avatarImage from './image/avatar.png'
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
    color:"#000000"
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
    footerContent:[],
    carouselContent:[],
    menubarContent:[],
    galleryContent:[],
    openHeader:false,
    undefinedOneTab:true
  };
}

componentDidMount(){
  this.firstTabs();
}

firstTabs=()=>{
  let carouselItems = config.database().ref('project/'+this.props.email);
  carouselItems.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
  
    if(snapshotArr[0] !== undefined){
      this.props.dispatch(checkTab(snapshotArr[0]._key)); this.setState({undefinedOneTab:false})}
      else{ this.setState({undefinedOneTab:true})
      }
    });
  
    let global = config.database().ref('global/'+this.props.email+'/content');
    global.on('value', async (snapshot) => { 
    const snapshotValue = snapshot.val(); 
    let data = _(snapshotValue).value();
    if(data !== null){this.setState({
      footerTitle:data.footerTitle,
      footerDescription:data.footerDescription,
      footerbackgroundColor:data.footerbackgroundColor,
      footerTitleAnimate:data.footerTitleAnimate,
      footerTitleDuration:data.footerTitleDuration,
      footerTitleFontFamily:data.footerTitleFontFamily,
      footerTitleFontSize:data.footerTitleFontSize,
      footerTitleFontWeight:data.footerTitleFontWeight,
      footerTitleFontStyle:data.footerTitleFontStyle,
      footerTitleStatus:data.footerTitleStatus,
      footerTitleColor:data.footerTitleColor,
  
      footerDescriptionAnimate:data.footerDescriptionAnimate,
      footerDescriptionDuration:data.footerDescriptionDuration,
      footerDescriptionFontFamily:data.footerDescriptionFontFamily,
      footerDescriptionFontSize:data.footerDescriptionFontSize,
      footerDescriptionFontWeight:data.footerDescriptionFontWeight,
      footerDescriptionFontStyle:data.footerDescriptionFontStyle,
      footerDescriptionStatus:data.footerDescriptionStatus,
      footerDescriptionColor:data.footerDescriptionColor,
    })}});
  }

componentWillReceiveProps(nextProps){
  let app = config.database().ref('project/'+this.props.email+'/'+nextProps.tabs);
  app.on('value', async (snapshot) => { 
  const snapshotValue = snapshot.val(); 
  let data = _(snapshotValue).value();
  if(data !== null){
        this.setState({
          path:data.path,
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
          this.setState({undefinedOneTab:true,menubar:'none',footer:'none'})        
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

  let globalContent = config.database().ref('global/'+this.props.email+'/menubarContent/');
  globalContent.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
    this.setState({ menubarContent:snapshotArr});});

  let footerContent = config.database().ref('global/'+this.props.email+'/footerContent/');
  footerContent.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
    this.setState({ footerContent:snapshotArr});});
  
    let global = config.database().ref('global/'+this.props.email+'/');
    global.on('value', async (snapshot) => { 
    const snapshotValue = snapshot.val(); 
    let data = _(snapshotValue).value();
    if(data !== null){this.setState({menubarLogo:data.menubarLogo.image ,menubarbackgroundColor:data.menubarSetting.menubarbackgroundColor})}});
}

  popupLogout = () => {this.setState({ popupLogout: true });};
  popupLogoutClose = () => {this.setState({ popupLogout: false });};
  logout =() => {config.auth().signOut();window.location.reload(); };
  handleDrawerOpen = () => {this.setState({ open: true ,});}
  handleDrawerClose = () => {this.setState({  open: false ,});};
  onChangeColor = name=> (color) => {this.setState({  [name]: color.hex });};
  onChangeChecked = name=> (e) => {this.setState({  [name]: e.target.checked });};  
  onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};

  render() {
    const { classes, theme } = this.props;
    let heroInput;
    if( this.state.hero !== "none"){
    heroInput =
      <HeroInput 
      hero={this.state.hero}
      heroYoutubeID={this.state.heroYoutubeID}
      herobackgroundColor={this.state.herobackgroundColor}
      heroImagePick={this.state.heroBackgroundImage}
      heroTitle={this.state.heroTitle}             
      heroTitleAnimate={this.state.heroTitleAnimate} 
      heroTitleDuration={this.state.heroTitleDuration} 
      heroTitleFontFamily={this.state.heroTitleFontFamily}
      heroTitleFontSize={this.state.heroTitleFontSize}
      heroTitleFontWeight={this.state.heroTitleFontWeight}
      heroTitleFontStyle={this.state.heroTitleFontStyle}
      heroTitleStatus={this.state.heroTitleStatus} 
      heroTitleColor={this.state.heroTitleColor}
      heroTitlePosition={this.state.heroTitlePosition} 

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

      heroDescription={this.state.heroDescription}
      heroDescriptionAnimate={this.state.heroDescriptionAnimate}
      heroDescriptionDuration={this.state.heroDescriptionDuration} 
      heroDescriptionFontFamily= {this.state.heroDescriptionFontFamily}
      heroDescriptionFontSize={this.state.heroDescriptionFontSize}
      heroDescriptionFontWeight={this.state.heroDescriptionFontWeight}
      heroDescriptionFontStyle={this.state.heroDescriptionFontStyle}
      heroDescriptionStatus={this.state.heroDescriptionStatus}
      heroDescriptionColor={this.state.heroDescriptionColor}
      heroDescriptionPosition={this.state.heroDescriptionPosition}

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

      heroButton={this.state.heroButton} 
      heroButtonPosition={this.state.heroButtonPosition} 
      heroButtonSelected={this.state.heroButtonSelected}
      heroButtonAnimate={this.state.heroButtonAnimate} 
      heroButtonDuration={this.state.heroButtonDuration} 
      heroButtonFontFamily={this.state.heroButtonFontFamily}
      heroButtonFontSize={this.state.heroButtonFontSize}
      heroButtonFontWeight={this.state.heroButtonFontWeight}
      heroButtonFontStyle={this.state.heroButtonFontStyle}
      heroButtonStatus={this.state.heroButtonStatus}
      heroButtonColor={this.state.heroButtonColor}
      heroButtonSwapColor={this.state.heroButtonSwapColor}
      heroButtonSwap={this.state.heroButtonSwap}
      heroButtonLink={this.state.heroButtonLink}
      heroButtonLinkTarget={this.state.heroButtonLinkTarget}
      heroButtonRadius={this.state.heroButtonRadius}
      heroButtonBGColor={this.state.heroButtonBGColor}
      heroButtonHBGColor={this.state.heroButtonHBGColor}
      heroButtonBDColor={this.state.heroButtonBDColor}
      heroButtonHBDColor={this.state.heroButtonHBDColor}
      heroButtonHoverColor={this.state.heroButtonHoverColor}
              
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
      carouselContent={this.state.carouselContent}
      carouselSpeed={this.state.carouselSpeed}
      carouselPauseOnHover={this.state.carouselPauseOnHover}
      carouselDots={this.state.carouselDots}
      carouselAutoplay={this.state.carouselAutoplay}
      carouselVertical={this.state.carouselVertical}
      carouselBackgroundColor={this.state.carouselBackgroundColor}

      carouselTitle={this.state.carouselTitle}
      carouselTitleAnimate={this.state.carouselTitleAnimate}
      carouselTitleDuration={this.state.carouselTitleDuration}
      carouselTitleFontFamily={this.state.carouselTitleFontFamily}
      carouselTitleFontSize={this.state.carouselTitleFontSize}
      carouselTitleFontWeight={this.state.carouselTitleFontWeight}
      carouselTitleFontStyle={this.state.carouselTitleFontStyle}
      carouselTitleStatus={this.state.carouselTitleStatus}
      carouselTitleColor={this.state.carouselTitleColor}
      carouselTitlePosition={this.state.carouselTitlePosition}

      carouselDescription={this.state.carouselDescription}
      carouselDescriptionAnimate={this.state.carouselDescriptionAnimate}
      carouselDescriptionDuration={this.state.carouselDescriptionDuration}
      carouselDescriptionFontFamily={this.state.carouselDescriptionFontFamily}
      carouselDescriptionFontSize={this.state.carouselDescriptionFontSize}
      carouselDescriptionFontWeight={this.state.carouselDescriptionFontWeight}
      carouselDescriptionFontStyle={this.state.carouselDescriptionFontStyle}
      carouselDescriptionStatus={this.state.carouselDescriptionStatus}
      carouselDescriptionColor={this.state.carouselDescriptionColor}
      carouselDescriptionPosition={this.state.carouselDescriptionPosition}

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
      menubar={this.state.menubar}
      menubarLogo={this.state.menubarLogo}
      menubarbackgroundColor={this.state.menubarbackgroundColor}
      menubarContent={this.state.menubarContent}
      linkLogo={this.props.linkLogo}
      onChangeLinkLogo={this.onChangeChecked('linkLogo')}
      linkLogoTarget={this.props.linkLogoTarget}
      onChangeLinkLogoTarget={this.onChangeChecked('linkLogoTarget')}
      menubarbackgroundOnChangeColor={this.onChangeColor('menubarbackgroundColor')}
    />
    }
    let galleryInput ;
    if( this.state.gallery !== "none"){
    galleryInput = <GalleryInput
    galleryContent={this.state.galleryContent}
    galleryBackgroundColor={this.state.galleryBackgroundColor}
    galleryTitle={this.state.galleryTitle}  
    galleryTitleAnimate={this.state.galleryTitleAnimate} 
    galleryTitleDuration={this.state.galleryTitleDuration}   
    galleryTitleFontFamily={this.state.galleryTitleFontFamily}
    galleryTitleFontSize={this.state.galleryTitleFontSize}
    galleryTitleFontWeight={this.state.galleryTitleFontWeight}
    galleryTitleFontStyle={this.state.galleryTitleFontStyle}
    galleryTitleStatus={this.state.galleryTitleStatus}
    galleryTitleColor={this.state.galleryTitleColor}
    galleryTitlePosition={this.state.galleryTitlePosition} 

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

    galleryDescription={this.state.galleryDescription}  
    galleryDescriptionPosition={this.state.galleryDescriptionPosition}  
    galleryDescriptionAnimate={this.state.galleryDescriptionAnimate} 
    galleryDescriptionDuration={this.state.galleryDescriptionDuration}   
    galleryDescriptionFontFamily={this.state.galleryDescriptionFontFamily}
    galleryDescriptionFontSize={this.state.galleryDescriptionFontSize}
    galleryDescriptionFontWeight={this.state.galleryDescriptionFontWeight}
    galleryDescriptionFontStyle={this.state.galleryDescriptionFontStyle}
    galleryDescriptionStatus={this.state.galleryDescriptionStatus}
    galleryDescriptionColor={this.state.galleryDescriptionColor}

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
    footerContent={this.state.footerContent}

    footerTitle={this.state.footerTitle}
    footerDescription={this.state.footerDescription}
    footerbackgroundColor={this.state.footerbackgroundColor}
    footerTitleAnimate={this.state.footerTitleAnimate}
    footerTitleDuration={this.state.footerTitleDuration}
    footerTitleFontFamily={this.state.footerTitleFontFamily}
    footerTitleFontSize={this.state.footerTitleFontSize}
    footerTitleFontWeight={this.state.footerTitleFontWeight}
    footerTitleFontStyle={this.state.footerTitleFontStyle}
    footerTitleStatus={this.state.footerTitleStatus}
    footerTitleColor={this.state.footerTitleColor}

    footerbackgroundOnChangeColor={this.onChangeColor('footerbackgroundColor')}
    footerTitleOnChange={this.onChangeValue('footerTitle')}
    footerTitleOnChangeAnimate={this.onChangeValue('footerTitleAnimate')}
    footerTitleOnChangeDuration={this.onChangeValue('footerTitleDuration')}         
    footerTitleOnChangeFontFamily={this.onChangeValue('footerTitleFontFamily')}      
    footerTitleOnChangeFontSize={this.onChangeValue('footerTitleFontSize')}        
    footerTitleOnChangeFontWeight={this.onChangeValue('footerTitleFontWeight')}        
    footerTitleOnChangeFontStyle={this.onChangeValue('footerTitleFontStyle')}
    footerTitleOnChangeStatus={this.onChangeValue('footerTitleStatus')}
    footerTitleOnChangeColor={this.onChangeColor('footerTitleColor')}

    footerDescriptionAnimate={this.state.footerDescriptionAnimate}
    footerDescriptionDuration={this.state.footerDescriptionDuration}
    footerDescriptionFontFamily={this.state.footerDescriptionFontFamily}
    footerDescriptionFontSize={this.state.footerDescriptionFontSize}
    footerDescriptionFontWeight={this.state.footerDescriptionFontWeight}
    footerDescriptionFontStyle={this.state.footerDescriptionFontStyle}
    footerDescriptionStatus={this.state.footerDescriptionStatus}
    footerDescriptionColor={this.state.footerDescriptionColor}

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
              CMS PROJECT
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
              title="Are you sure Logout"
              description="eeeeeeeeeeeeee"
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
              path={this.state.path}
              undefinedOneTab={this.state.undefinedOneTab}
            
              menubarLogo={this.state.menubarLogo}
              menubarbackgroundColor={this.state.menubarbackgroundColor}
              menubarContent={this.state.menubarContent}   
              herobackgroundColor={this.state.herobackgroundColor}
              heroBackgroundImage={this.state.heroBackgroundImage}
              heroYoutubeID={this.state.heroYoutubeID}
              heroTitle={this.state.heroTitle}             
              heroTitleAnimate={this.state.heroTitleAnimate} 
              heroTitleDuration={this.state.heroTitleDuration} 
              heroTitleFontFamily={this.state.heroTitleFontFamily}
              heroTitleFontSize={this.state.heroTitleFontSize}
              heroTitleFontWeight={this.state.heroTitleFontWeight}
              heroTitleFontStyle={this.state.heroTitleFontStyle}
              heroTitleStatus={this.state.heroTitleStatus} 
              heroTitleColor={this.state.heroTitleColor}
              heroTitlePosition={this.state.heroTitlePosition}  

              heroDescription={this.state.heroDescription}
              heroDescriptionAnimate={this.state.heroDescriptionAnimate}
              heroDescriptionDuration={this.state.heroDescriptionDuration} 
              heroDescriptionFontFamily= {this.state.heroDescriptionFontFamily}
              heroDescriptionFontSize={this.state.heroDescriptionFontSize}
              heroDescriptionFontWeight={this.state.heroDescriptionFontWeight}
              heroDescriptionFontStyle={this.state.heroDescriptionFontStyle}
              heroDescriptionStatus={this.state.heroDescriptionStatus}
              heroDescriptionColor={this.state.heroDescriptionColor}
              heroDescriptionPosition={this.state.heroDescriptionPosition}

              heroButton={this.state.heroButton} 
              heroButtonPosition={this.state.heroButtonPosition} 
              heroButtonSelected={this.state.heroButtonSelected}
              heroButtonAnimate={this.state.heroButtonAnimate} 
              heroButtonDuration={this.state.heroButtonDuration} 
              heroButtonFontFamily={this.state.heroButtonFontFamily}
              heroButtonFontSize={this.state.heroButtonFontSize}
              heroButtonFontWeight={this.state.heroButtonFontWeight}
              heroButtonFontStyle={this.state.heroButtonFontStyle}
              heroButtonStatus={this.state.heroButtonStatus}
              heroButtonColor={this.state.heroButtonColor}
              heroButtonSwapColor={this.state.heroButtonSwapColor}
              heroButtonSwap={this.state.heroButtonSwap}
              heroButtonLink={this.state.heroButtonLink}
              heroButtonLinkTarget={this.state.heroButtonLinkTarget}
              heroButtonRadius={this.state.heroButtonRadius}
              heroButtonBGColor={this.state.heroButtonBGColor}
              heroButtonHBGColor={this.state.heroButtonHBGColor}
              heroButtonBDColor={this.state.heroButtonBDColor}
              heroButtonHBDColor={this.state.heroButtonHBDColor}
              heroButtonHoverColor={this.state.heroButtonHoverColor}
                      
              carouselBackgroundColor={this.state.carouselBackgroundColor}
              carouselContent={this.state.carouselContent}
              carouselSpeed={this.state.carouselSpeed}
              carouselPauseOnHover={this.state.carouselPauseOnHover}
              carouselDots={this.state.carouselDots}
              carouselAutoplay={this.state.carouselAutoplay}
              carouselVertical={this.state.carouselVertical}
              carouselTitle={this.state.carouselTitle}
              carouselDescription={this.state.carouselDescription}
              carouselTitlePosition={this.state.carouselTitlePosition}
              carouselTitleAnimate={this.state.carouselTitleAnimate}
              carouselTitleDuration={this.state.carouselTitleDuration}
              carouselTitleFontFamily={this.state.carouselTitleFontFamily}
              carouselTitleFontSize={this.state.carouselTitleFontSize}
              carouselTitleFontWeight={this.state.carouselTitleFontWeight}
              carouselTitleFontStyle={this.state.carouselTitleFontStyle}
              carouselTitleStatus={this.state.carouselTitleStatus}
              carouselTitleColor={this.state.carouselTitleColor}
              carouselDescriptionAnimate={this.state.carouselDescriptionAnimate}
              carouselDescriptionDuration={this.state.carouselDescriptionDuration}
              carouselDescriptionFontFamily={this.state.carouselDescriptionFontFamily}
              carouselDescriptionFontSize={this.state.carouselDescriptionFontSize}
              carouselDescriptionFontWeight={this.state.carouselDescriptionFontWeight}
              carouselDescriptionFontStyle={this.state.carouselDescriptionFontStyle}
              carouselDescriptionStatus={this.state.carouselDescriptionStatus}
              carouselDescriptionColor={this.state.carouselDescriptionColor}
              carouselDescriptionPosition={this.state.carouselDescriptionPosition}

              galleryContent={this.state.galleryContent}
              galleryBackgroundColor={this.state.galleryBackgroundColor}
              galleryTitle={this.state.galleryTitle}  
              galleryTitleAnimate={this.state.galleryTitleAnimate} 
              galleryTitleDuration={this.state.galleryTitleDuration}   
              galleryTitleFontFamily={this.state.galleryTitleFontFamily}
              galleryTitleFontSize={this.state.galleryTitleFontSize}
              galleryTitleFontWeight={this.state.galleryTitleFontWeight}
              galleryTitleFontStyle={this.state.galleryTitleFontStyle}
              galleryTitleStatus={this.state.galleryTitleStatus}
              galleryTitleColor={this.state.galleryTitleColor}
              galleryTitlePosition={this.state.galleryTitlePosition}  
          
              galleryDescription={this.state.galleryDescription}  
              galleryDescriptionAnimate={this.state.galleryDescriptionAnimate} 
              galleryDescriptionDuration={this.state.galleryDescriptionDuration}   
              galleryDescriptionFontFamily={this.state.galleryDescriptionFontFamily}
              galleryDescriptionFontSize={this.state.galleryDescriptionFontSize}
              galleryDescriptionFontWeight={this.state.galleryDescriptionFontWeight}
              galleryDescriptionFontStyle={this.state.galleryDescriptionFontStyle}
              galleryDescriptionStatus={this.state.galleryDescriptionStatus}
              galleryDescriptionColor={this.state.galleryDescriptionColor}
              galleryDescriptionPosition={this.state.galleryDescriptionPosition} 

              footerContent={this.state.footerContent}
              footerTitle={this.state.footerTitle}
              footerDescription={this.state.footerDescription}
              footerbackgroundColor={this.state.footerbackgroundColor}
              footerTitleAnimate={this.state.footerTitleAnimate}
              footerTitleDuration={this.state.footerTitleDuration}
              footerTitleFontFamily={this.state.footerTitleFontFamily}
              footerTitleFontSize={this.state.footerTitleFontSize}
              footerTitleFontWeight={this.state.footerTitleFontWeight}
              footerTitleFontStyle={this.state.footerTitleFontStyle}
              footerTitleStatus={this.state.footerTitleStatus}
              footerTitleColor={this.state.footerTitleColor}
          
              footerDescriptionAnimate={this.state.footerDescriptionAnimate}
              footerDescriptionDuration={this.state.footerDescriptionDuration}
              footerDescriptionFontFamily={this.state.footerDescriptionFontFamily}
              footerDescriptionFontSize={this.state.footerDescriptionFontSize}
              footerDescriptionFontWeight={this.state.footerDescriptionFontWeight}
              footerDescriptionFontStyle={this.state.footerDescriptionFontStyle}
              footerDescriptionStatus={this.state.footerDescriptionStatus}
              footerDescriptionColor={this.state.footerDescriptionColor}
            />       
        </main>
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
  chooseTemplate:state.chooseTemplate,
  photoURL:state.photoURL
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(CMS));
