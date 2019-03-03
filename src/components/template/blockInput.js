import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ContentIcon from '@material-ui/icons/VerticalSplit';
import FooterIcon from '@material-ui/icons/CallToAction';
import HeaderIcon from '@material-ui/icons/OpenInBrowser';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
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
    };  
  }

  handleClick = () => {this.setState(state => ({ open: !state.open }));};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <List disablePadding={true}>
          <ListItem button onClick={this.props.open?this.handleClick:null}>
            <ListItemIcon>
              {this.props.label === 'Footer'?
                <FooterIcon />
                :this.props.label === 'Header' ?
                <HeaderIcon />
                :
                <ContentIcon />
              }
              
            </ListItemIcon>
            <ListItemText inset primary={this.props.label} />
            {this.state.open ?  <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {this.props.open?
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>    
            <List component="div" disablePadding={false}>
            {this.props.content1 ?
                <ListItem >
                    {this.props.content1}
                </ListItem>
                :null
            }
            {this.props.content2 ?
                <ListItem >    
                    {this.props.content2}
                </ListItem>
                :null
            }
            {this.props.content3 ?
                <ListItem >
                    {this.props.content3}
                </ListItem>
                :null
            }
              </List>       
          </Collapse>
          :null}
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);