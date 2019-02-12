import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import RadioButtons from './choosetemplant'
import AddIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';
import Text from '../sidebarInput/itemInput/Text';
import Grid from '@material-ui/core/Grid';
import None from '../image/none.jpg'
import Cover1 from '../image/cover.jpg'
import Cover2 from '../image/cover2.jpg'
import Cover3 from '../image/comingsoon.jpg'
import GalleryNo1 from '../image/gallery1.jpg'
import GalleryNo2 from '../image/gallery2.jpg'
import GalleryNo3 from '../image/gallery3.jpg'
import Menu1 from '../image/menu1.jpg'
import Menu2 from '../image/comingsoon.jpg'
import Menu3 from '../image/comingsoon.jpg'
import Footer from '../image/comingsoon.jpg'
import ImageSilde from '../image/imagesilde.jpg'
import ImageSilde2 from '../image/comingsoon.jpg'


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
        {this.props.undefinedOneTab === true?
        null:<Button variant="contained" color="secondary"  className={classes.button} onClick={this.props.handleOpen}>{this.props.labelButton}{icon}</Button>
        }

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
            <Text
              label='Name Page'
              onChange={this.props.onChangeName}
              value={this.props.valueName}
            />
          </List>  

          <List>
            <h1>Menubar</h1>
            <Grid container spacing={40}>
              <Grid item  sm={6} md={4} lg={3}>
                <RadioButtons
                selectedValue={this.props.selectedMenubar}
                handleChange={this.props.handleChangeMenubar}
                value={this.props.valueMenubar1}
                label='None'
                image={None}
                />
              </Grid>
              <Grid item  sm={6} md={4} lg={3}>
                <RadioButtons
                selectedValue={this.props.selectedMenubar}
                handleChange={this.props.handleChangeMenubar}
                value={this.props.valueMenubar2}
                label='Menubar 1'
                image={Menu1}
                />
              </Grid>
              <Grid item  sm={6} md={4} lg={3}>
                <RadioButtons
                selectedValue={this.props.selectedMenubar}
                handleChange={this.props.handleChangeMenubar}
                value={this.props.valueMenubar3}
                label='Menubar 2'
                image={Menu2}
                />
              </Grid>
              <Grid item  sm={6} md={4} lg={3}>
                <RadioButtons
                selectedValue={this.props.selectedMenubar}
                handleChange={this.props.handleChangeMenubar}
                value={this.props.valueMenubar4}
                label='Menubar 3'
                image={Menu3}
                />
              </Grid>
            </Grid>
          </List>  

          <List>
          <h1>Cover</h1>
          <Grid container spacing={40}>
              <Grid item  sm={6} md={4} lg={3}>
                <RadioButtons
                  selectedValue={this.props.selectedHero}
                  handleChange={this.props.handleChangeHero}
                  value={this.props.valueHero1}
                  label='None'
                  image={None}
                />
              </Grid>
              <Grid item  sm={6} md={4} lg={3}>
                <RadioButtons
                  selectedValue={this.props.selectedHero}
                  handleChange={this.props.handleChangeHero}
                  value={this.props.valueHero2}
                  label='Cover 1'
                  image={Cover1}
                />
              </Grid>
              <Grid item  sm={6} md={4} lg={3}>
                <RadioButtons
                  selectedValue={this.props.selectedHero}
                  handleChange={this.props.handleChangeHero}
                  value={this.props.valueHero3}
                  label='Cover 2'
                  image={Cover2}
                />
              </Grid>
              <Grid item  sm={6} md={4} lg={3}>
                <RadioButtons
                  selectedValue={this.props.selectedHero}
                  handleChange={this.props.handleChangeHero}
                  value={this.props.valueHero4}
                  label='Cover 3'
                  image={Cover3}
                />
              </Grid>
            </Grid>
          </List> 

          <List>
          <h1>Image Slide</h1>
          <Grid container spacing={40}>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
              selectedValue={this.props.selectedCarousel}
              handleChange={this.props.handleChangeCarousel}
              value={this.props.valueCarousel1}
              label='None'
              image={None}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
              selectedValue={this.props.selectedCarousel}
              handleChange={this.props.handleChangeCarousel}
              value={this.props.valueCarousel2}
              label='Image Silde 1'
              image={ImageSilde}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
              selectedValue={this.props.selectedCarousel}
              handleChange={this.props.handleChangeCarousel}
              value={this.props.valueCarousel3}
              label='Image Silde 2'
              image={ImageSilde2}
              />
            </Grid>
          </Grid>
          </List>       

          <List>
          <h1>Gallery</h1>
          <Grid container spacing={40}>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
              selectedValue={this.props.selectedGallery}
              handleChange={this.props.handleChangeGallery}
              value={this.props.valueGallery1}
              label='None'
              image={None}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
              selectedValue={this.props.selectedGallery}
              handleChange={this.props.handleChangeGallery}
              value={this.props.valueGallery2}
              label='Gallery 1'
              image={GalleryNo1}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
              selectedValue={this.props.selectedGallery}
              handleChange={this.props.handleChangeGallery}
              value={this.props.valueGallery3}
              label='Gallery 2'
              image={GalleryNo2}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
              selectedValue={this.props.selectedGallery}
              handleChange={this.props.handleChangeGallery}
              value={this.props.valueGallery4}
              label='Gallery 3'
              image={GalleryNo3}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
              selectedValue={this.props.selectedGallery}
              handleChange={this.props.handleChangeGallery}
              value={this.props.valueGallery5}
              label='Gallery 4'
              image={Footer}
              />
            </Grid>
          </Grid>
          </List>
          
          <List>
          <h1>Footer</h1>
          <Grid container spacing={40}>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
                selectedValue={this.props.selectedFooter}
                handleChange={this.props.handleChangeFooter}
                value={this.props.valueFooter1}
                label='None'
                image={None}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
                selectedValue={this.props.selectedFooter}
                handleChange={this.props.handleChangeFooter}
                value={this.props.valueFooter2}
                label='Footer 1'
                image={Footer}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
                selectedValue={this.props.selectedFooter}
                handleChange={this.props.handleChangeFooter}
                value={this.props.valueFooter3}
                label='Footer 2'
                image={Footer}
              />
            </Grid>
            <Grid item  sm={6} md={4} lg={3}>
              <RadioButtons
                selectedValue={this.props.selectedFooter}
                handleChange={this.props.handleChangeFooter}
                value={this.props.valueFooter4}
                label='Footer 3'
                image={Footer}
              />
            </Grid>
          </Grid>
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