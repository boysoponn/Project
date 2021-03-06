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
import InputText from './itemInput/inputText';
import InputTextarea from './itemInput/inputTextarea';
import ModalChooseImage from './itemInput/modalPicture';
import InputButton from './itemInput/inputButton';
import PickColor from './itemInput/pickColor'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import {chooseTemplate} from '../actions';
import Text from './itemInput/Text'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  popover:{
    height:300
  },
});

class NestedList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    open: false,
    image: null,
    anchorEl:null
    };  
  }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.chooseTemplate==='hero'){
  //     this.setState({open:true})
  //     this.props.dispatch(chooseTemplate(null));
  //   }
  // }

  handleClick = () => {if(this.props.chooseTemplate==='Hero'){this.props.dispatch(chooseTemplate("null"))}else{this.props.dispatch(chooseTemplate('Hero'))}};
  
  open=name=>(e)=>{this.setState({[name]:e.currentTarget})}
  close=name=>()=>{this.setState({[name]:null})}

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;
    const pickColor={fontSize: '14px',marginLeft:10,margin: 0};

    return (
      <div className={classes.root} >
        <List disablePadding={true}>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Cover" />
            {this.props.chooseTemplate ==='Hero' ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.props.chooseTemplate ==='Hero'?true:false} timeout="auto" unmountOnExit>
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputText 
              Label="Title" 
              font={this.props.font}
              value={this.props.heroTitle}  
              animate={this.props.heroTitleAnimate} 
              onChange={this.props.heroTitleOnChange} 
              duration={this.props.heroTitleDuration}   
              FontFamily={this.props.heroTitleFontFamily}
              FontSize={this.props.heroTitleFontSize}
              FontWeight={this.props.heroTitleFontWeight}
              FontStyle={this.props.heroTitleFontStyle}
              Status={this.props.heroTitleStatus}
              position={this.props.heroTitlePosition}
              onChangePosition={this.props.heroTitleOnChangePosition}  
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
          
            <List component="div" disablePadding={false}>
              <ListItem  className={classes.nested}>
              <InputTextarea 
              label="Description" 
              font={this.props.font}
              value={this.props.heroDescription}  
              animate={this.props.heroDescriptionAnimate} 
              onChange={this.props.heroDescriptionOnChange} 
              duration={this.props.heroDescriptionDuration}   
              FontFamily={this.props.heroDescriptionFontFamily}
              FontSize={this.props.heroDescriptionFontSize}
              FontWeight={this.props.heroDescriptionFontWeight}
              FontStyle={this.props.heroDescriptionFontStyle}
              Status={this.props.heroDescriptionStatus}
              position={this.props.heroDescriptionPosition}
              onChangePosition={this.props.heroDescriptionOnChangePosition}  
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

            <List component="div" disablePadding={false}>
              <ListItem className={classes.nested}>
              <InputButton
              label="Label Button"
              font={this.props.font}
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
              buttonOnChangePosition={this.props.heroButtonOnChangePosition}
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
              position={this.props.heroButtonPosition} 
              duration={this.props.heroButtonDuration} 
              FontFamily={this.props.heroButtonFontFamily}
              FontSize={this.props.heroButtonFontSize}
              FontWeight={this.props.heroButtonFontWeight}
              FontStyle={this.props.heroButtonFontStyle}
              Status={this.props.heroButtonStatus}
              />
              </ListItem>
            </List>

            <List component="div" disablePadding={false}>
              <ListItem className={classes.nested}>
              {this.props.hero === 'HeroNo3'?
              <Text
              label='Youtube ID'
              value={this.props.heroYoutubeID}
              onChange={this.props.heroOnChangeYoutubeID}
              />
              :
              <ModalChooseImage
              imagePick={this.props.heroBackgroundImage}
              path="/heroContent"
              />
              }
              </ListItem>
            </List>
          {this.props.hero === 'HeroNo2'?
          <List component="div" disablePadding={false}>
            <ListItem className={classes.nested}>
            <Button variant="contained" onClick={this.open('anchorEl')} component="span" color="secondary" >
            Cover Setting
            </Button>
            <Popover
              className={classes.popover}
              open={open}
              anchorEl={anchorEl}
              onClose={this.close('anchorEl')}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
             <ListItem>
              <p style={pickColor}> Background Color&nbsp;&nbsp;&nbsp;</p>
              <PickColor
              padding="0"
              width="80px"
              height="20px"
              color={this.props.herobackgroundColor}
              onChange={this.props.herobackgroundOnChangeColor}
              />
            </ListItem>
            </Popover>
            </ListItem>
            </List>         
                 :null
            }      
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  chooseTemplate: state.chooseTemplate ,
})

export default connect(mapStateToProps)(withStyles(styles)(NestedList));