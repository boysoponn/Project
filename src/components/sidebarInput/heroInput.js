import React from 'react';
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
import InputText from './inputText';
import Textarea from './textarea';
import UploadPicture from './uploadPicture';
import firebase from 'firebase';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  constructor(props){
    super(props);
    this.handleChangeUploadPicture = this.handleChangeUploadPicture.bind(this);
    this.handleUploadPicture = this.handleUploadPicture.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);  
    this.handleChangeDescription = this.handleChangeDescription.bind(this);  
    this.state = {
    open: false,
    title:'',
    description:'',
    image: null,
    url: 'http://via.placeholder.com/400x300',
    };
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  
  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleChangeUploadPicture = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUploadPicture = () => {
      const {image} = this.state;
      const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed',  
    () => {
        firebase.storage().ref('images').child(image.name).getDownloadURL().then(url => {
            this.setState({
              url
            });
        })
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Hero" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
              <InputText inputLabel="Title" value={this.state.title}  onChange={this.handleChangeTitle} />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
              <Textarea label="descrition" value={this.state.description} onChange={this.handleChangeDescription}/>
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
              <UploadPicture 
              onChange={this.handleChangeUploadPicture} 
              onClick={this.handleUploadPicture}
              url={this.state.url}
              />
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

export default withStyles(styles)(NestedList);