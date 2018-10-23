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
    console.log(this.props.heroButtonSelected)
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
              color={this.props.heroTitleColor}
              onChangeColor={this.props.heroTitleOnChangeColor}
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
              color={this.props.heroDescriptionColor}
              onChangeColor={this.props.heroDescriptionOnChangeColor}
              />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem className={classes.nested}>
              <InputButton
              label="Label Button"
              button={this.props.heroButton}
              buttonColor={this.props.heroButtonColor}
              buttonSwapColor={this.props.heroButtonSwapColor}
              buttonSelected={this.props.heroButtonSelected}
              buttonSwap={this.props.heroButtonSwap}
              buttonLink={this.props.heroButtonLink}
              buttonLinkTarget={this.props.heroButtonLinkTarget}
              buttonRadius={this.props.heroButtonRadius}
              buttonBGColor={this.props.heroButtonBGColor}
              buttonHBGColor={this.props.heroButtonHBGColor}
              buttonBDColor={this.props.heroButtonBDColor}
              buttonHBDColor={this.props.heroButtonHBDColor}
              buttonOnChange={this.props.heroButtonOnChange}
              buttonHoverColor={this.props.heroButtonHoverColor}

              buttonOnChangeHoverColor={this.props.heroButtonOnChangeHoverColor}
              buttonOnChangeFontFamily={this.props.heroButtonOnChangeFontFamily}
              buttonOnChangeFontSize={this.props.heroButtonOnChangeFontSize}
              buttonOnChangeDuration={this.props.heroButtonOnChangeDuration} 
              buttonOnChangeAnimate={this.props.heroButtonOnChangeAnimate} 
              buttonOnChangeFontWeight={this.props.heroButtonOnChangeFontWeight}
              buttonOnChangeFontStyle={this.props.heroButtonOnChangeFontStyle}
              buttonOnChangeStatus={this.props.heroButtonOnChangeStatus}
              buttonOnChangeColor={this.props.heroButtonOnChangeColor}
              buttonOnChangeSwapColor={this.props.heroButtonOnChangeSwapColor}
              buttonOnChangeHBDColor={this.props.heroButtonOnChangeHBDColor}
              buttonOnChangeBDColor={this.props.heroButtonOnChangeBDColor}
              buttonOnChangeHBGColor={this.props.heroButtonOnChangeHBGColor}
              buttonOnChangeBGColor={this.props.heroButtonOnChangeBGColor}
              buttonOnChangeRadius={this.props.heroButtonOnChangeRadius}
              buttonOnChangeLink={this.props.heroButtonOnChangeLink}
              buttonOnChangeLinkTarget={this.props.heroButtonOnChangeLinkTarget}
              buttonOnChangeSwap={this.props.heroButtonOnChangeSwap}
              buttonOnChangeSelected={this.props.heroButtonOnChangeSelected}
              value2="fillUp"
              value3="fillDown"
              value4="fillLeft"
              value5="fillRight"
              value6="fillMiddle"
              value7="fillOblique"
              value8="fillOn"
              value9="arrow"
              value11="slide"
              value12="slideLeft"
              animate={this.props.heroButtonAnimate} 
              duration={this.props.heroButtonDuration} 
              FontFamily={this.props.heroButtonFontFamily}
              FontSize={this.props.heroButtonFontSize}
              FontWeight={this.props.heroButtonFontWeight}
              FontStyle={this.props.heroButtonFontStyle}
              Status={this.props.heroButtonStatus}
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