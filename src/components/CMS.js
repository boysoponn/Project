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
import HeroInput from './sidebarInput/heroInput';
import ModalUploadWrapped from './sidebarInput/functionUpload/modalUpload';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ExitIcon from '@material-ui/icons/ExitToApp';
import TabWebsite from './template/tab'
import { connect } from 'react-redux'
// import {getUrlImage} from './actions'

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
  this.save = this.save.bind(this);
  this.logout = this.logout.bind(this);
  this.heroTitleOnChange = this.heroTitleOnChange.bind(this);  
  this.heroTitleOnChangeAnimate = this.heroTitleOnChangeAnimate.bind(this); 
  this.heroTitleOnChangeDuration = this.heroTitleOnChangeDuration.bind(this); 
  this.heroTitleOnChangeFontFamily = this.heroTitleOnChangeFontFamily.bind(this); 
  this.heroTitleOnChangeFontSize = this.heroTitleOnChangeFontSize.bind(this); 
  this.heroTitleOnChangeFontWeight = this.heroTitleOnChangeFontWeight.bind(this); 
  this.heroTitleOnChangeFontStyle = this.heroTitleOnChangeFontStyle.bind(this);
  this.heroTitleOnChangeStatus = this.heroTitleOnChangeStatus.bind(this); 
  this.heroTitleOnChangeStatus = this.heroTitleOnChangeStatus.bind(this); 
  this.heroTitleOnChangeColor = this.heroTitleOnChangeColor.bind(this); 

  this.heroDescriptionOnChange = this.heroDescriptionOnChange.bind(this); 
  this.heroDescriptionOnChangeAnimate = this.heroDescriptionOnChangeAnimate.bind(this); 
  this.heroDescriptionOnChangeDuration = this.heroDescriptionOnChangeDuration.bind(this); 
  this.heroDescriptionOnChangeFontFamily = this.heroDescriptionOnChangeFontFamily.bind(this); 
  this.heroDescriptionOnChangeFontSize = this.heroDescriptionOnChangeFontSize.bind(this); 
  this.heroDescriptionOnChangeFontWeight = this.heroDescriptionOnChangeFontWeight.bind(this); 
  this.heroDescriptionOnChangeFontStyle = this.heroDescriptionOnChangeFontStyle.bind(this);
  this.heroDescriptionOnChangeStatus = this.heroDescriptionOnChangeStatus.bind(this); 
  this.heroDescriptionOnChangeColor = this.heroDescriptionOnChangeColor.bind(this);


  this.heroButtonOnChange = this.heroButtonOnChange.bind(this); 
  this.heroButtonOnChangeSelected = this.heroButtonOnChangeSelected.bind(this);
  this.heroButtonOnChangeAnimate = this.heroButtonOnChangeAnimate.bind(this); 
  this.heroButtonOnChangeDuration = this.heroButtonOnChangeDuration.bind(this); 
  this.heroButtonOnChangeFontFamily = this.heroButtonOnChangeFontFamily.bind(this); 
  this.heroButtonOnChangeFontSize = this.heroButtonOnChangeFontSize.bind(this); 
  this.heroButtonOnChangeFontWeight = this.heroButtonOnChangeFontWeight.bind(this); 
  this.heroButtonOnChangeFontStyle = this.heroButtonOnChangeFontStyle.bind(this);
  this.heroButtonOnChangeStatus = this.heroButtonOnChangeStatus.bind(this); 
  this.heroButtonOnChangeColor = this.heroButtonOnChangeColor.bind(this);
  this.heroButtonOnChangeHBDColor = this.heroButtonOnChangeHBDColor.bind(this); 
  this.heroButtonOnChangeBDColor = this.heroButtonOnChangeBDColor.bind(this); 
  this.heroButtonOnChangeHBGColor = this.heroButtonOnChangeHBGColor.bind(this); 
  this.heroButtonOnChangeBGColor = this.heroButtonOnChangeBGColor.bind(this); 
  this.heroButtonOnChangeRadius = this.heroButtonOnChangeRadius.bind(this);
  this.heroButtonOnChangeLink = this.heroButtonOnChangeLink.bind(this); 
  this.heroButtonOnChangeSwap = this.heroButtonOnChangeSwap.bind(this);
  this.heroButtonOnChangeSwapColor = this.heroButtonOnChangeSwapColor.bind(this);
  this.heroButtonOnChangeHoverColor = this.heroButtonOnChangeHoverColor.bind(this);
  this.state = {
    // isLoaded: false,
    open: true,
    key:'',
    heroBackgroundImage:'',

    heroTitle:'',
    heroTitleAnimate:'',
    heroTitleDuration:'',
    heroTitleFontFamily:'',
    heroTitleFontSize:'',
    heroTitleFontWeight:'',
    heroTitleFontStyle:'',
    heroTitleStatus:'',
    heroTitleColor:'',

    heroDescription:'',
    heroDescriptionAnimate:'',
    heroDescriptionDuration:'',
    heroDescriptionFontFamily:'',
    heroDescriptionFontSize:'',
    heroDescriptionFontWeight:'',
    heroDescriptionFontStyle:'',
    heroDescriptionStatus:'',
    heroDescriptionColor:'',

    heroButton:'',
    heroButtonSelected:'',
    heroButtonAnimate:'',
    heroButtonDuration:'',
    heroButtonFontFamily:'',
    heroButtonFontSize:'',
    heroButtonFontWeight:'',
    heroButtonFontStyle:'',
    heroButtonStatus:'',
    heroButtonColor:'',
    heroButtonHoverColor:'',
    heroButtonSwapColor:'',
  };
}


