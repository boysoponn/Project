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
import ChoosePicture from './choosePicture';


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
    this.state = {
    open: false,
    image: null,
    url: 'http://via.placeholder.com/400x300',
    };  
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <List disablePadding={true}>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Hero" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputText 
              inputLabel="Title" 
              value={this.props.title}  
              onChange={this.props.onChangeTitle} 
              animate={this.props.animate}  
              onChangeAnimate={this.props.onChangeAnimate} 
              duration={this.props.duration} 
              onChangeDuration={this.props.onChangeDuration}
              FontFamily={this.props.FontFamily}
              onChangeFontFamily={this.props.onChangeFontFamily}
              onChangeFontSize={this.props.onChangeFontSize}
              FontSize={this.props.FontSize}
              FontWeight={this.props.FontWeight}
              onChangeFontWeight={this.props.onChangeFontWeight}
              onChangeFontStyle={this.props.onChangeFontStyle}
              FontStyle={this.props.FontStyle}
              Status={this.props.Status}
              onChangeStatus={this.props.onChangeStatus}
              />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem button className={classes.nested}>
              <Textarea label="descrition" value={this.props.description} onChange={this.props.onChangeDescription}/>
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem className={classes.nested}>
              <ChoosePicture 
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