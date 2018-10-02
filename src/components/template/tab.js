import React from 'react';
import config from './../../config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IN from './IN'
import ButtonForNewTab from './buttonForNew'
import { connect } from 'react-redux'
import { checkTab} from '../actions'
import Slide from '@material-ui/core/Slide';
import _ from 'lodash';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  content:{
    backgroundColor:'#fff',
    height:'100%',
  }
});
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TabWebsite extends React.Component {
    constructor(props){  
      super(props);
      this.onChangeName = this.onChangeName.bind(this); 
      this.addNewTab = this.addNewTab.bind(this);
          this.state = {
            value: 0,
            num:1,
            news:[],
            open:false,
            namePage:'',
            selectedHero:'none',
            selectedAbout:'none',
            selectedGallery:'none',
            selectedWelcome:'none',
            selectedContact:'none',
          };   
      }
  componentDidMount() {
    this.getData();
  }


    getData(){
      const app = config.database().ref('project/test');
      app.on('value', async (snapshot) => { 
        const snapshotValue = snapshot.val(); 
        const snapshotArr = _.keys(snapshotValue).reduce((prev, cur) => {
          prev.push({
            _key: cur,
            ...snapshotValue[cur]
          });
          return prev;     
        }, []);  
        this.setState({
          news:snapshotArr
        });
    });
  };
        
  handleOpen = () => {this.setState({ open: true });};

  handleClose = () => {this.setState({ open: false,namePage:''});};  

  onChangeName(e){this.setState({ namePage: e.target.value});};

  handleChangeSelectHero = event => {this.setState({ selectedHero: event.target.value });};

  handleChangeSelectWelcome = event => {this.setState({ selectedWelcome: event.target.value });};

  handleChangeSelectAbout = event => {this.setState({ selectedAbout: event.target.value });};

  handleChangeSelectGallery = event => {this.setState({ selectedGallery: event.target.value });};

  handleChangeSelectContact = event => {this.setState({ selectedContact: event.target.value });};

  handleChange = (event, value) => {this.setState({ value });};

  handleChangeIndex = index => {this.setState({ value: index });};

  addNewTab(){
    if(this.state.namePage){
      let dbCon = config.database().ref('project/test');
      dbCon.push({
      key:this.state.num,
      pageName: this.state.namePage,
      hero: this.state.selectedHero,
      welcome: this.state.selectedWelcome,
      about : this.state.selectedAbout,
      gallery :this.state.selectedGallery,
      contact : this.state.selectedContact
    })    
    this.setState({
      value:this.state.value,
      num:this.state.num +1,
      open: false,
      namePage:'',
      selectedHero:'none',
      selectedAbout:'none',
      selectedGallery:'none',
      selectedWelcome:'none',
      selectedContact:'none',
    });
    }else{
      this.setState({
      open: false,
      namePage:'',
      selectedHero:'none',
      selectedAbout:'none',
      selectedGallery:'none',
      selectedWelcome:'none',
      selectedContact:'none',
      })
    }
  };

  render() {
    const { classes, theme } = this.props;
    return (
    <div>
      <ButtonForNewTab
      onClickSave={this.addNewTab}
      handleClose={this.handleClose}
      handleOpen={this.handleOpen}
      open={this.state.open}
      onClose={this.handleClose}
      TransitionComponent={Transition}
      onChangeName={this.onChangeName}
      valueName={this.state.namePage}
      selectedHero={this.state.selectedHero}
      handleChangeHero={this.handleChangeSelectHero}
      valueHero1="none"
      valueHero2="HeroNo1"
      valueHero3="HeroNo2"
      valueHero4="HeroNo3"
      selectedWelcome={this.state.selectedWelcome}
      handleChangeWelcome={this.handleChangeSelectWelcome}
      valueWelcome1="none"
      valueWelcome2="WelcomeNo1"
      valueWelcome3="WelcomeNo2"
      valueWelcome4="WelcomeNo3"
      selectedAbout={this.state.selectedAbout}
      handleChangeAbout={this.handleChangeSelectAbout}
      valueAbout1="none"
      valueAbout2="AboutNo1"
      valueAbout3="AboutNo2"
      valueAbout4="AboutNo3"
      selectedGallery={this.state.selectedGallery}
      handleChangeGallery={this.handleChangeSelectGallery}
      valueGallery1="none"
      valueGallery2="GalleryNo1"
      valueGallery3="GalleryNo2"
      valueGallery4="GalleryNo3"
      selectedContact={this.state.selectedContact}
      handleChangeContact={this.handleChangeSelectContact}
      valueContact1="none"
      valueContact2="ContactNo1"
      valueContact3="ContactNo2"
      valueContact4="ContactNo3"
      />
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable={true}
            fullWidth
          >
          {this.state.news.map((New => (
            <Tab label={New.pageName} key={New._key}  onClick={() => this.props.dispatch(checkTab(New._key))}/>

            )))}
          
          </Tabs>
        </AppBar>
        
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        > 
          {this.state.news.map((New => (
            <div key={New._key} className={classes.content}>
            <h1>{New.pageName}</h1>
            <IN             
             widthcontect={this.props.widthcontect} 
              title={this.props.title} 
              animate={this.props.animate}
              duration={this.props.duration}
              FontFamily={this.props.FontFamily} 
              FontSize={this.props.FontSize}
              FontWeight={this.props.FontWeight}
              FontStyle={this.props.FontStyle}
              Status={this.props.Status}
            Hero={New.hero}
            Welcome={New.welcome}
            About={New.about}
            />
            </div>
          )))}   
        </SwipeableViews>
      
      </div>
      </div>
    );
  }
}

TabWebsite.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default connect()(withStyles(styles, { withTheme: true })(TabWebsite));
