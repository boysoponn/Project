import React from 'react';
import _ from 'lodash';
import config from './../../config';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IN from './IN'
import ButtonForNewTab from './buttonForNew'
import { connect } from 'react-redux'
import { checkTab} from '../actions'



const styles = theme => ({
  button:{
    width: 100,
    marginRight: 5,
    float:'left',
  },
  root: {
    // backgroundColor: theme.palette.background.paper,
  },
  content:{
    backgroundColor:'#fff',
    height:'100%',
  },
  rightIcon: {
    marginLeft:5,
  },
});
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TabWebsite extends React.Component {
  constructor(props){  
    super(props);
    this.onChangeName = this.onChangeName.bind(this); 
    this.addNewTab = this.addNewTab.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.deletePage = this.deletePage.bind(this);
    this.setNullValue = this.setNullValue.bind(this);
      this.state = {
        value: 0,
        num:1,
        news:[],
        open:false,
        openEdit:false,
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
        
  handleOpenEdit = () => {
    let app = config.database().ref('project/test/'+this.props.tabs);
    app.on('value', async (snapshot) => { 
      const snapshotValue = snapshot.val(); 
      let data = _(snapshotValue).value();
        this.setState({
          namePage:data.pageName,
          selectedHero:data.hero,
          selectedAbout:data.about,
          selectedGallery:data.gallery,
          selectedWelcome:data.welcome,
          selectedContact:data.contact,
          openEdit: true
        }); 
    });
  };

  setNullValue(){
    this.setState({
      pageName:'',
      selectedHero:'none',
      selectedAbout:'none',
      selectedGallery:'none',
      selectedWelcome:'none',
      selectedContact:'none',
    })
  }

  handleCloseEdit = () => {this.setState({ openEdit: false});};

  handleOpen = () => {this.setState({ open: true });};

  handleClose = () => {this.setState({ open: false,}); this.setNullValue();};  

  onChangeName(e){this.setState({ namePage: e.target.value});};

  handleChangeSelectHero = event => {this.setState({ selectedHero: event.target.value });};

  handleChangeSelectWelcome = event => {this.setState({ selectedWelcome: event.target.value });};

  handleChangeSelectAbout = event => {this.setState({ selectedAbout: event.target.value });};

  handleChangeSelectGallery = event => {this.setState({ selectedGallery: event.target.value });};

  handleChangeSelectContact = event => {this.setState({ selectedContact: event.target.value });};

  handleChange = (event, value) => {this.setState({ value });};

  handleChangeIndex = index => {this.setState({ value: index });};

  saveEdit(){
    if(this.state.namePage){
      let pathUpper =this.state.namePage;
      let pathLower =pathUpper.toLowerCase();
      let dbCon = config.database().ref('project/test/'+this.props.tabs);
      dbCon.update({
      pageName: this.state.namePage,
      pathName: pathLower,
      path: "/test/"+pathLower,
      hero: this.state.selectedHero,
      welcome: this.state.selectedWelcome,
      about : this.state.selectedAbout,
      gallery :this.state.selectedGallery,
      contact : this.state.selectedContact
    })    
    this.setState({
      value:this.state.value,
      num:this.state.num +1,
    });
    this.setNullValue();
    this.handleCloseEdit();
    }else{
      this.setNullValue();
      this.handleCloseEdit();
    }
  };

  addNewTab(){
    if(this.state.namePage){
      let pathUpper =this.state.namePage;
      let pathLower =pathUpper.toLowerCase();
      let dbCon = config.database().ref('project/test');
      dbCon.push({
      key:this.state.num,
      pageName: this.state.namePage,
      pathName:pathLower,
      path: "/test/"+pathLower,
      hero: this.state.selectedHero,
      welcome: this.state.selectedWelcome,
      about : this.state.selectedAbout,
      gallery :this.state.selectedGallery,
      contact : this.state.selectedContact,
      heroBackgroundImage:'',
      heroTitle:'',
      heroTitleAnimate:'',
      heroTitleDuration:'',
      heroTitleFontFamily:'',
      heroTitleFontSize:'',
      heroTitleFontWeight:'',
      heroTitleFontStyle:'',
      heroTitleStatus:'',
      heroDescription:'',
      heroDescriptionAnimate:'',
      heroDescriptionDuration:'',
      heroDescriptionFontFamily:'',
      heroDescriptionFontSize:'',
      heroDescriptionFontWeight:'',
      heroDescriptionFontStyle:'',
      heroDescriptionStatus:'',
    })    
    this.setState({
      value:this.state.value,
      num:this.state.num +1,
    });
    this.setNullValue();
    this.handleClose();
    }
  };

  deletePage(){
    let dbCon = config.database().ref('project/test');
    dbCon.child(this.props.tabs).remove();
  }

  render() {
    const { classes, theme } = this.props;
    const center= ({
      textAlign: 'center'
    }); 
    return (
    <div>
      <div>
      <ButtonForNewTab
      icon="add"
      labelbox="Create page"
      labelButton="ADD"
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
      <ButtonForNewTab
      icon="edit"
      labelbox="Edit page"
      labelButton="Edit"
      onClickSave={this.saveEdit}
      handleClose={this.handleCloseEdit}
      handleOpen={this.handleOpenEdit}
      open={this.state.openEdit}
      onClose={this.handleCloseEdit}
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
      <Button variant="contained" color="secondary" className={classes.button} onClick={this.deletePage}>Delete
      <DeleteIcon className={classes.rightIcon}/>
      </Button>
      </div>
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
            <h1 style={center}>{New.pageName}</h1>
            <IN         
              Hero={New.hero}
              Welcome={New.welcome}
              About={New.about}  

              heroImagePick={this.props.heroImagePick}
              title={this.props.heroTitle} 
              animate={this.props.heroTitleAnimate}
              duration={this.props.heroTitleDuration}
              FontFamily={this.props.heroTitleFontFamily} 
              FontSize={this.props.heroTitleFontSize}
              FontWeight={this.props.heroTitleFontWeight}
              FontStyle={this.props.heroTitleFontStyle}
              Status={this.props.heroTitleStatus}

              description={this.props.heroDescription}
              durationDescription= {this.props.heroDescriptionDuration}
              FontFamilyDescription={this.props.heroDescriptionFontFamily}
              FontSizeDescription={this.props.heroDescriptionFontSize}
              FontWeightDescription={this.props.heroDescriptionFontWeight}
              FontStyleDescription={this.props.heroDescriptionFontStyle}
              StatusDescription={this.props.heroDescriptionStatus}
              animateDescription={this.props.heroDescriptionAnimate} 
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
const mapStateToPropsTabs = state => ({
  tabs: state.tabs 
})

export default connect(mapStateToPropsTabs)(withStyles(styles, { withTheme: true })(TabWebsite));
