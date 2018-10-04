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

  this.heroDescriptionOnChange = this.heroDescriptionOnChange.bind(this); 
  this.heroDescriptionOnChangeAnimate = this.heroDescriptionOnChangeAnimate.bind(this); 
  this.heroDescriptionOnChangeDuration = this.heroDescriptionOnChangeDuration.bind(this); 
  this.heroDescriptionOnChangeFontFamily = this.heroDescriptionOnChangeFontFamily.bind(this); 
  this.heroDescriptionOnChangeFontSize = this.heroDescriptionOnChangeFontSize.bind(this); 
  this.heroDescriptionOnChangeFontWeight = this.heroDescriptionOnChangeFontWeight.bind(this); 
  this.heroDescriptionOnChangeFontStyle = this.heroDescriptionOnChangeFontStyle.bind(this);
  this.heroDescriptionOnChangeStatus = this.heroDescriptionOnChangeStatus.bind(this); 
  this.state = {
    // isLoaded: false
    open: true,
    key:'',
    heroTitle:'',
    heroTitleAnimate:'bounce',
    heroTitleDuration:'1s',
    heroTitleFontFamily:'Montserrat',
    heroTitleFontSize:'50',
    heroTitleFontWeight:'400',
    heroTitleFontStyle:'normal',
    heroTitleStatus:'block',

    heroDescription:'',
    heroDescriptionAnimate:'bounce',
    heroDescriptionDuration:'1s',
    heroDescriptionFontFamily:'Montserrat',
    heroDescriptionFontSize:'20',
    heroDescriptionFontWeight:'400',
    heroDescriptionFontStyle:'normal',
    heroDescriptionStatus:'block',
  };
}


componentWillReceiveProps(nextProps){
  let app = config.database().ref('project/test/'+nextProps.tabs);
  app.on('value', async (snapshot) => { 
  const snapshotValue = snapshot.val(); 
  let data = _(snapshotValue).value();
        this.setState({
          heroTitle:data.pageName,
          heroDescription:data.pageName
        }); 
  });
}
 
  save(){
    let dbCon = config.database().ref('project/test/'+this.props.tabs);
    dbCon.update({
      hero:this.state.heroTitle,
    }); 
  };

  logout(){localStorage.removeItem('user'); window.location.reload(true);};
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

  heroDescriptionOnChange(e) {this.setState({heroDescription: e.target.value});};
  heroDescriptionOnChangeAnimate (e) {this.setState({ heroDescriptionAnimate: e.target.value });};
  heroDescriptionOnChangeDuration (e) {this.setState({ heroDescriptionDuration: e.target.value });};
  heroDescriptionOnChangeFontFamily (e) {this.setState({ heroDescriptionFontFamily: e.target.value });};
  heroDescriptionOnChangeFontSize (e) {this.setState({ heroDescriptionFontSize: e.target.value });};
  heroDescriptionOnChangeFontStyle (e) {this.setState({ heroDescriptionFontStyle: e.target.value });};
  heroDescriptionOnChangeFontWeight (e) {this.setState({ heroDescriptionFontWeight: e.target.value });};
  heroDescriptionOnChangeStatus (e) {this.setState({ heroDescriptionStatus: e.target.value });};

  render() {
    const { classes, theme } = this.props;
    const user = localStorage.getItem('user');

    let dd;
    //if(this.props.tabs === '1'){
     dd=
      <HeroInput 
        heroImagePick={this.props.urlImage} 

        heroTitle={this.state.heroTitle}             
        heroTitleAnimate={this.state.heroTitleAnimate} 
        heroTitleDuration={this.state.heroTitleDuration} 
        heroTitleFontFamily={this.state.heroTitleFontFamily}
        heroTitleFontSize={this.state.heroTitleFontSize}
        heroTitleFontWeight={this.state.heroTitleFontWeight}
        heroTitleFontStyle={this.state.heroTitleFontStyle}
        heroTitleStatus={this.state.heroTitleStatus}
        
        heroTitleOnChange={this.heroTitleOnChange}
        heroTitleOnChangeAnimate={this.heroTitleOnChangeAnimate}
        heroTitleOnChangeDuration={this.heroTitleOnChangeDuration}           
        heroTitleOnChangeFontFamily={this.heroTitleOnChangeFontFamily}            
        heroTitleOnChangeFontSize={this.heroTitleOnChangeFontSize}             
        heroTitleOnChangeFontWeight={this.heroTitleOnChangeFontWeight}          
        heroTitleOnChangeFontStyle={this.heroTitleOnChangeFontStyle}
        heroTitleOnChangeStatus={this.heroTitleOnChangeStatus}

        heroDescription={this.state.heroDescription}
        heroDescriptionAnimate={this.state.heroDescriptionAnimate}
        heroDescriptionDuration={this.state.heroDescriptionDuration} 
        heroDescriptionFontFamily= {this.state.heroDescriptionFontFamily}
        heroDescriptionFontSize={this.state.heroDescriptionFontSize}
        heroDescriptionFontWeight={this.state.heroDescriptionFontWeight}
        heroDescriptionFontStyle={this.state.heroDescriptionFontStyle}
        heroDescriptionStatus={this.state.heroDescriptionStatus}

        heroDescriptionOnChange={this.heroDescriptionOnChange}
        heroDescriptionOnChangeAnimate={this.heroDescriptionOnChangeAnimate}
        heroDescriptionOnChangeDuration={this.heroDescriptionOnChangeDuration}           
        heroDescriptionOnChangeFontFamily={this.heroDescriptionOnChangeFontFamily}            
        heroDescriptionOnChangeFontSize={this.heroDescriptionOnChangeFontSize}             
        heroDescriptionOnChangeFontWeight={this.heroDescriptionOnChangeFontWeight}          
        heroDescriptionOnChangeFontStyle={this.heroDescriptionOnChangeFontStyle}
        heroDescriptionOnChangeStatus={this.heroDescriptionOnChangeStatus}
            />
    //}

    
    
    ;
    // if (!this.state.isLoaded) return null;
    return (
      <div className={classes.root} >
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="#000"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="#000" className={classes.grow} >
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
              Welcome : {user}
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
            {dd}
            </List>
            
           <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} /> 
            <TabWebsite       
            heroImagePick={this.props.urlImage}  
            heroTitle={this.state.heroTitle} 
            heroTitleAnimate={this.state.heroTitleAnimate}
            heroTitleDuration={this.state.heroTitleDuration}
            heroTitleFontFamily={this.state.heroTitleFontFamily} 
            heroTitleFontSize={this.state.heroTitleFontSize}
            heroTitleFontWeight={this.state.heroTitleFontWeight}
            heroTitleFontStyle={this.state.heroTitleFontStyle}
            heroTitleStatus={this.state.heroTitleStatus}

            heroDescription={this.state.heroDescription}
            heroDescriptionAnimate={this.state.heroDescriptionAnimate}
            heroDescriptionDuration={this.state.heroDescriptionDuration} 
            heroDescriptionFontFamily= {this.state.heroDescriptionFontFamily}
            heroDescriptionFontSize={this.state.heroDescriptionFontSize}
            heroDescriptionFontWeight={this.state.heroDescriptionFontWeight}
            heroDescriptionFontStyle={this.state.heroDescriptionFontStyle}
            heroDescriptionStatus={this.state.heroDescriptionStatus}

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
  urlImage: state.urlImage 
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(CMS));