componentWillReceiveProps(nextProps){
  let app = config.database().ref('project/test/'+nextProps.tabs);
  app.on('value', async (snapshot) => { 
  const snapshotValue = snapshot.val(); 
  let data = _(snapshotValue).value();
        this.setState({
          hero:data.hero,
          heroBackgroundImage:data.heroContent.heroBackgroundImage,
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
          // isLoaded: false
        }); 
  });
}
 
  save(){
    let dbCon = config.database().ref('project/test/'+this.props.tabs);
    dbCon.update({
    heroContent:{
      heroBackgroundImage:this.state.heroBackgroundImage,
      heroTitle:this.state.heroTitle,
      heroTitleAnimate:this.state.heroTitleAnimate,
      heroTitleDuration:this.state.heroTitleDuration,
      heroTitleFontFamily:this.state.heroTitleFontFamily,
      heroTitleFontSize:this.state.heroTitleFontSize,
      heroTitleFontWeight:this.state.heroTitleFontWeight,
      heroTitleFontStyle:this.state.heroTitleFontStyle,
      heroTitleStatus:this.state.heroTitleStatus,
      heroTitleColor:this.state.heroTitleColor,
      
      heroDescription:this.state.heroDescription,
      heroDescriptionAnimate:this.state.heroDescriptionAnimate,
      heroDescriptionDuration:this.state.heroDescriptionDuration,
      heroDescriptionFontFamily:this.state.heroDescriptionFontFamily,
      heroDescriptionFontSize:this.state.heroDescriptionFontSize,
      heroDescriptionFontWeight:this.state.heroDescriptionFontWeight,
      heroDescriptionFontStyle:this.state.heroDescriptionFontStyle,
      heroDescriptionStatus:this.state.heroDescriptionStatus,
      heroDescriptionColor:this.state.heroDescriptionColor,

      heroButton:this.state.heroButton,
      heroButtonSelected:this.state.heroButtonSelected,
      heroButtonAnimate:this.state.heroButtonAnimate,
      heroButtonDuration:this.state.heroButtonDuration,
      heroButtonFontFamily:this.state.heroButtonFontFamily,
      heroButtonFontSize:this.state.heroButtonFontSize,
      heroButtonFontWeight:this.state.heroButtonFontWeight,
      heroButtonFontStyle:this.state.heroButtonFontStyle,
      heroButtonStatus:this.state.heroButtonStatus,
      heroButtonColor:this.state.heroButtonColor,
    }
    });
    alert("saved") 
  };

  logout(){config.auth().signOut();window.location.reload(); };
  handleDrawerOpen = () => {this.setState({ open: true ,});}
  handleDrawerClose = () => {this.setState({  open: false ,});};

  heroTitleOnChange(e) {this.setState({heroTitle: e.target.value});};
  heroTitleOnChangeAnimate (e) {this.setState({ heroTitleAnimate: e.target.value });};
  heroTitleOnChangeDuration (e) {this.setState({ heroTitleDuration: e.target.value });};
  heroTitleOnChangeFontFamily (e) {this.setState({ heroTitleFontFamily: e.target.value });};
  heroTitleOnChangeFontSize (e) {this.setState({ heroTitleFontSize: e.target.value });};
  heroTitleOnChangeFontStyle (e) {this.setState({ heroTitleFontStyle: e.target.value });};
  heroTitleOnChangeFontWeight (e) {this.setState({ heroTitleFontWeight: e.target.value });};
  heroTitleOnChangeStatus (e) {this.setState({ heroTitleStatus: e.target.value });};
  heroTitleOnChangeColor (color) {this.setState({ heroTitleColor: color.hex});};

  heroDescriptionOnChange(e) {this.setState({heroDescription: e.target.value});};
  heroDescriptionOnChangeAnimate (e) {this.setState({ heroDescriptionAnimate: e.target.value });};
  heroDescriptionOnChangeDuration (e) {this.setState({ heroDescriptionDuration: e.target.value });};
  heroDescriptionOnChangeFontFamily (e) {this.setState({ heroDescriptionFontFamily: e.target.value });};
  heroDescriptionOnChangeFontSize (e) {this.setState({ heroDescriptionFontSize: e.target.value });};
  heroDescriptionOnChangeFontStyle (e) {this.setState({ heroDescriptionFontStyle: e.target.value });};
  heroDescriptionOnChangeFontWeight (e) {this.setState({ heroDescriptionFontWeight: e.target.value });};
  heroDescriptionOnChangeStatus (e) {this.setState({ heroDescriptionStatus: e.target.value });};
  heroDescriptionOnChangeColor (color) {this.setState({ heroDescriptionColor: color.hex });};

  heroButtonOnChange = (e) => {this.setState({ heroButton: e.target.value });};
  heroButtonOnChangeSelected = event => {this.setState({ heroButtonSelected: event.target.value });};
  heroButtonOnChangeAnimate (e) {this.setState({ heroButtonAnimate: e.target.value });};
  heroButtonOnChangeDuration (e) {this.setState({ heroButtonDuration: e.target.value });};
  heroButtonOnChangeFontFamily (e) {this.setState({ heroButtonFontFamily: e.target.value });};
  heroButtonOnChangeFontSize (e) {this.setState({ heroButtonFontSize: e.target.value });};
  heroButtonOnChangeFontStyle (e) {this.setState({ heroButtonFontStyle: e.target.value });};
  heroButtonOnChangeFontWeight (e) {this.setState({ heroButtonFontWeight: e.target.value });};
  heroButtonOnChangeStatus (e) {this.setState({ heroButtonStatus: e.target.value });};
  heroButtonOnChangeSwap = (e) => {this.setState({ heroButtonSwap: e.target.value });};
  heroButtonOnChangeLink (e) {this.setState({ heroButtonLink: e.target.value });};
  heroButtonOnChangeRadius (e) {this.setState({ heroButtonRadius: e.target.value });};
  heroButtonOnChangeBGColor (color) {this.setState({ heroButtonBGColor: color.hex });};
  heroButtonOnChangeHBGColor (color) {this.setState({ heroButtonHBGColor: color.hex });};
  heroButtonOnChangeBDColor (color) {this.setState({ heroButtonBDColor: color.hex });};
  heroButtonOnChangeHBDColor (color) {this.setState({ heroButtonHBDColor: color.hex });};
  heroButtonOnChangeColor (color) {this.setState({ heroButtonColor: color.hex });};
  heroButtonOnChangeSwapColor(color) {this.setState({ heroButtonSwapColor: color.hex });};
  heroButtonOnChangeHoverColor(color) {this.setState({ heroButtonHoverColor: color.hex });};
  
  render() {
    const { classes, theme } = this.props;
    let heroInput;
    if( this.state.hero !== "none"){
    heroInput =
      <HeroInput 
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

      heroTitleOnChange={this.heroTitleOnChange}
      heroTitleOnChangeAnimate={this.heroTitleOnChangeAnimate}
      heroTitleOnChangeDuration={this.heroTitleOnChangeDuration}           
      heroTitleOnChangeFontFamily={this.heroTitleOnChangeFontFamily}            
      heroTitleOnChangeFontSize={this.heroTitleOnChangeFontSize}             
      heroTitleOnChangeFontWeight={this.heroTitleOnChangeFontWeight}          
      heroTitleOnChangeFontStyle={this.heroTitleOnChangeFontStyle}
      heroTitleOnChangeStatus={this.heroTitleOnChangeStatus}
      heroTitleOnChangeColor={this.heroTitleOnChangeColor}

      heroDescription={this.state.heroDescription}
      heroDescriptionAnimate={this.state.heroDescriptionAnimate}
      heroDescriptionDuration={this.state.heroDescriptionDuration} 
      heroDescriptionFontFamily= {this.state.heroDescriptionFontFamily}
      heroDescriptionFontSize={this.state.heroDescriptionFontSize}
      heroDescriptionFontWeight={this.state.heroDescriptionFontWeight}
      heroDescriptionFontStyle={this.state.heroDescriptionFontStyle}
      heroDescriptionStatus={this.state.heroDescriptionStatus}
      heroDescriptionColor={this.state.heroDescriptionColor}

      heroDescriptionOnChange={this.heroDescriptionOnChange}
      heroDescriptionOnChangeAnimate={this.heroDescriptionOnChangeAnimate}
      heroDescriptionOnChangeDuration={this.heroDescriptionOnChangeDuration}           
      heroDescriptionOnChangeFontFamily={this.heroDescriptionOnChangeFontFamily}            
      heroDescriptionOnChangeFontSize={this.heroDescriptionOnChangeFontSize}             
      heroDescriptionOnChangeFontWeight={this.heroDescriptionOnChangeFontWeight}          
      heroDescriptionOnChangeFontStyle={this.heroDescriptionOnChangeFontStyle}
      heroDescriptionOnChangeStatus={this.heroDescriptionOnChangeStatus}
      heroDescriptionOnChangeColor={this.heroDescriptionOnChangeColor}

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
      heroButtonRadius={this.state.heroButtonRadius}
      heroButtonBGColor={this.state.heroButtonBGColor}
      heroButtonHBGColor={this.state.heroButtonHBGColor}
      heroButtonBDColor={this.state.heroButtonBDColor}
      heroButtonHBDColor={this.state.heroButtonHBDColor}
      heroButtonHoverColor={this.state.heroButtonHoverColor}
              
      heroButtonOnChangeHoverColor={this.heroButtonOnChangeHoverColor}
      heroButtonOnChangeHBDColor={this.heroButtonOnChangeHBDColor}
      heroButtonOnChangeBDColor={this.heroButtonOnChangeBDColor}
      heroButtonOnChangeHBGColor={this.heroButtonOnChangeHBGColor}
      heroButtonOnChangeBGColor={this.heroButtonOnChangeBGColor}
      heroButtonOnChangeRadius={this.heroButtonOnChangeRadius}
      heroButtonOnChangeLink={this.heroButtonOnChangeLink}
      heroButtonOnChangeSwap={this.heroButtonOnChangeSwap}
      heroButtonOnChangeSelected={this.heroButtonOnChangeSelected}
      heroButtonOnChange={this.heroButtonOnChange}
      heroButtonOnChangeFontFamily={this.heroButtonOnChangeFontFamily}
      heroButtonOnChangeFontSize={this.heroButtonOnChangeFontSize}
      heroButtonOnChangeDuration={this.heroButtonOnChangeDuration} 
      heroButtonOnChangeAnimate={this.heroButtonOnChangeAnimate} 
      heroButtonOnChangeFontWeight={this.heroButtonOnChangeFontWeight}
      heroButtonOnChangeFontStyle={this.heroButtonOnChangeFontStyle}
      heroButtonOnChangeStatus={this.heroButtonOnChangeStatus}
      heroButtonOnChangeColor={this.heroButtonOnChangeColor}
      heroButtonOnChangeSwapColor={this.heroButtonOnChangeSwapColor}
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
            <Typography color="inherit">
            <Button variant="contained" color="secondary" onClick={this.save} className={classes.button}>
            SAVE
            <SaveIcon className={classes.rightIcon} />
            </Button>

            </Typography>

            <Typography color="inherit" className={classes.grow} >
            <ModalUploadWrapped />
            </Typography>
            <Typography variant="title" color="#000" >
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
            {heroInput}
            </List>
            
           <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} /> 
            <TabWebsite       
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

              heroTitleOnChange={this.heroTitleOnChange}
              heroTitleOnChangeAnimate={this.heroTitleOnChangeAnimate}
              heroTitleOnChangeDuration={this.heroTitleOnChangeDuration}           
              heroTitleOnChangeFontFamily={this.heroTitleOnChangeFontFamily}            
              heroTitleOnChangeFontSize={this.heroTitleOnChangeFontSize}             
              heroTitleOnChangeFontWeight={this.heroTitleOnChangeFontWeight}          
              heroTitleOnChangeFontStyle={this.heroTitleOnChangeFontStyle}
              heroTitleOnChangeStatus={this.heroTitleOnChangeStatus}
              heroTitleOnChangeColor={this.heroTitleOnChangeColor}

              heroDescription={this.state.heroDescription}
              heroDescriptionAnimate={this.state.heroDescriptionAnimate}
              heroDescriptionDuration={this.state.heroDescriptionDuration} 
              heroDescriptionFontFamily= {this.state.heroDescriptionFontFamily}
              heroDescriptionFontSize={this.state.heroDescriptionFontSize}
              heroDescriptionFontWeight={this.state.heroDescriptionFontWeight}
              heroDescriptionFontStyle={this.state.heroDescriptionFontStyle}
              heroDescriptionStatus={this.state.heroDescriptionStatus}
              heroDescriptionColor={this.state.heroDescriptionColor}

              heroDescriptionOnChange={this.heroDescriptionOnChange}
              heroDescriptionOnChangeAnimate={this.heroDescriptionOnChangeAnimate}
              heroDescriptionOnChangeDuration={this.heroDescriptionOnChangeDuration}           
              heroDescriptionOnChangeFontFamily={this.heroDescriptionOnChangeFontFamily}            
              heroDescriptionOnChangeFontSize={this.heroDescriptionOnChangeFontSize}             
              heroDescriptionOnChangeFontWeight={this.heroDescriptionOnChangeFontWeight}          
              heroDescriptionOnChangeFontStyle={this.heroDescriptionOnChangeFontStyle}
              heroDescriptionOnChangeStatus={this.heroDescriptionOnChangeStatus}
              heroDescriptionOnChangeColor={this.heroDescriptionOnChangeColor}

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
              heroButtonRadius={this.state.heroButtonRadius}
              heroButtonBGColor={this.state.heroButtonBGColor}
              heroButtonHBGColor={this.state.heroButtonHBGColor}
              heroButtonBDColor={this.state.heroButtonBDColor}
              heroButtonHBDColor={this.state.heroButtonHBDColor}
              herobuttonHoverColor={this.state.herobuttonHoverColor}
                      
              herobuttonOnChangeHoverColor={this.herobuttonOnChangeHoverColor}
              heroButtonOnChangeHBDColor={this.heroButtonOnChangeHBDColor}
              heroButtonOnChangeBDColor={this.heroButtonOnChangeBDColor}
              heroButtonOnChangeHBGColor={this.heroButtonOnChangeHBGColor}
              heroButtonOnChangeBGColor={this.heroButtonOnChangeBGColor}
              heroButtonOnChangeRadius={this.heroButtonOnChangeRadius}
              heroButtonOnChangeLink={this.heroButtonOnChangeLink}
              heroButtonOnChangeSwap={this.heroButtonOnChangeSwap}
              heroButtonOnChangeSelected={this.heroButtonOnChangeSelected}
              heroButtonOnChange={this.heroButtonOnChange}
              heroButtonOnChangeFontFamily={this.heroButtonOnChangeFontFamily}
              heroButtonOnChangeFontSize={this.heroButtonOnChangeFontSize}
              heroButtonOnChangeDuration={this.heroButtonOnChangeDuration} 
              heroButtonOnChangeAnimate={this.heroButtonOnChangeAnimate} 
              heroButtonOnChangeFontWeight={this.heroButtonOnChangeFontWeight}
              heroButtonOnChangeFontStyle={this.heroButtonOnChangeFontStyle}
              heroButtonOnChangeStatus={this.heroButtonOnChangeStatus}
              heroButtonOnChangeColor={this.heroButtonOnChangeColor}
              heroButtonOnChangeSwapColor={this.heroButtonOnChangeSwapColor}
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
  urlImage: state.urlImage ,
  user:state.user
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(CMS));
