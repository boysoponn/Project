import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import styled from 'styled-components'

const ChoiceButton = styled.button`
background:none;
border: 3px solid #fff;
border-radius: 5px;
color: #fff;
display: block;
font-size: 16px;
font-weight: bold;
margin: 10px auto;
padding: 30px 50px;
position: relative;
text-transform: uppercase;
::after {
  -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
  -o-transition: all 0.3s;
	transition: all 0.3s;
}
::before,::after{
  background: #fff;
  content: '';
  position: absolute;
  z-index: -1;
}
:hover{
  color:#2ecc71;
}
.btn&{
  ::after {
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
  }
  :hover:after {
    height: 100%;
  }
}
`;

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
    background: '#2ecc71'
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
        <FormControl>  
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="custom-css-input"
            children={this.props.label}
          >
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            id="custom-css-input"
            onChange={this.props.onChange}
            value={this.props.value}
          />
          
        </FormControl>
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
        <ChoiceButton className="btn" >Button 1</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value2}
          onChange={this.props.handleChange}
          value={this.props.value2}
          name="radio-button-demo"
        />
        <ChoiceButton className={classes.button1} >Button 1</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value3}
          onChange={this.props.handleChange}
          value={this.props.value3}
          name="radio-button-demo"
        />
        <ChoiceButton className={classes.button1} >Button 1</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value4}
          onChange={this.props.handleChange}
          value={this.props.value4}
          name="radio-button-demo"
        />
        <ChoiceButton className={classes.button1} >Button 1</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value5}
          onChange={this.props.handleChange}
          value={this.props.value5}
          name="radio-button-demo"
        />
        <ChoiceButton className={classes.button1} >Button 1</ChoiceButton>
          </ListItem>
          <ListItem>
          <Radio
          checked={this.props.selectedValue === this.props.value6}
          onChange={this.props.handleChange}
          value={this.props.value6}
          name="radio-button-demo"
        />
        <ChoiceButton className={classes.button1} >Button 1</ChoiceButton>
          </ListItem>
        </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(InputButton);