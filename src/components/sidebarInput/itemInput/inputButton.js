import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Text from './Text';
import {blue,purple} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import styled from 'styled-components'
import SettingAnimate from './SettingAnimate'
import PickColor from './pickColor'
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Popover from '@material-ui/core/Popover';
import ChooseLink from './chooseLink';

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

const styles = theme => ({
    popoverHeight:{
      height:500
    },
    button: {
        marginTop:10,
        width:130
       },
    buttonSetting:{
      width:170,
      marginLeft:20,
      marginRight:20
       },
    width:{
        width:1295
       },
    cssLabel: {
      '&$cssFocused': {
        color: purple[500],
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: purple[500],
      },
    },
    formControl: {
      minWidth: 120,
    },
    radio: {
      color: blue[500],
      '&$checked': {
        color: blue[500],
      },
    },
    checked: {},
  });
  const MenuProps = {
    PaperProps: {
      style: {
        width: 220,
      },
    },
  };
class InputButton extends React.Component {
  state = {
    open: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    anchorEl1: null,
    anchorEl2: null,
    anchorEl3: null,
    anchorEl4: null,
  };

  handleClickOpen = () => {this.setState({ open: true });};
  handleClose = () => {this.setState({ open: false });};
  handleChangeComplete = (color, event) => {this.setState({ background: color.hex })};
  handleClick1 = event => {this.setState({anchorEl1: event.currentTarget,});};
  handleClose1 = () => {this.setState({anchorEl1: null,});};
  handleClick2 = event => {this.setState({anchorEl2: event.currentTarget, });};
  handleClose2 = () => {this.setState({anchorEl2: null,});};
  handleClick3 = event => {this.setState({anchorEl3: event.currentTarget,});};
  handleClose3 = () => {this.setState({anchorEl3: null,});};
  handleClick4 = event => {this.setState({anchorEl4: event.currentTarget,});};
  handleClose4 = () => {this.setState({anchorEl4: null,});};
  render() {
    let button;
    let swaplabel;
    if(this.props.buttonSelected !== this.props.value12 && this.props.buttonSelected !== this.props.value11 ){
      button =         
      <ChoiceButton  
      className={this.props.buttonSelected} 
      FontFamily={this.props.FontFamily}
      FontWeight={this.props.FontWeight}
      FontSize={this.props.FontSize}
      FontStyle={this.props.FontStyle}
      buttonHoverColor={this.props.buttonHoverColor}
      buttonHBGColor={this.props.buttonHBGColor}
      buttonColor={this.props.buttonColor}
      buttonBDColor={this.props.buttonBDColor}
      buttonRadius={this.props.buttonRadius}
      buttonBGColor={this.props.buttonBGColor}
      buttonHBDColor={this.props.buttonHBDColor}
    >{this.props.button}</ChoiceButton>
    swaplabel = null;
    }
    else{
      button = 
      <ChoiceButton content={this.props.button} 
      swapContent={this.props.buttonSwap}  
      className={this.props.buttonSelected} 
      FontFamily={this.props.FontFamily}
      FontWeight={this.props.FontWeight}
      FontSize={this.props.FontSize}
      FontStyle={this.props.FontStyle}
      buttonSwapColor={this.props.buttonSwapColor}
      buttonHBGColor={this.props.buttonHBGColor}
      buttonColor={this.props.buttonColor}
      buttonBDColor={this.props.buttonBDColor}
      buttonRadius={this.props.buttonRadius}
      buttonBGColor={this.props.buttonBGColor}
      buttonHBDColor={this.props.buttonHBDColor}
    >
    &nbsp;</ChoiceButton>

      swaplabel =  
      <ListItem>
      <Text
        type="text"
        label= "Swap Label Button"
        value={this.props.buttonSwap}
        onChange={this.props.buttonOnChangeSwap}
      />
      <PickColor
      padding="0"
      width="20px"
      height="20px"
      color={this.props.buttonSwapColor}
      onChange={this.props.buttonOnChangeSwapColor}
      />
      </ListItem>
    };
    const pickColor={
      color: '#757575',
      fontSize: '16px',
    };
    const divButton={
      margin:'auto',
      marginTop:20,
      marginBottom:20
    };
    const { classes } = this.props;
    const { anchorEl1,anchorEl2,anchorEl3 ,anchorEl4} = this.state;
    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);
    const open4 = Boolean(anchorEl4);
    return (
      <div>
      <SettingAnimate 
        font={this.props.font}
        animate={this.props.animate} 
        duration={this.props.duration} 
        FontFamily={this.props.FontFamily}
        FontSize={this.props.FontSize}
        FontWeight={this.props.FontWeight}
        FontStyle={this.props.FontStyle}
        Status={this.props.Status}
        position={this.props.position}
        onChangeColor={this.props.buttonOnChangeColor}
        onChangeFontFamily={this.props.buttonOnChangeFontFamily}
        onChangeFontSize={this.props.buttonOnChangeFontSize}
        onChangeDuration={this.props.buttonOnChangeDuration} 
        onChangeAnimate={this.props.buttonOnChangeAnimate} 
        onChangeFontWeight={this.props.buttonOnChangeFontWeight}
        onChangeFontStyle={this.props.buttonOnChangeFontStyle}
        onChangeStatus={this.props.buttonOnChangeStatus}
        color={this.props.buttonColor}
        onChange={this.props.buttonOnChangeColor}
        onChangePosition={this.props.buttonOnChangePosition}
        />
        <Text
        type="text"
        label={this.props.label}
        value={this.props.button}
        onChange={this.props.buttonOnChange}
        />
        <div>
        <Button variant="contained" onClick={this.handleClickOpen} component="span" color="secondary" className={classes.button}>
        Setting Button
        </Button>
        <Dialog
          maxWidth="lg"
          open={this.state.open}
          TransitionComponent={Transition}
          onClose={this.handleClose}
        >
        <DialogTitle>
         {"Setting Button"}
        </DialogTitle>
        <ListItem>
          <ChooseLink
            value={this.props.buttonLink}
            onChange={this.props.buttonOnChangeLink}
            target={this.props.buttonLinkTarget}
            onChangeTarget={this.props.buttonOnChangeLinkTarget}
          />
        </ListItem>
        <List>
        <Button variant="contained" onClick={this.handleClick4} component="span" color="secondary" className={classes.buttonSetting}>
        Animation
        </Button>
            <Popover
              className={classes.popoverHeight}
              open={open4}
              anchorEl={anchorEl4}
              onClose={this.handleClose4}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
            >
              <List >  
              <ListItem>
                <Radio
                  checked={this.props.buttonSelected === this.props.value2}
                  onChange={this.props.buttonOnChangeSelected}
                  value={this.props.value2}
                  name="radio-button-demo"
                />
                <ChoiceButton className="fillUp"
                  FontFamily={this.props.FontFamily}
                  FontWeight={this.props.FontWeight}
                  FontSize={this.props.FontSize}
                  buttonHoverColor={this.props.buttonHoverColor}
                  buttonHBGColor={this.props.buttonHBGColor}
                  buttonColor={this.props.buttonColor}
                  buttonBDColor={this.props.buttonBDColor}
                  buttonRadius={this.props.buttonRadius}
                  buttonBGColor={this.props.buttonBGColor}
                  buttonHBDColor={this.props.buttonHBDColor} 
                >
                {this.props.button}</ChoiceButton>
              </ListItem>
              <ListItem>
                <Radio
                  checked={this.props.buttonSelected === this.props.value3}
                  onChange={this.props.buttonOnChangeSelected}
                  value={this.props.value3}
                  name="radio-button-demo"
                />
                <ChoiceButton className="fillDown"
                  FontFamily={this.props.FontFamily}
                  FontWeight={this.props.FontWeight}
                  FontSize={this.props.FontSize}
                  buttonHoverColor={this.props.buttonHoverColor}
                  buttonHBGColor={this.props.buttonHBGColor}
                  buttonColor={this.props.buttonColor}
                  buttonBDColor={this.props.buttonBDColor}
                  buttonRadius={this.props.buttonRadius}
                  buttonBGColor={this.props.buttonBGColor}
                  buttonHBDColor={this.props.buttonHBDColor}
                >
                {this.props.button}</ChoiceButton>
              </ListItem>
              <ListItem>
                <Radio
                  checked={this.props.buttonSelected === this.props.value4}
                  onChange={this.props.buttonOnChangeSelected}
                  value={this.props.value4}
                  name="radio-button-demo"
                />
                <ChoiceButton className="fillLeft"
                  FontFamily={this.props.FontFamily}
                  FontWeight={this.props.FontWeight}
                  FontSize={this.props.FontSize}
                  buttonHoverColor={this.props.buttonHoverColor}
                  buttonHBGColor={this.props.buttonHBGColor}
                  buttonColor={this.props.buttonColor}
                  buttonBDColor={this.props.buttonBDColor}
                  buttonRadius={this.props.buttonRadius}
                  buttonBGColor={this.props.buttonBGColor}
                  buttonHBDColor={this.props.buttonHBDColor}
                >
                {this.props.button}</ChoiceButton>
              </ListItem>
              <ListItem>
                <Radio
                  checked={this.props.buttonSelected === this.props.value5}
                  onChange={this.props.buttonOnChangeSelected}
                  value={this.props.value5}
                  name="radio-button-demo"
                />
                <ChoiceButton  className="fillRight" 
                  FontFamily={this.props.FontFamily}
                  FontWeight={this.props.FontWeight}
                  FontSize={this.props.FontSize}
                  buttonHoverColor={this.props.buttonHoverColor}
                  buttonHBGColor={this.props.buttonHBGColor}
                  buttonColor={this.props.buttonColor}
                  buttonBDColor={this.props.buttonBDColor}
                  buttonRadius={this.props.buttonRadius}
                  buttonBGColor={this.props.buttonBGColor} 
                  buttonHBDColor={this.props.buttonHBDColor}
                >
                {this.props.button}</ChoiceButton>
              </ListItem>
              <ListItem>
              <Radio
                checked={this.props.buttonSelected === this.props.value6}
                onChange={this.props.buttonOnChangeSelected}
                value={this.props.value6}
                name="radio-button-demo"
              />
              <ChoiceButton  className="fillMiddle"
                FontFamily={this.props.FontFamily}
                FontWeight={this.props.FontWeight}
                FontSize={this.props.FontSize}
                buttonHoverColor={this.props.buttonHoverColor}
                buttonHBGColor={this.props.buttonHBGColor}
                buttonColor={this.props.buttonColor}
                buttonBDColor={this.props.buttonBDColor}
                buttonRadius={this.props.buttonRadius}
                buttonBGColor={this.props.buttonBGColor} 
                buttonHBDColor={this.props.buttonHBDColor}
              >
              {this.props.button}</ChoiceButton>
                </ListItem>
                <ListItem>
                <Radio
                checked={this.props.buttonSelected === this.props.value7}
                onChange={this.props.buttonOnChangeSelected}
                value={this.props.value7}
                name="radio-button-demo"
              />
              <ChoiceButton  className="fillOblique" 
                FontFamily={this.props.FontFamily}
                FontWeight={this.props.FontWeight}
                FontSize={this.props.FontSize}
                buttonHoverColor={this.props.buttonHoverColor}
                buttonHBGColor={this.props.buttonHBGColor}
                buttonColor={this.props.buttonColor}
                buttonBDColor={this.props.buttonBDColor}
                buttonRadius={this.props.buttonRadius}
                buttonBGColor={this.props.buttonBGColor}
                buttonHBDColor={this.props.buttonHBDColor}
              >
              {this.props.button}</ChoiceButton>
                </ListItem>
                <ListItem>
                <Radio
                checked={this.props.buttonSelected === this.props.value8}
                onChange={this.props.buttonOnChangeSelected}
                value={this.props.value8}
                name="radio-button-demo"
              />
              <ChoiceButton  className="fillOn" 
                FontFamily={this.props.FontFamily}
                FontWeight={this.props.FontWeight}
                FontSize={this.props.FontSize}
                buttonHoverColor={this.props.buttonHoverColor}
                buttonHBGColor={this.props.buttonHBGColor}
                buttonColor={this.props.buttonColor}
                buttonBDColor={this.props.buttonBDColor}
                buttonRadius={this.props.buttonRadius}
                buttonBGColor={this.props.buttonBGColor}
                buttonHBDColor={this.props.buttonHBDColor}
              >
              {this.props.button}</ChoiceButton>
                </ListItem>
                <ListItem>
                <Radio
                checked={this.props.buttonSelected === this.props.value9}
                onChange={this.props.buttonOnChangeSelected}
                value={this.props.value9}
                name="radio-button-demo"
              />
              <ChoiceButton className="arrow" 
                FontFamily={this.props.FontFamily}
                FontWeight={this.props.FontWeight}
                FontSize={this.props.FontSize}
                buttonColor={this.props.buttonColor}
                buttonHoverColor={this.props.buttonHoverColor}
                buttonBDColor={this.props.buttonBDColor}
                buttonRadius={this.props.buttonRadius}
                buttonBGColor={this.props.buttonBGColor} 
                buttonHBDColor={this.props.buttonHBDColor}
                buttonHBGColor={this.props.buttonHBGColor}
              >
              {this.props.button}</ChoiceButton>
                </ListItem> 
                <ListItem>
                <Radio
                checked={this.props.buttonSelected === this.props.value11}
                onChange={this.props.buttonOnChangeSelected}
                value={this.props.value11}
                classes={{
                  root: classes.radio,
                  checked: classes.checked,
                }}
                name="radio-button-demo"
              />
              <ChoiceButton content={this.props.button} swapContent={this.props.buttonSwap} className="slide" 
                FontFamily={this.props.FontFamily}
                FontWeight={this.props.FontWeight}
                FontSize={this.props.FontSize}
                buttonSwapColor={this.props.buttonSwapColor}
                buttonHBGColor={this.props.buttonHBGColor}
                buttonColor={this.props.buttonColor}
                buttonBDColor={this.props.buttonBDColor}
                buttonRadius={this.props.buttonRadius}
                buttonBGColor={this.props.buttonBGColor}
                buttonHBDColor={this.props.buttonHBDColor}
              >
              &nbsp;</ChoiceButton>
              </ListItem>
                <ListItem>
                <Radio
                classes={{
                  root: classes.radio,
                  checked: classes.checked,
                }}
                checked={this.props.buttonSelected === this.props.value12}
                onChange={this.props.buttonOnChangeSelected}
                value={this.props.value12}
                name="radio-button-demo"
              />
              <ChoiceButton className="slideLeft" 
              content={this.props.button} 
              swapContent={this.props.buttonSwap} 
              FontFamily={this.props.FontFamily}
              FontWeight={this.props.FontWeight}
              FontSize={this.props.FontSize}
              buttonSwapColor={this.props.buttonSwapColor}
              buttonHBGColor={this.props.buttonHBGColor}
              buttonColor={this.props.buttonColor}
              buttonBDColor={this.props.buttonBDColor}
              buttonRadius={this.props.buttonRadius}
              buttonBGColor={this.props.buttonBGColor}
              buttonHBDColor={this.props.buttonHBDColor}
              >
              &nbsp;</ChoiceButton>
                </ListItem>
                </List>

            </Popover> 
        <Button variant="contained" onClick={this.handleClick1} component="span" color="secondary" className={classes.buttonSetting}>
        Label
        </Button>
            <Popover
              open={open1}
              anchorEl={anchorEl1}
              onClose={this.handleClose1}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <ListItem>
              <Text
                type="text"
                label={this.props.label}
                value={this.props.button}
                onChange={this.props.buttonOnChange}
              />
              <PickColor
              padding="0"
              width="20px"
              height="20px"
              color={this.props.buttonColor}
              onChange={this.props.buttonOnChangeColor}
              />
              </ListItem>
                {swaplabel}
              <ListItem>
                <p style={pickColor}>Hover Color&nbsp;&nbsp;&nbsp;</p>
                <PickColor
                padding="0"
                width="30px"
                height="20px"
                color={this.props.buttonHoverColor}
                onChange={this.props.buttonOnChangeHoverColor}
                />
                </ListItem>            
            </Popover>  

        <Button variant="contained" onClick={this.handleClick2} component="span" color="secondary" className={classes.buttonSetting}>
        Background
        </Button>
            <Popover
              open={open2}
              anchorEl={anchorEl2}
              onClose={this.handleClose2}
              anchorOrigin={{
                vertical: 'bottom',
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
                width="30px"
                height="20px"
                color={this.props.buttonBGColor}
                onChange={this.props.buttonOnChangeBGColor}
                />
                </ListItem>
                <ListItem>
                <p style={pickColor}>Hover Background Color&nbsp;&nbsp;&nbsp;</p>
                <PickColor
                padding="0"
                width="30px"
                height="20px"
                color={this.props.buttonHBGColor}
                onChange={this.props.buttonOnChangeHBGColor}
                />
                </ListItem>
            </Popover>  

        <Button variant="contained" onClick={this.handleClick3} component="span" color="secondary" className={classes.buttonSetting}>
        Border
        </Button>
            <Popover
              open={open3}
              anchorEl={anchorEl3}
              onClose={this.handleClose3}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
                <ListItem>
                <form className={classes} autoComplete="off">
                  <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Border Radius</InputLabel>
                  <Select 
                    variant='outlined'
                      value={this.props.buttonRadius}
                      onChange={this.props.buttonOnChangeRadius}
                      MenuProps={MenuProps}
                  >   
                      <MenuItem value={'0px'}>none</MenuItem>
                      <MenuItem value={'5px'}>Radius No.1</MenuItem>
                      <MenuItem value={'10px'}>Radius No.2</MenuItem>
                      <MenuItem value={'20px'}>Radius No.3</MenuItem>
                      <MenuItem value={'30px'}>Radius No.4</MenuItem>
                  </Select>
                  </FormControl>
                </form>
                </ListItem>
                <ListItem>
                <p style={pickColor}>Boder Color&nbsp;&nbsp;&nbsp;</p>
                <PickColor
                padding="0"
                width="30px"
                height="20px"
                color={this.props.buttonBDColor}
                onChange={this.props.buttonOnChangeBDColor}
                />
                </ListItem>
                <ListItem>
                <p style={pickColor}>Hover Boder Color&nbsp;&nbsp;&nbsp;</p>
                <PickColor
                padding="0"
                width="30px"
                height="20px"
                color={this.props.buttonHBDColor}
                onChange={this.props.buttonOnChangeHBDColor}
                />
                </ListItem> 
            </Popover>  
           
            </List>  
        <Divider />
        <div style={divButton}>
            {button}
        </div>
      </Dialog>
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(InputButton);

const ChoiceButton = styled.button`
  position: relative;
  height: 60px;
  width: 200px;
  margin: 10px 7px;
  padding: 5px 5px;
  font-style:${props=> props.FontStyle}
  font-family:${props => props.FontFamily};
  font-weight: ${props => props.FontWeight};
  font-size: ${props => props.FontSize};
  letter-spacing: 2px;
  color: ${props => props.buttonColor};
  border: 2px ${props => props.buttonBDColor} solid;
  border-radius: ${props => props.buttonRadius};
  text-transform: uppercase;
  outline: 0;
  overflow:hidden;
  background: ${props => props.buttonBGColor};
  z-index: 1;
  cursor: pointer;
  transition:         0.09s ease-in;
  -o-transition:      0.09s ease-in;
  -ms-transition:     0.09s ease-in;
  -moz-transition:    0.09s ease-in;
  -webkit-transition: 0.09s ease-in;
  :hover{
    border: 2px ${props => props.buttonHBDColor} solid; 
    color:${props => props.buttonHoverColor}
  }
  .fillUp&{
    :hover {
      color:  ${props => props.buttonHoverColor};
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 0;
      left:0 ;
      right: 0;
      top: 100%;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      top: 0;
    }
  }
  .fillDown&{
    :hover {
      color: ${props => props.buttonHoverColor};
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 100%;
      left:0 ;
      right: 0;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      bottom: 0;
    }
  }
  .fillRight&{
    :hover {
      color: ${props => props.buttonHoverColor};
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 0;
      left:0 ;
      right: 100%;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      right: 0;
    }
  }
  .fillLeft&{
    :hover {
      color: ${props => props.buttonHoverColor};;
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 0;
      left:100% ;
      right: 0;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      left: 0;
    }
  }
  .fillMiddle&{
    :hover {
      color: ${props => props.buttonHoverColor};;
    }
    :before {
      content: "";
      position: absolute;
      background: ${props => props.buttonHBGColor};
      bottom: 50%;
      left:0 ;
      right: 0;
      top: 50%;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      top: 0;
      bottom: 0;
    }
  }
  .fillOblique&{
    :hover {
      color: ${props => props.buttonHoverColor};;
    }
    :before {
      content: "";
      position: absolute;
      background:${props => props.buttonHBGColor};
      bottom: 0;
      left:50% ;
      right: 50%;
      top: 0;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      left: 0;
      right: 0;
    }
  }
  .fillOn&{
    :hover {
      color: ${props => props.buttonHoverColor};;
    }
    :before {
      content: "";
      position: absolute;
      background:${props => props.buttonHBGColor};
      bottom: 50%;
      left:50% ;
      right: 50%;
      top: 50%;
      z-index: -1;
      -webkit-transition: all 0.09s ease-in;

    }
    :hover:before {
      top: 0;
      bottom: 0;
      left:0 ;
      right: 0;
    }
  }
  .arrow&{
    text-align:left;
    padding-left:17px;
    :before{
      content:"→";
      position:absolute;
      color:${props => props.buttonHoverColor};
      left: 83%;

      opacity: 0;
      -webkit-transition: all 250ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover:before{
      left:84%;
      opacity:1;
    }
    :hover {
      width:170px;
      background:${props => props.buttonHBGColor};
    }
  }
  .slide&{
    :after{
      content: '${props => props.content}';
      position:absolute;
      width:100%;
      height:100%;
      left:0;
      text-align:center;
      -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :before {
      content:'${props => props.swapContent}';
      height:100%;
      width:100%;
      position:absolute;
      color:${props => props.buttonColor};
      left:-100%;
      opacity: 0;
      -webkit-transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover{
      background:${props => props.buttonHBGColor};
    }
    :hover:before{
      left:0;
      opacity:1;
      color:${props => props.buttonSwapColor};
    }
    :hover:after{
      left:100%;
      opacity:0;
    }
  }
  .slideLeft&{
    :after{
      content:'${props => props.content }';
      position:absolute;
      width:100%;
      height:100%;
      left:0;
      text-align:center;
      -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :before {
      content:'${props => props.swapContent}';
      height:100%;
      width:100%;
      position:absolute;
      opacity: 1;
      left:100%;
      color:${props => props.buttonColor};
      -webkit-transition: all 425ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover{
      background:${props => props.buttonHBGColor};
    }
    :hover:before{
      left:0;
      color:${props => props.buttonSwapColor};
    }
    :hover:after{
      left:100%;
      opacity:0;
    }
  }
`;