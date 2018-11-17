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
import { checkTab} from './actions'
const drawerWidth = 300;

const styles = theme => ({
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
    carouselContent:[],
    menubar:[],
    galleryContent:[],

  };
}

componentDidMount=()=>{
  let carouselItems = config.database().ref('project/'+this.props.user);
  carouselItems.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
    this.setState({oneTab:snapshotArr[0]}); });
}

componentWillReceiveProps(nextProps){
  if(this.state.oneTab !== 'global'){
  let app = config.database().ref('project/'+this.props.user+'/'+nextProps.tabs);
  app.on('value', async (snapshot) => { 
  const snapshotValue = snapshot.val(); 
  let data = _(snapshotValue).value();
        this.setState({
          hero:data.hero,
          carousel:data.carousel,
          gallery:data.gallery,
          herobackgroundColor:data.heroContent.backgroundColor,
          heroBackgroundImage:data.heroContent.image,
          heroTitle:data.heroContent.heroTitle,
          heroTitleAnimate:data.heroContent.heroTitleAnimate,
          heroTitleDuration:data.heroContent.heroTitleDuration,
          heroTitleFontFamily:data.heroContent.heroTitleFontFamily,
          heroTitleFontSize:data.heroContent.heroTitleFontSize,
          heroTitleFontWeight:data.heroContent.heroTitleFontWeight,
          heroTitleFontStyle:data.heroContent.heroTitleFontStyle,
          heroTitleStatus:data.heroContent.heroTitleStatus,
          heroTitleColor:data.heroContent.heroTitleColor,

          heroDescription:data.heroContent.heroDescription,
          heroDescriptionAnimate:data.heroContent.heroDescriptionAnimate,
          heroDescriptionDuration:data.heroContent.heroDescriptionDuration,
          heroDescriptionFontFamily:data.heroContent.heroDescriptionFontFamily,
          heroDescriptionFontSize:data.heroContent.heroDescriptionFontSize,
          heroDescriptionFontWeight:data.heroContent.heroDescriptionFontWeight,
          heroDescriptionFontStyle:data.heroContent.heroDescriptionFontStyle,
          heroDescriptionStatus:data.heroContent.heroDescriptionStatus,
          heroDescriptionColor:data.heroContent.heroDescriptionColor,

          heroButton:data.heroContent.heroButton,
          heroButtonSelected:data.heroContent.heroButtonSelected,
          heroButtonAnimate:data.heroContent.heroButtonAnimate,
          heroButtonDuration:data.heroContent.heroButtonDuration,
          heroButtonFontFamily:data.heroContent.heroButtonFontFamily,
          heroButtonFontSize:data.heroContent.heroButtonFontSize,
          heroButtonFontWeight:data.heroContent.heroButtonFontWeight,
          heroButtonFontStyle:data.heroContent.heroButtonFontStyle,
          heroButtonStatus:data.heroContent.heroButtonStatus,
          heroButtonColor:data.heroContent.heroButtonColor,
          heroButtonSwapColor:data.heroContent.heroButtonSwapColor,
          heroButtonSwap:data.heroContent.heroButtonSwap,
          heroButtonLink:data.heroContent.heroButtonLink,
          heroButtonLinkTarget:data.heroContent.heroButtonLinkTarget,
          heroButtonRadius:data.heroContent.heroButtonRadius,
          heroButtonBGColor:data.heroContent.heroButtonBGColor,
          heroButtonHBGColor:data.heroContent.heroButtonHBGColor,
          heroButtonBDColor:data.heroContent.heroButtonBDColor,
          heroButtonHBDColor:data.heroContent.heroButtonHBDColor,
          heroButtonHoverColor:data.heroContent.heroButtonHoverColor,

          carouselSpeed:data.carouselSetting.speed,
          carouselPauseOnHover:data.carouselSetting.pauseOnHover,
          carouselDots:data.carouselSetting.dots,
          carouselAutoplay:data.carouselSetting.autoplay,
          carouselVertical:data.carouselSetting.vertical,

          galleryBackgroundColor:data.galleryContent.backgroundColor,
          galleryTitle:data.galleryContent.title,
          galleryTitleAnimate:data.galleryContent.titleAnimate,
          galleryTitleDuration:data.galleryContent.titleDuration,
          galleryTitleFontFamily:data.galleryContent.titleFontFamily,
          galleryTitleFontSize:data.galleryContent.titleFontSize,
          galleryTitleFontWeight:data.galleryContent.titleFontWeight,
          galleryTitleFontStyle:data.galleryContent.titleFontStyle,
          galleryTitleStatus:data.galleryContent.titleStatus,
          galleryTitleColor:data.galleryContent.titleColor,

          galleryDescription:data.galleryContent.description,
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
  });
//สำหรับไอเทมที่เป็น Array
  let carouselItems = config.database().ref('project/'+this.props.user+'/'+nextProps.tabs+'/carouselContent');
  carouselItems.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
    this.setState({carouselContent:snapshotArr}); });

  let galleryContent = config.database().ref('project/'+this.props.user+'/'+nextProps.tabs+'/galleryItem');
  galleryContent.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev;}, []); 
    this.setState({galleryContent:snapshotArr}); });

  let global = config.database().ref('project/'+this.props.user+'/global/menubar/');
  global.on('value', async (snapshot) => { 
    const snapshotValue2 = snapshot.val(); 
    const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {prev.push({_key: cur,...snapshotValue2[cur]});return prev; }, []); 
    this.setState({ menubar:snapshotArr});});
  }
}
 
  logout =() => {config.auth().signOut();window.location.reload(); };
  handleDrawerOpen = () => {this.setState({ open: true ,});}
  handleDrawerClose = () => {this.setState({  open: false ,});};
  onChangeColor = name=> (color) => {this.setState({  [name]: color.hex });};
  onChangeChecked = name=> (e) => {this.setState({  [name]: e.target.checked });};  
  onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};

  render() {
    if(this.state.oneTab !== undefined && this.state.oneTab !== 'global'){
      let path=this.state.oneTab._key
      this.props.dispatch(checkTab(path));
    }
    console.log(this.state.oneTab)
    const { classes, theme } = this.props;
    let heroInput;
    if( this.state.hero !== "none"){
    heroInput =
      <HeroInput 
      hero={this.state.hero}
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

      heroDescription={this.state.heroDescription}
      heroDescriptionAnimate={this.state.heroDescriptionAnimate}
      heroDescriptionDuration={this.state.heroDescriptionDuration} 
      heroDescriptionFontFamily= {this.state.heroDescriptionFontFamily}
      heroDescriptionFontSize={this.state.heroDescriptionFontSize}
      heroDescriptionFontWeight={this.state.heroDescriptionFontWeight}
      heroDescriptionFontStyle={this.state.heroDescriptionFontStyle}
      heroDescriptionStatus={this.state.heroDescriptionStatus}
      heroDescriptionColor={this.state.heroDescriptionColor}

      heroDescriptionOnChange={this.onChangeValue('heroDescription')}
      heroDescriptionOnChangeAnimate={this.onChangeValue('heroDescriptionAnimate')}
      heroDescriptionOnChangeDuration={this.onChangeValue('heroDescriptionDuration')}        
      heroDescriptionOnChangeFontFamily={this.onChangeValue('heroDescriptionFontFamily')}            
      heroDescriptionOnChangeFontSize={this.onChangeValue('heroDescriptionFontSize')}            
      heroDescriptionOnChangeFontWeight={this.onChangeValue('heroDescriptionFontWeight')}          
      heroDescriptionOnChangeFontStyle={this.onChangeValue('heroDescriptionFontStyle')}
      heroDescriptionOnChangeStatus={this.onChangeValue('heroDescriptionStatus')}
      heroDescriptionOnChangeColor={this.onChangeColor('heroDescriptionColor')}

      heroButton={this.state.heroButton} 
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
      carouselOnChangePauseOnHover={this.onChangeChecked('carouselPauseOnHover')}
      carouselOnChangeAutoplay={this.onChangeChecked('carouselAutoplay')}
      carouselOnChangeVertical={this.onChangeChecked('carouselVertical')}
      carouselOnChangeSpeed={this.onChangeValue('carouselSpeed')}
      carouselOnChangeDots={this.onChangeChecked('carouselDots')}
    />
    };
    let menubar =   <MenubarInput
    menubar={this.state.menubar}
    />
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

    galleryBackgroundOnChangeColor={this.onChangeColor('galleryBackgroundColor')}
    galleryTitleOnChange={this.onChangeValue('galleryTitle')} 
    galleryTitleOnChangeAnimate={this.onChangeValue('galleryTitleAnimate')}           
    galleryTitleOnChangeFontFamily={this.onChangeValue('galleryTitleFontFamily')}
    galleryTitleOnChangeFontSize={this.onChangeValue('galleryTitleFontSize')}                         
    galleryTitleOnChangeFontWeight={this.onChangeValue('galleryTitleFontWeight')}
    galleryTitleOnChangeFontStyle={this.onChangeValue('galleryTitleFontStyle')}             
    galleryTitleOnChangeStatus={this.onChangeValue('galleryTitleStatus')}
    galleryTitleOnChangeColor={this.onChangeColor('galleryTitleColor')}

    galleryDescription={this.state.galleryDescription}  
    galleryDescriptionAnimate={this.state.galleryDescriptionAnimate} 
    galleryDescriptionDuration={this.state.galleryDescriptionDuration}   
    galleryDescriptionFontFamily={this.state.galleryDescriptionFontFamily}
    galleryDescriptionFontSize={this.state.galleryDescriptionFontSize}
    galleryDescriptionFontWeight={this.state.galleryDescriptionFontWeight}
    galleryDescriptionFontStyle={this.state.galleryDescriptionFontStyle}
    galleryDescriptionStatus={this.state.galleryDescriptionStatus}
    galleryDescriptionColor={this.state.galleryDescriptionColor}

    galleryDescriptionOnChange={this.onChangeValue('galleryDescription')} 
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

            <Typography color="inherit" className={classes.grow} >

            </Typography>
            <Typography variant="title" style={{color:"#000000"}} >
              Welcome : {this.props.user}
            </Typography>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.logout}>Logout
            <ExitIcon className={classes.rightIcon}/>
            </Button>
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
            {menubar}
            {heroInput}
            {carouselInput}
            {galleryInput}
            </List>
            
           <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} /> 
            <TabWebsite    
              menubar={this.state.menubar}   
              herobackgroundColor={this.state.herobackgroundColor}
              heroBackgroundImage={this.state.heroBackgroundImage}
              heroTitle={this.state.heroTitle}             
              heroTitleAnimate={this.state.heroTitleAnimate} 
              heroTitleDuration={this.state.heroTitleDuration} 
              heroTitleFontFamily={this.state.heroTitleFontFamily}
              heroTitleFontSize={this.state.heroTitleFontSize}
              heroTitleFontWeight={this.state.heroTitleFontWeight}
              heroTitleFontStyle={this.state.heroTitleFontStyle}
              heroTitleStatus={this.state.heroTitleStatus} 
              heroTitleColor={this.state.heroTitleColor}

              heroDescription={this.state.heroDescription}
              heroDescriptionAnimate={this.state.heroDescriptionAnimate}
              heroDescriptionDuration={this.state.heroDescriptionDuration} 
              heroDescriptionFontFamily= {this.state.heroDescriptionFontFamily}
              heroDescriptionFontSize={this.state.heroDescriptionFontSize}
              heroDescriptionFontWeight={this.state.heroDescriptionFontWeight}
              heroDescriptionFontStyle={this.state.heroDescriptionFontStyle}
              heroDescriptionStatus={this.state.heroDescriptionStatus}
              heroDescriptionColor={this.state.heroDescriptionColor}

              heroButton={this.state.heroButton} 
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
                      

              carousel={this.state.carousel}
              carouselContent={this.state.carouselContent}
              carouselSpeed={this.state.carouselSpeed}
              carouselPauseOnHover={this.state.carouselPauseOnHover}
              carouselDots={this.state.carouselDots}
              carouselAutoplay={this.state.carouselAutoplay}
              carouselVertical={this.state.carouselVertical}
              carouselOnChangePauseOnHover={this.carouselOnChangePauseOnHover}
              carouselOnChangeAutoplay={this.carouselOnChangeAutoplay}
              carouselOnChangeVertical={this.carouselOnChangeVertical}
              carouselOnChangeSpeed={this.carouselOnChangeSpeed}
              carouselOnChangeDots={this.carouselOnChangeDots}

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
          
              galleryDescription={this.state.galleryDescription}  
              galleryDescriptionAnimate={this.state.galleryDescriptionAnimate} 
              galleryDescriptionDuration={this.state.galleryDescriptionDuration}   
              galleryDescriptionFontFamily={this.state.galleryDescriptionFontFamily}
              galleryDescriptionFontSize={this.state.galleryDescriptionFontSize}
              galleryDescriptionFontWeight={this.state.galleryDescriptionFontWeight}
              galleryDescriptionFontStyle={this.state.galleryDescriptionFontStyle}
              galleryDescriptionStatus={this.state.galleryDescriptionStatus}
              galleryDescriptionColor={this.state.galleryDescriptionColor}

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
  user:state.user
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(CMS));
