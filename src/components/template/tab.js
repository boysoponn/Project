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
import SaveIcon from '@material-ui/icons/Save';


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
        selectedCarousel:'none'
      };   
    }

  componentDidMount=()=> {
    this.getData();
  }
    getData=()=>{
      const app = config.database().ref('project/'+this.props.user+'/');
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

  setNullValue=()=>{
    this.setState({
      namePage:'',
      selectedCarousel:'none',
      selectedHero:'none',
      selectedAbout:'none',
      selectedGallery:'none',
      selectedWelcome:'none',
      selectedContact:'none',
    })
  };

  handleOpenEdit = () => {
    let OpenEdit = config.database().ref('project/'+this.props.user+'/'+this.props.tabs);
    OpenEdit.on('value', async (snapshot) => { 
      const snapshotValue = snapshot.val(); 
      let data = _(snapshotValue).value();
        this.setState({
          namePage:data.pageName,
          selectedHero:data.hero,
          selectedCarousel:data.carousel,
          selectedAbout:data.about,
          selectedGallery:data.gallery,
          selectedWelcome:data.welcome,
          selectedContact:data.contact,
        }); 
    });
    this.setState({
      openEdit:true
    });
  };

  handleCloseEdit = () => {this.setState({ openEdit: false});this.setNullValue();};
  handleOpen = () => {this.setState({ open: true });};
  handleClose = () => {this.setState({ open: false,}); this.setNullValue();};  
  onChangeName=(e)=>{this.setState({ namePage: e.target.value});};
  handleChangeSelectHero = event => {this.setState({ selectedHero: event.target.value });};
  handleChangeSelectWelcome = event => {this.setState({ selectedWelcome: event.target.value });};
  handleChangeSelectAbout = event => {this.setState({ selectedAbout: event.target.value });};
  handleChangeSelectGallery = event => {this.setState({ selectedGallery: event.target.value });};
  handleChangeSelectContact = event => {this.setState({ selectedContact: event.target.value });};
  handleChangeSelectedCarousel = event => {this.setState({ selectedCarousel: event.target.value });};
  handleChange = (event, value) => {this.setState({ value });};
  handleChangeIndex = index => {this.setState({ value: index });};

  saveEdit=()=>{
    if(this.state.namePage){
      let pathUpper =this.state.namePage;
      let pathLower =pathUpper.toLowerCase();
      let dbCon = config.database().ref('project/'+this.props.user+'/'+this.props.tabs);
      dbCon.update({
      pageName: this.state.namePage,
      pathName: pathLower,
      path: "/"+this.props.user+"/"+pathLower,
      hero: this.state.selectedHero,
      carousel: this.state.selectedCarousel,
      welcome: this.state.selectedWelcome,
      about : this.state.selectedAbout,
      gallery :this.state.selectedGallery,
      contact : this.state.selectedContact
    });    
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

  addNewTab=()=>{
    if(this.state.namePage){
      let pathUpper =this.state.namePage;
      let pathLower =pathUpper.toLowerCase();
      let dbCon = config.database().ref('project/'+this.props.user+'/');
      dbCon.push({
      key:this.state.num,
      pageName: this.state.namePage,
      pathName:pathLower,
      path: "/"+this.props.user+"/"+pathLower,
      hero: this.state.selectedHero,
      carousel: this.state.selectedCarousel,
      welcome: this.state.selectedWelcome,
      about : this.state.selectedAbout,
      gallery :this.state.selectedGallery,
      contact : this.state.selectedContact,
      heroContent: {      
        image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2Fbusiness-2884023_1920.jpg?alt=media&token=f9810600-21b1-423a-8950-6e4f1d13a8e8',
        heroTitle:'Title',
        heroTitleAnimate:'none',
        heroTitleDuration:'1s',
        heroTitleFontFamily:'Roboto Mono',
        heroTitleFontSize:'130',
        heroTitleFontWeight:'400',
        heroTitleFontStyle:'normal',
        heroTitleStatus:'block',
        heroTitleColor:'#fff',
        heroDescription:'description',
        heroDescriptionAnimate:'none',
        heroDescriptionDuration:'1s',
        heroDescriptionFontFamily:'Roboto Mono',
        heroDescriptionFontSize:'30',
        heroDescriptionFontWeight:'400',
        heroDescriptionFontStyle:'normal',
        heroDescriptionStatus:'block',
        heroDescriptionColor:'#fff',
        heroButton:'Button',
        heroButtonSelected:'slideLeft',
        heroButtonAnimate:'none',
        heroButtonDuration:'1s',
        heroButtonFontFamily:'Roboto Mono',
        heroButtonFontSize:'20',
        heroButtonFontWeight:'400',
        heroButtonFontStyle:'normal',
        heroButtonStatus:'block',
        heroButtonColor:'#228B22',
        heroButtonSwapColor:"#FFFFFF",
        heroButtonSwap:"Let go",
        heroButtonLink:"",
        heroButtonLinkTarget:"_blank",
        heroButtonRadius:"10px",
        heroButtonBGColor:"#d4d1d1",
        heroButtonHBGColor:"#080404",
        heroButtonBDColor:"#121214",
        heroButtonHBDColor:"#FFFFFF",
        heroButtonHoverColor:"#FFFFFF",
      },
      carouselSetting:{ 
        speed:'1000',
        pauseOnHover:true,
        dots:true,
        autoplay:true,
        vertical:true  
      },
      carouselContent:{
        Content1:{
        title:'Title',
        description:'Description',
        carouselTitleFontFamily:'Montserrat',
        carouselTitleFontWeight:'700',
        carouselTitleFontSize:'70',
        carouselTitleFontStyle:'normal',
        carouselTitleStatus:'block',
        carouselTitleColor:'#ffffff',
        carouselDescriptionFontFamily:'Montserrat',
        carouselDescriptionFontWeight:'400',
        carouselDescriptionFontSize:'30',
        carouselDescriptionFontStyle:'normal',
        carouselDescriptionStatus:'block',
        carouselDescriptionColor:'#ffffff',  
        image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2Fbeard-2326422_1920.jpg?alt=media&token=b3a12c18-fe28-4574-a6cb-4076503312ea'  
        },
        Content2:{
          title:'Title',
          description:'Description',
          carouselTitleFontFamily:'Montserrat',
          carouselTitleFontWeight:'700',
          carouselTitleFontSize:'70',
          carouselTitleFontStyle:'normal',
          carouselTitleStatus:'block',
          carouselTitleColor:'#ffffff',
          carouselDescriptionFontFamily:'Montserrat',
          carouselDescriptionFontWeight:'400',
          carouselDescriptionFontSize:'30',
          carouselDescriptionFontStyle:'normal',
          carouselDescriptionStatus:'block',
          carouselDescriptionColor:'#ffffff',  
          image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2Furban-438393_1920.jpg?alt=media&token=a612bbf5-62c9-4782-b858-5602ac3e7770'  
          },
        Content3:{
          title:'Title',
          description:'Description',
          carouselTitleFontFamily:'Montserrat',
          carouselTitleFontWeight:'700',
          carouselTitleFontSize:'70',
          carouselTitleFontStyle:'normal',
          carouselTitleStatus:'block',
          carouselTitleColor:'#ffffff',
          carouselDescriptionFontFamily:'Montserrat',
          carouselDescriptionFontWeight:'400',
          carouselDescriptionFontSize:'30',
          carouselDescriptionFontStyle:'normal',
          carouselDescriptionStatus:'block',
          carouselDescriptionColor:'#ffffff',  
          image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2Furban-438393_1920.jpg?alt=media&token=a612bbf5-62c9-4782-b858-5602ac3e7770'  
        },
      }
    });     
    }
    this.setNullValue();
    this.handleClose();
  };

  deletePage=()=>{
    let dbCon = config.database().ref('project/'+this.props.user+'/');
    dbCon.child(this.props.tabs).remove();
  };

  save=()=>{
    let dbCon = config.database().ref('project/'+this.props.user+'/'+this.props.tabs);
    dbCon.update({
    heroContent:{
      image:this.props.heroBackgroundImage,
      heroBackgroundImage:this.props.heroBackgroundImage,
      heroTitle:this.props.heroTitle,
      heroTitleAnimate:this.props.heroTitleAnimate,
      heroTitleDuration:this.props.heroTitleDuration,
      heroTitleFontFamily:this.props.heroTitleFontFamily,
      heroTitleFontSize:this.props.heroTitleFontSize,
      heroTitleFontWeight:this.props.heroTitleFontWeight,
      heroTitleFontStyle:this.props.heroTitleFontStyle,
      heroTitleStatus:this.props.heroTitleStatus,
      heroTitleColor:this.props.heroTitleColor,
      
      heroDescription:this.props.heroDescription,
      heroDescriptionAnimate:this.props.heroDescriptionAnimate,
      heroDescriptionDuration:this.props.heroDescriptionDuration,
      heroDescriptionFontFamily:this.props.heroDescriptionFontFamily,
      heroDescriptionFontSize:this.props.heroDescriptionFontSize,
      heroDescriptionFontWeight:this.props.heroDescriptionFontWeight,
      heroDescriptionFontStyle:this.props.heroDescriptionFontStyle,
      heroDescriptionStatus:this.props.heroDescriptionStatus,
      heroDescriptionColor:this.props.heroDescriptionColor,

      heroButton:this.props.heroButton,
      heroButtonSelected:this.props.heroButtonSelected,
      heroButtonAnimate:this.props.heroButtonAnimate,
      heroButtonDuration:this.props.heroButtonDuration,
      heroButtonFontFamily:this.props.heroButtonFontFamily,
      heroButtonFontSize:this.props.heroButtonFontSize,
      heroButtonFontWeight:this.props.heroButtonFontWeight,
      heroButtonFontStyle:this.props.heroButtonFontStyle,
      heroButtonStatus:this.props.heroButtonStatus,
      heroButtonColor:this.props.heroButtonColor,
      heroButtonSwapColor:this.props.heroButtonSwapColor,
      heroButtonSwap:this.props.heroButtonSwap,
      heroButtonLink:this.props.heroButtonLink,
      heroButtonLinkTarget:this.props.heroButtonLinkTarget,
      heroButtonRadius:this.props.heroButtonRadius,
      heroButtonBGColor:this.props.heroButtonBGColor,
      heroButtonHBGColor:this.props.heroButtonHBGColor,
      heroButtonBDColor:this.props.heroButtonBDColor,
      heroButtonHBDColor:this.props.heroButtonHBDColor,
      heroButtonHoverColor:this.props.heroButtonHoverColor,
    },
    carouselSetting:{
      speed:this.props.carouselSpeed,
      pauseOnHover:this.props.carouselPauseOnHover,
      dots:this.props.carouselDots,
      autoplay:this.props.carouselAutoplay,
      vertical:this.props.carouselVertical
    }
    });
    alert("saved");
    this.setNullValue();
  };

  render() {
    const { classes, theme } = this.props;
    const center= ({textAlign: 'center'}); 
    return (
    <div>
      <Button variant="contained" color="secondary" onClick={this.save} className={classes.button}>
        SAVE
        <SaveIcon className={classes.rightIcon} />
      </Button>
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
      selectedCarousel={this.state.selectedCarousel}
      handleChangeCarousel={this.handleChangeSelectedCarousel}
      valueCarousel1="none"
      valueCarousel2="CarouselNo1"
      valueCarousel3="CarouselNo2"
      valueCarousel4="CarouselNo3"
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
      selectedCarousel={this.state.selectedCarousel}
      handleChangeCarousel={this.handleChangeSelectedCarousel}
      valueCarousel1="none"
      valueCarousel2="CarouselNo1"
      valueCarousel3="CarouselNo2"
      valueCarousel4="CarouselNo3"
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
            New._key==='globel' ? null
            :
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
              Carousel={New.carousel}
              Welcome={New.welcome}
              About={New.about}  
              
              menubar={this.props.menubar}
              
              heroImagePick={this.props.heroBackgroundImage}
              heroTitle={this.props.heroTitle} 
              heroTitleAnimate={this.props.heroTitleAnimate}
              heroTitleDuration={this.props.heroTitleDuration}
              heroTitleFontFamily={this.props.heroTitleFontFamily} 
              heroTitleFontSize={this.props.heroTitleFontSize}
              heroTitleFontWeight={this.props.heroTitleFontWeight}
              heroTitleFontStyle={this.props.heroTitleFontStyle}
              heroTitleStatus={this.props.heroTitleStatus}
              heroTitleColor={this.props.heroTitleColor}

              heroDescription={this.props.heroDescription}
              heroDescriptionDuration= {this.props.heroDescriptionDuration}
              heroDescriptionFontFamily={this.props.heroDescriptionFontFamily}
              heroDescriptionFontSize={this.props.heroDescriptionFontSize}
              heroDescriptionFontWeight={this.props.heroDescriptionFontWeight}
              heroDescriptionFontStyle={this.props.heroDescriptionFontStyle}
              heroDescriptionStatus={this.props.heroDescriptionStatus}
              heroDescriptionAnimate={this.props.heroDescriptionAnimate} 
              heroDescriptionColor={this.props.heroDescriptionColor}

              heroButton={this.props.heroButton} 
              heroButtonSelected={this.props.heroButtonSelected}
              heroButtonAnimate={this.props.heroButtonAnimate} 
              heroButtonDuration={this.props.heroButtonDuration} 
              heroButtonFontFamily={this.props.heroButtonFontFamily}
              heroButtonFontSize={this.props.heroButtonFontSize}
              heroButtonFontWeight={this.props.heroButtonFontWeight}
              heroButtonFontStyle={this.props.heroButtonFontStyle}
              heroButtonStatus={this.props.heroButtonStatus}
              heroButtonColor={this.props.heroButtonColor}
              heroButtonSwapColor={this.props.heroButtonSwapColor}
              heroButtonSwap={this.props.heroButtonSwap}
              heroButtonLink={this.props.heroButtonLink}
              heroButtonLinkTarget={this.props.heroButtonLinkTarget}
              heroButtonRadius={this.props.heroButtonRadius}
              heroButtonBGColor={this.props.heroButtonBGColor}
              heroButtonHBGColor={this.props.heroButtonHBGColor}
              heroButtonBDColor={this.props.heroButtonBDColor}
              heroButtonHBDColor={this.props.heroButtonHBDColor}
              heroButtonHoverColor={this.props.heroButtonHoverColor}

              carouselContent={this.props.carouselContent}
              carouselSpeed={this.props.carouselSpeed}
              carouselPauseOnHover={this.props.carouselPauseOnHover}
              carouselDots={this.props.carouselDots}
              carouselAutoplay={this.props.carouselAutoplay}
              carouselVertical={this.props.carouselVertical}
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
  tabs: state.tabs ,
  user:state.user
})

export default connect(mapStateToPropsTabs)(withStyles(styles, { withTheme: true })(TabWebsite));
