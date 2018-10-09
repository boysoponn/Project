import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Text from './Text';
import purple from '@material-ui/core/colors/purple';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import styled from 'styled-components'

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

const styles = theme => ({
    button: {
        marginTop:10,
        width:130
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
    dialog:{
    width:'500px',
    },
  });
class InputButton extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;


    return (
      <div>
        <div>
        <Text
        label={this.props.label}
        value={this.props.buttonValue}
        onChange={this.props.onChangeLabel}
        />
        </div>
        <Button variant="contained" onClick={this.handleClickOpen} component="span" color="secondary" className={classes.button}>
        Setting Button
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          onClose={this.handleClose}
        >
        <DialogTitle>
         {"Setting Button"}
        </DialogTitle>
        <List className={classes.dialog}>
        <ListItem>
        <Radio
          checked={this.props.selectedValue === this.props.value1}
          onChange={this.props.handleChange}
          value={this.props.value1}
          name="radio-button-demo"
        />
        <ChoiceButton className="fill">{this.props.buttonValue}</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value2}
          onChange={this.props.handleChange}
          value={this.props.value2}
          name="radio-button-demo"
        />
        <ChoiceButton className="fade" >{this.props.buttonValue}</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value3}
          onChange={this.props.handleChange}
          value={this.props.value3}
          name="radio-button-demo"
        />
        <ChoiceButton className="arrow">{this.props.buttonValue}</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value4}
          onChange={this.props.handleChange}
          value={this.props.value4}
          name="radio-button-demo"
        />
        <ChoiceButton  hh="none "className="slide" >&nbsp;</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value5}
          onChange={this.props.handleChange}
          value={this.props.value5}
          name="radio-button-demo"
        />
        <ChoiceButton className="slideLeft" >&nbsp;</ChoiceButton>
          </ListItem>
          {/* <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value6}
          onChange={this.props.handleChange}
          value={this.props.value6}
          name="radio-button-demo"
        />
        <ChoiceButton className={classes.button1} >{this.props.buttonValue}</ChoiceButton>
          </ListItem> */}
        </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(InputButton);


const ChoiceButton = styled.button`
position: relative;
  display:${props => props.hh} ;
  height: 60px;
  width: 200px;
  margin: 10px 7px;
  padding: 5px 5px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  color: #383736;
  border: 2px #383736 solid;
  border-radius: 4px;
  text-transform: uppercase;
  outline: 0;
  overflow:hidden;
  background: none;
  z-index: 1;
  cursor: pointer;
  transition:         0.08s ease-in;
  -o-transition:      0.08s ease-in;
  -ms-transition:     0.08s ease-in;
  -moz-transition:    0.08s ease-in;
  -webkit-transition: 0.08s ease-in;
  .fill&{
    :hover {
      color: whitesmoke;
    }
    :before {
      content: "";
      position: absolute;
      background: #383736;
      bottom: 0;
      left: 0;
      right: 0;
      top: 100%;
      z-index: -1;
      -webkit-transition: top 0.09s ease-in;
    }
    :hover:before {
      top: 0;
    }
  }
  .fade&{
    :before{
      content:"→";
      position:absolute;
      color:#383736;
      left: 88%;
      opacity: 0;
      -webkit-transition: all 0.2s ease-in;
    }
    :hover:before{
      left:91%;
      opacity:1;
    }
    :hover {
      border: 0px #fff solid;
      -webkit-transform: scale(1.04,1.04);
      -webkit-transition: border 0.3s ease-out;
      -webkit-transition: transform 250ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
  }
  .arrow&{
    text-align:left;
    padding-left:17px;
    :before{
      content:"→";
      position:absolute;
      color:#383736;
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
    }
  }
  .slide&{
    :after{
      content: ${props => props.content};
      position:absolute;
      width:100%;
      height:100%;
      left:0;
      text-align:center;
      -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :before {
      content:"Read it →";
      height:100%;
      width:100%;
      position:absolute;
      color:#383736;
      left:-100%;
      opacity: 0;
      -webkit-transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover{
      background:#383736;
    }
    :hover:before{
      left:0;
      opacity:1;
      color:#fff;
    }
    :hover:after{
      left:100%;
      opacity:0;
    }
  }
  .slideLeft&{
    :after{
      content:${props => props.content };
      position:absolute;
      width:100%;
      height:100%;
      left:0;
      text-align:center;
      -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :before {
      content:"Read it →";
      height:100%;
      width:100%;
      position:absolute;
      opacity: 1;
      left:100%;
      color:#383736;
      -webkit-transition: all 425ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
    }
    :hover{
      background:none;
    }
    :hover:before{
      left:0;
    }
    :hover:after{
      left:100%;
      opacity:0;
    }
  }
`;