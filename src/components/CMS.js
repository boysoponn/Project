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
import New from './New';
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
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  appBar: {
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
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
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
    padding: theme.spacing.unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
});

class CMS extends React.Component {
  constructor(props){
  super(props);
  this.save = this.save.bind(this);
  this.logout = this.logout.bind(this);
  this.handleChangeTitle = this.handleChangeTitle.bind(this);  
  this.handleChangeDescription = this.handleChangeDescription.bind(this);  
  this.state = {
    open: true,
    title:'',
    description:'',
    key:'',
  };
  this.getData();
}
getData(){
  let app = config.database().ref('project/sopon/hero');
  app.on('value', snapshot => { 
  let messagesVal = snapshot.val();
  let messages = _(messagesVal)
                  .keys()
                  .map(messageKey => {
                    let cloned = _.clone(messagesVal[messageKey]);
                    cloned.key = messageKey;
                    return cloned;
                  }).value();
                  this.setState({
                    title: _.map(messages,'title'),
                    description: _.map(messages,'description'),
                    key:_.map(messages,'key')[0],
                  }); 
  });          
}

  save(){
    let dbCon = config.database().ref('/project/sopon/hero');
    dbCon.child(this.state.key).update({
      title:this.state.title,
      description:this.state.description,
    }); 
  };
  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  };

  handleChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  };
  logout(){
    localStorage.removeItem('user');
    window.location.reload(true);
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const user = localStorage.getItem('user');
    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow} >
              CMS Project
            </Typography>
            <Typography color="inherit">
            <Button variant="contained" color="secondary" onClick={this.save} className={classes.button}>SAVE</Button>
            </Typography>
            <Typography color="inherit" className={classes.grow} >
            <ModalUploadWrapped />
            </Typography>
            <Typography variant="title" color="inherit" >
              Welcome : {user}
            </Typography>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.logout}>Logout</Button>
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
            <HeroInput 
              onChangeDescription={this.handleChangeDescription}
              onChangeTitle={this.handleChangeTitle}
              title={this.state.title}
              description={this.state.description}
            /></List>
            
           <Divider />
           <HeroInput 
              onChangeDescription={this.handleChangeDescription}
              onChangeTitle={this.handleChangeTitle}
              title={this.state.title}
              description={this.state.description}
            />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography component="div" noWrap>
          <New/>
            <h1>Title : {this.state.title}</h1>
            <h1>description : {this.state.description}</h1>
          </Typography>
        </main>
      </div>
    );
  }
}

CMS.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CMS);
