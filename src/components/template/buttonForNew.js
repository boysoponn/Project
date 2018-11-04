import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import RadioButtons from './choosetemplant'
import AddIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  marginContent: {
    marginLeft:'2%',
    marginTop:'2%',
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'blue',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'blue',
    },
  },
  button:{
    width: 100,
    marginRight: 5,
    float:'left',
  },
  rightIcon: {
    marginLeft:5,
  },
};



class ButtonForNewTab extends React.Component {
  constructor(props){  
    super(props);
        this.state = {
        };   
    }


  render() {
    const { classes} = this.props;
    let icon;
    if( this.props.icon === "add"){
      icon = <AddIcon  className={classes.rightIcon} />
    }
    if( this.props.icon === "edit"){
      icon = <CreateIcon  className={classes.rightIcon} />
    }
    return (
      <div>
        <Button variant="contained" color="secondary"  className={classes.button} onClick={this.props.handleOpen}>{this.props.labelButton}
        {icon}
        </Button>
        <Dialog
          fullScreen
          open={this.props.open}
          onClose={this.props.onClose}
          TransitionComponent={this.props.TransitionComponent}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.props.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {this.props.labelbox}
              </Typography>
              <Button color="inherit"  onClick={this.props.onClickSave}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <div className={classes.marginContent}>
          <List>     
            <FormControl >  
                <InputLabel
                    FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                    }}
                    htmlFor="custom-css-input"
                    children="NAME PAGE"
                >
                </InputLabel>
                <Input
                    classes={{
                    underline: classes.cssUnderline,
                    }}
                    id="custom-css-input"
                    onChange={this.props.onChangeName}
                    value={this.props.valueName}
                />
                
            </FormControl>
          </List>           
          <List>
          <h1>Hero</h1>
          <ListItem>
            <RadioButtons
            selectedValue={this.props.selectedHero}
            handleChange={this.props.handleChangeHero}
            value1={this.props.valueHero1}
            value2={this.props.valueHero2}
            value3={this.props.valueHero3}
            value4={this.props.valueHero4}
            label1="None"
            label2="Hero No.1"
            label3="Hero No.2"
            label4="Hero No.3"
            />
          </ListItem>
          </List>    
          <List>
          <h1>Carousel</h1>
          <ListItem>
            <RadioButtons
            selectedValue={this.props.selectedCarousel}
            handleChange={this.props.handleChangeCarousel}
            value1={this.props.valueCarousel1}
            value2={this.props.valueCarousel2}
            value3={this.props.valueCarousel3}
            value4={this.props.valueCarousel4}
            label1="None"
            label2="Carousel No.1"
            label3="Carousel No.2"
            label4="Carousel No.3"
            />
          </ListItem>
          </List>       
          <List>
          <h1>Welcome</h1>
          <ListItem>
            <RadioButtons
            selectedValue={this.props.selectedWelcome}
            handleChange={this.props.handleChangeWelcome}
            value1={this.props.valueWelcome1}
            value2={this.props.valueWelcome2}
            value3={this.props.valueWelcome3}
            value4={this.props.valueWelcome4}
            label1="None"
            label2="Welcome No.1"
            label3="Welcome No.2"
            label4="Welcome No.3"
            />
          </ListItem>
          </List>          
          <List>
          <h1>About</h1>
          <ListItem>
            <RadioButtons
            selectedValue={this.props.selectedAbout}
            handleChange={this.props.handleChangeAbout}
            value1={this.props.valueAbout1}
            value2={this.props.valueAbout2}
            value3={this.props.valueAbout3}
            value4={this.props.valueAbout4}
            label1="None"
            label2="About No.1"
            label3="About No.2"
            label4="About No.3"
            />
          </ListItem>
          </List>
          <List>
          <h1>Gallery</h1>
          <ListItem>
            <RadioButtons
            selectedValue={this.props.selectedGallery}
            handleChange={this.props.handleChangeGallery}
            value1={this.props.valueGallery1}
            value2={this.props.valueGallery2}
            value3={this.props.valueGallery3}
            value4={this.props.valueGallery4}
            label1="None"
            label2="Gallery No.1"
            label3="Gallery No.2"
            label4="Gallery No.3"
            />
          </ListItem>
          </List>
          <List>
          <h1>Contact</h1>
          <ListItem>
            <RadioButtons
            selectedValue={this.props.selectedContact}
            handleChange={this.props.handleChangeContact}
            value1={this.props.valueContact1}
            value2={this.props.valueContact2}
            value3={this.props.valueContact3}
            value4={this.props.valueContact4}
            label1="None"
            label2="Contact No.1"
            label3="Contact No.2"
            label4="Contact No.3"
            />
          </ListItem>
          </List>
          </div>
        </Dialog>
      </div>
    );
  }
}

ButtonForNewTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonForNewTab);