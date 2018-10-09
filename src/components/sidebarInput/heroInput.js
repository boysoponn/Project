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
import ModalChooseImage from './modalPicture';
import InputButton from './inputButton';

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
              value={this.props.heroTitle}  
              animate={this.props.heroTitleAnimate} 
              onChange={this.props.heroTitleOnChange} 
              duration={this.props.heroTitleDuration}   
              FontFamily={this.props.heroTitleFontFamily}
              FontSize={this.props.heroTitleFontSize}
              FontWeight={this.props.heroTitleFontWeight}
              FontStyle={this.props.heroTitleFontStyle}
              Status={this.props.heroTitleStatus}
              onChangeAnimate={this.props.heroTitleOnChangeAnimate}              
              onChangeDuration={this.props.heroTitleOnChangeDuration}            
              onChangeFontFamily={this.props.heroTitleOnChangeFontFamily}
              onChangeFontSize={this.props.heroTitleOnChangeFontSize}                           
              onChangeFontWeight={this.props.heroTitleOnChangeFontWeight}
              onChangeFontStyle={this.props.heroTitleOnChangeFontStyle}              
              onChangeStatus={this.props.heroTitleOnChangeStatus}
              />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <Textarea 
              label="Description" 
              value={this.props.heroDescription}  
              animate={this.props.heroDescriptionAnimate} 
              onChange={this.props.heroDescriptionOnChange} 
              duration={this.props.heroDescriptionDuration}   
              FontFamily={this.props.heroDescriptionFontFamily}
              FontSize={this.props.heroDescriptionFontSize}
              FontWeight={this.props.heroDescriptionFontWeight}
              FontStyle={this.props.heroDescriptionFontStyle}
              Status={this.props.heroDescriptionStatus}
              onChangeAnimate={this.props.heroDescriptionOnChangeAnimate}              
              onChangeDuration={this.props.heroDescriptionOnChangeDuration}            
              onChangeFontFamily={this.props.heroDescriptionOnChangeFontFamily}
              onChangeFontSize={this.props.heroDescriptionOnChangeFontSize}                           
              onChangeFontWeight={this.props.heroDescriptionOnChangeFontWeight}
              onChangeFontStyle={this.props.heroDescriptionOnChangeFontStyle}              
              onChangeStatus={this.props.heroDescriptionOnChangeStatus}
              />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem className={classes.nested}>
              <InputButton
              label="Label button"
              buttonValue={this.props.heroButtonValue}
              onChangeLabel={this.props.heroButtonOnChange}
              handleChange={this.props.heroButtonChange}
              selectedValue={this.props.heroButtonSelected}
              value1="heroButtonValue1"
              value2="heroButtonValue2"
              value3="heroButtonValue3"
              value4="heroButtonValue4"
              value5="heroButtonValue5"
              value6="heroButtonValue6"
              />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem className={classes.nested}>
              <ModalChooseImage
              imagePick={this.props.heroImagePick}
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