import React from 'react';
import '../../../css/animate.min.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Settings from '@material-ui/icons/PlayCircleOutline';
import SettingsFonts from '@material-ui/icons/SettingsOutlined';
import LinkTo from '@material-ui/icons/LaunchOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Popover from '@material-ui/core/Popover';
import PickColor from './pickColor'
import Dropdown from './dropdown'
import Text from './Text'
import Grid from '@material-ui/core/Grid';
import config from '../../../config';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircle';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux'

function Transition(props) {
  return <Slide direction="right" {...props} />;
}
const styles = theme => ({
  label:{
    color:'#757575',
    fontSize:12,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  full:{
    float:'right',
  },
  left:{
    float:'left',
  },
  inputSetInput:{
    width:120
  },
  button:{
    '&:hover': {
      cursor: 'pointer',
    },
  },
   paper: {
    width:200
  },
  popover:{
    height:300
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
});

const MenuProps = {
  PaperProps: {
    style: {
      width: 220,
    },
  },
};
class SettingAnimate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            open2: false,
            anchorEl: null,
            anchorEl2: null,
            anchorEl3: null,
            openFont:false
        };
      }


      handleClick =name=> event => {
        this.setState({
          [name]: event.currentTarget,
        });
      };
    
      handleClose =name=> () => {
        this.setState({
          [name]: null,
        });
      };

      save =  () => {
        let dbCon = config.database().ref('global/'+this.props.email+'/font/');
        dbCon.child(this.state.key).update({
          font:this.state.font,
        });
        alert("saved") 
      };
      delete = font => () =>{
        let dbCon = config.database().ref('global/'+this.props.email+'/font');
        dbCon.child(font._key).remove();
      }
      addItem=()=>{
        let dbCon = config.database().ref('global/'+this.props.email+'/font');
        dbCon.push({
          font:'none',
        })  
      }
      OpenItem  = font => () =>{
        this.setState({ 
        openFont: true ,
        font:font.font,
        key:font._key
      });
      };
      CloseItem =name=> () => {this.setState({ [name]: false });};
      onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};
  render() {
    const { classes } = this.props;
    const { anchorEl,anchorEl2,anchorEl3} = this.state;
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);

    return (
      
      <div className={classes.full}>
        {this.props.displayFont ? null:
        <div className={classes.left} >
            <SettingsFonts className={classes.button} onClick={this.handleClick('anchorEl')} />
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={this.handleClose('anchorEl')}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >      
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <form className={classes} autoComplete="off">
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Status</InputLabel>
                    <Select 
                      variant='outlined'
                        value={this.props.Status}
                        onChange={this.props.onChangeStatus}
                        MenuProps={MenuProps}
                    >   
                        <MenuItem value={'block'}>On</MenuItem>
                        <MenuItem value={'none'}>Off</MenuItem>
                    </Select>
                    </FormControl>
                </form>
                {this.props.displayFontFamily ? null:
                <form className={classes} autoComplete="off">
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Font</InputLabel>
                    <Select 
                      variant='outlined'
                        value={this.props.FontFamily}
                        onChange={this.props.onChangeFontFamily}
                        MenuProps={MenuProps}
                    >   
                    {this.props.font?
                    this.props.font.map((font => (
                    font.font==='none'?null:
                        <MenuItem key={font._key} value={font.font}>{font.font}</MenuItem>
                    )))
                  :null}
                    </Select>
                    </FormControl>
                </form>         
                }
                <form className={classes} autoComplete="off">
                    <FormControl  className={classes.formControl}>  
                      <InputLabel
                        FormLabelClasses={{
                          root: classes.cssLabel,
                          focused: classes.cssFocused,
                        }}
                        htmlFor="custom-css-input"
                        children="Font Size"
                      >
                      </InputLabel>
                      <Input
                        classes={{
                          underline: classes.cssUnderline,
                        }}
                        className={classes.inputSetInput}
                        type='number'
                        id="custom-css-input"
                        onChange={this.props.onChangeFontSize}
                        value={this.props.FontSize}
                      />
                    </FormControl>
                    </form>
                    {!this.props.position ? null:
                    <Dropdown
                      label='position'
                      value={this.props.position}
                      onChange={this.props.onChangePosition}
                      choice = {[
                        {_key:'1',value: 'center' , label: 'Center'},
                        {_key:'2',value: 'right', label: 'Right'},
                        {_key:'3',value: 'left', label: 'Left'}
                      ]}
                    />
                    }
                    </Grid>

                    <Grid item xs={6}>
                    {this.props.displayFontWeight ? null:
                    <form className={classes} autoComplete="off">
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Font Weight</InputLabel>
                    <Select 
                      variant='outlined'
                        value={this.props.FontWeight}
                        onChange={this.props.onChangeFontWeight}
                        MenuProps={MenuProps}
                    >   
                        <MenuItem value={'300'}>Light</MenuItem>
                        <MenuItem value={'400'}>Regular</MenuItem>
                        <MenuItem value={'600'}>Semi Bold</MenuItem>
                        <MenuItem value={'700'}>Bold</MenuItem>
                    </Select>
                    </FormControl>
                    </form>
                    }
                    <form className={classes} autoComplete="off">
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Font Style</InputLabel>
                    <Select 
                      variant='outlined'
                        value={this.props.FontStyle}
                        onChange={this.props.onChangeFontStyle}
                        MenuProps={MenuProps}
                    >   
                        <MenuItem value={'normal'}>Normal</MenuItem>
                        <MenuItem value={'italic'}>Italic</MenuItem>
                    </Select>
                    </FormControl>
                    </form>
                    <div className={classes.formControl}>
                    <label className={classes.label}>Font Color</label>
                    <PickColor
                    width="100px"
                    height="14px"
                    padding="5px"
                    color={this.props.color}
                    onChange={this.props.onChangeColor}
                    />
                    </div>
                    {!this.props.showHoverColor ? null:
                    <div className={classes.formControl}>
                    <label className={classes.label}>Font Hover Color</label>
                    <PickColor
                    width="100px"
                    height="14px"
                    padding="5px"
                    color={this.props.hoverColor}
                    onChange={this.props.onChangeHoverColor}
                    />
                    </div>
                    }
                      {this.props.font?
                      <ListItem style={{padding: '24 24 0 0'}}>
                      <Button  variant="contained" onClick={this.handleClick('anchorEl3')} component="span" color="secondary" className={classes.button}>
                      Add Fontfamily
                      </Button>
                      <Popover
                        className={classes.popover}
                        open={open3}
                        anchorEl={anchorEl3}
                        onClose={this.handleClose('anchorEl3')}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                      
                      {this.props.font.map((font => (
                      <ListItem key={font._key}>
                      <Button  variant="contained" onClick={this.OpenItem(font)} component="span" color="secondary" className={classes.button}>{font.font}</Button>
                      <DeleteIcon  onClick={this.delete(font)} className={classes.rightIcon}/>
                      </ListItem>
                      )))}  

                      <ListItem>
                      <Button variant="contained"  onClick={this.addItem} component="span" color="secondary" className={classes.paper}>
                        ADD
                        <AddIcon className={classes.rightIcon} />
                      </Button>
                      </ListItem>           
                      <Dialog
                        maxWidth="lg"
                        open={this.state.openFont}
                        TransitionComponent={Transition}
                        onClose={this.CloseItem('openFont')}
                      >
                      <DialogTitle>
                      Item         
                      <Button variant="contained" color="secondary" onClick={this.save} className={classes.save} >
                        SAVE
                      <SaveIcon className={classes.rightIcon} />
                      </Button>
                      </DialogTitle> 
                        <List>
                        <ListItem>
                        <Text 
                        label="font" 
                        value={this.state.font}  
                        onChange={this.onChangeValue('font')}
                        />
                        <div className={classes.left} >
                          <a style={{color: 'rgba(0, 0, 0, 0.65)'}} href="https://fonts.google.com/" target="_blank" ><LinkTo className={classes.button} root='outline' /></a>
                        </div>
                        </ListItem>
                        </List>
                        </Dialog>
                      </Popover>
                    </ListItem>   
                    :null}        
                  </Grid>
                </Grid>
              </Popover>   
      </div>
      }
      {this.props.displayAnimate ? null:
      <div className={classes.right} >
            <Settings className={classes.button} root='outline' onClick={this.handleClick('anchorEl2')} />
            <Popover
              open={open2}
              anchorEl={anchorEl2}
              onClose={this.handleClose('anchorEl2')}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
                <form className={classes} autoComplete="off">
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Animation</InputLabel>
                    <Select 
                      variant='outlined'
                        value={this.props.animate}
                        onChange={this.props.onChangeAnimate}
                        MenuProps={MenuProps}
                    >   
                        <h1 className={classes.label}>Attention Seekers</h1>
                        <MenuItem value={'none'}>none</MenuItem>
                        <MenuItem value={'bounce'}>bounce</MenuItem>
                        <MenuItem value={'flash'}>flash</MenuItem>
                        <MenuItem value={'pulse'}>pulse</MenuItem>
                        <MenuItem value={'rubberBand'}>rubberBand</MenuItem>
                        <MenuItem value={'shake'}>shake</MenuItem>
                        <MenuItem value={'headShake'}>headShake</MenuItem>
                        <MenuItem value={'swing'}>swing</MenuItem>
                        <MenuItem value={'tada'}>tada</MenuItem>
                        <MenuItem value={'wobble'}>wobble</MenuItem>
                        <MenuItem value={'jello'}>jello</MenuItem>
                        <h1 className={classes.label}>Bouncing Entances</h1>
                        <MenuItem value={'bounceIn'}>bounceIn</MenuItem>
                        <MenuItem value={'bounceInDown'}>bounceInDown</MenuItem>
                        <MenuItem value={'bounceInLeft'}>bounceInLeft</MenuItem>
                        <MenuItem value={'bounceInRight'}>bounceInRight</MenuItem>
                        <MenuItem value={'bounceInUp'}>bounceInUp</MenuItem>
                        <h1 className={classes.label}>Bouncing Exits</h1>
                        <MenuItem value={'bounceOut'}>bounceOut</MenuItem>
                        <MenuItem value={'bounceOutDown'}>bounceOutDown</MenuItem>
                        <MenuItem value={'bounceOutLeft'}>bounceOutLeft</MenuItem>
                        <MenuItem value={'bounceOutRight'}>bounceOutRight</MenuItem>
                        <MenuItem value={'bounceOutUp'}>bounceOutUp</MenuItem>
                        <h1 className={classes.label}>Fading Entances</h1>
                        <MenuItem value={'fadeIn'}>fadeIn</MenuItem>
                        <MenuItem value={'fadeInDown'}>fadeInDown</MenuItem>
                        <MenuItem value={'fadeInDownBig'}>fadeInDownBig</MenuItem>
                        <MenuItem value={'fadeInLeft'}>fadeInLeft</MenuItem>
                        <MenuItem value={'fadeInLeftBig'}>fadeInLeftBig</MenuItem>
                        <MenuItem value={'fadeInRight'}>fadeInRight</MenuItem>
                        <MenuItem value={'fadeInRightBig'}>fadeInRightBig</MenuItem>
                        <MenuItem value={'fadeInUp'}>fadeInUp</MenuItem>
                        <MenuItem value={'fadeInUpBig'}>fadeInUpBig</MenuItem>
                        <h1 className={classes.label}>Fading Exits</h1>
                        <MenuItem value={'fadeOut'}>fadeOut</MenuItem>
                        <MenuItem value={'fadeOutDown'}>fadeOutDown</MenuItem>
                        <MenuItem value={'fadeOutDownBig'}>fadeOutDownBig</MenuItem>
                        <MenuItem value={'fadeOutLeft'}>fadeOutLeft</MenuItem>
                        <MenuItem value={'fadeOutLeftBig'}>fadeOutLeftBig</MenuItem>
                        <MenuItem value={'fadeOutRight'}>fadeOutRight</MenuItem>
                        <MenuItem value={'fadeOutRightBig'}>fadeOutRightBig</MenuItem>
                        <MenuItem value={'fadeOutUp'}>fadeOutUp</MenuItem>
                        <MenuItem value={'fadeOutUpBig'}>fadeOutUpBig</MenuItem>
                        <h1 className={classes.label}>Flippers</h1>
                        <MenuItem value={'flipInX'}>flipInX</MenuItem>
                        <MenuItem value={'flipInY'}>flipInY</MenuItem>
                        <MenuItem value={'flipOutX'}>flipOutX</MenuItem>
                        <MenuItem value={'flipOutY'}>flash</MenuItem>
                        <h1 className={classes.label}>LightSpeed</h1>
                        <MenuItem value={'lightSpeedIn'}>lightSpeedIn</MenuItem>
                        <MenuItem value={'lightSpeedOut'}>lightSpeedOut</MenuItem>
                        <h1 className={classes.label}>Rotating Entances</h1>
                        <MenuItem value={'rotateIn'}>rotateIn</MenuItem>
                        <MenuItem value={'rotateInDownLeft'}>rotateInDownLeft</MenuItem>
                        <MenuItem value={'rotateInDownRight'}>rotateInDownRight</MenuItem>
                        <MenuItem value={'rotateInUpLeft'}>rotateInUpLeft</MenuItem>
                        <MenuItem value={'rotateInUpRight'}>rotateInUpRight</MenuItem>
                        <h1 className={classes.label}>Rotating Exits</h1>
                        <MenuItem value={'rotateOut'}>rotateOut</MenuItem>
                        <MenuItem value={'rotateOutDownLeft'}>rotateOutDownLeft</MenuItem>
                        <MenuItem value={'rotateOutDownRight'}>rotateOutDownRight</MenuItem>
                        <MenuItem value={'rotateOutUpLeft'}>rotateOutUpLeft</MenuItem>
                        <MenuItem value={'rotateOutUpRight'}>rotateOutUpRight</MenuItem>
                        <h1 className={classes.label}>Zooming Entances</h1>
                        <MenuItem value={'zoomIn'}>zoomIn</MenuItem>
                        <MenuItem value={'zoomInDown'}>zoomInDown</MenuItem>
                        <MenuItem value={'zoomInLeft'}>zoomInLeft</MenuItem>
                        <MenuItem value={'zoomInRight'}>zoomInRight</MenuItem>
                        <MenuItem value={'zoomInUp'}>zoomInUp</MenuItem>
                        <h1 className={classes.label}>Zooming Exits</h1>
                        <MenuItem value={'zoomOut'}>zoomOut</MenuItem>
                        <MenuItem value={'zoomOutDown'}>zoomOutDown</MenuItem>
                        <MenuItem value={'zoomOutLeft'}>zoomOutLeft</MenuItem>
                        <MenuItem value={'zoomOutRight'}>zoomOutRight</MenuItem>
                        <MenuItem value={'zoomOutUp'}>zoomOutUp</MenuItem>
                        <h1 className={classes.label}>Sliding Entances</h1>
                        <MenuItem value={'slideInDown'}>slideInDown</MenuItem>
                        <MenuItem value={'slideInLeft'}>slideInLeft</MenuItem>
                        <MenuItem value={'slideInRight'}>slideInRight</MenuItem>
                        <MenuItem value={'slideInUp'}>slideInUp</MenuItem>
                        <h1 className={classes.label}>Sliding Exits</h1>
                        <MenuItem value={'slideOutDown'}>slideOutDown</MenuItem>
                        <MenuItem value={'slideOutLeft'}>slideOutLeft</MenuItem>
                        <MenuItem value={'slideOutRight'}>slideOutRight</MenuItem>
                        <MenuItem value={'slideOutUp'}>slideOutUp</MenuItem>
                        <h1 className={classes.label}>Specials</h1>
                        <MenuItem value={'hinge'}>hinge</MenuItem>
                        <MenuItem value={'jackInTheBox'}>jackInTheBox</MenuItem>
                        <MenuItem value={'rollIn'}>rollIn</MenuItem>
                        <MenuItem value={'rollOut'}>rollOut</MenuItem>
                    </Select>
                    </FormControl>
                    </form>                   
                    <form className={classes} autoComplete="off">
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Duration(S)</InputLabel>
                    <Select 
                      variant='outlined'
                        value={this.props.duration}
                        onChange={this.props.onChangeDuration}
                        MenuProps={MenuProps}
                    >   
                        <MenuItem value={'1s'}>1</MenuItem>
                        <MenuItem value={'2s'}>2</MenuItem>
                        <MenuItem value={'3s'}>3</MenuItem>
                        <MenuItem value={'4s'}>4</MenuItem>
                        <MenuItem value={'5s'}>5</MenuItem>
                        <MenuItem value={'6s'}>6</MenuItem>
                        <MenuItem value={'7s'}>7</MenuItem>
                        <MenuItem value={'8s'}>8</MenuItem>
                        <MenuItem value={'9s'}>9</MenuItem>
                        <MenuItem value={'10s'}>10</MenuItem>
                    </Select>
                    </FormControl>
                    </form>     
              </Popover>
            </div>
            }
            {!this.props.showLinkTo ? null:
             <div className={classes.left} >
                <a style={{color: 'rgba(0, 0, 0, 0.65)'}} href={this.props.linkTo} target="_blank" ><LinkTo className={classes.button} root='outline' /></a>
            </div>
            }

      </div>
    );
  }
}

SettingAnimate.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  email: state.email ,
})
export default  connect(mapStateToProps)(withStyles(styles)(SettingAnimate));