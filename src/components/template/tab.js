import React from 'react';
import _ from 'lodash';
import config from './../../config';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import PreviewIcon from '@material-ui/icons/Dvr';
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
import Popup from './popup';

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
        selectedFooter:'none',
        selectedMenubar:'none',
        selectedCarousel:'none',
        selectedHero:'none',
        selectedAbout:'none',
        selectedGallery:'none',
        selectedWelcome:'none',
        selectedContact:'none',
      };   
    }

  componentDidMount=()=> {
    this.getData();
  }
    getData=()=>{
      let new1=[];
      let new2=[];
      const app = config.database().ref('project/'+this.props.email+'/');
      app.on('value', async (snapshot) => { 
        const snapshotValue = snapshot.val(); 
        const snapshotArr = _.keys(snapshotValue).reduce((prev, cur) => {
          prev.push({
            _key: cur,
            ...snapshotValue[cur]
          });
          return prev;     
        }, []); 
        new1=snapshotArr;
    
  //   const global = config.database().ref('project/'+this.props.email+'/global');
  //   global.on('value', async (snapshot) => { 
  //     const snapshotValue = snapshot.val(); 
  //     const snapshotArr = _.keys(snapshotValue).reduce((prev, cur) => {
  //       prev.push({
  //         _key: cur,
  //         ...snapshotValue[cur]
  //       });
  //       return prev;     
  //     }, []); 
  //     new2=snapshotArr ;   
  // });
  let newConcat = new1.concat(new2);
    this.setState({
      news:newConcat
    })
  });
};

  setNullValue=()=>{
    this.setState({
      namePage:'',
      selectedFooter:'none',
      selectedMenubar:'none',
      selectedCarousel:'none',
      selectedHero:'none',
      selectedAbout:'none',
      selectedGallery:'none',
      selectedWelcome:'none',
      selectedContact:'none',
    })
  };

  handleOpenEdit = () => {
    let OpenEdit = config.database().ref('project/'+this.props.email+'/'+this.props.tabs);
    OpenEdit.on('value', async (snapshot) => { 
      const snapshotValue = snapshot.val(); 
      let data = _(snapshotValue).value();
      if(data !== null){
        this.setState({
          namePage:data.pageName,
          selectedFooter:data.footer,
          selectedMenubar:data.menubar,
          selectedHero:data.hero,
          selectedCarousel:data.carousel,
          selectedAbout:data.about,
          selectedGallery:data.gallery,
          selectedWelcome:data.welcome,
          selectedContact:data.contact,
        }); 
      }
    });
    this.setState({
      openEdit:true
    });
  };

  handleCloseEdit = () => {this.setState({ openEdit: false});this.setNullValue();};
  handleOpen = () => {this.setState({ open: true });};
  handleClose = () => {this.setState({ open: false,}); this.setNullValue();};  
  onChangeValue = name=> (e) => {this.setState({ [name]: e.target.value });};
  onChangeName=(e)=>{this.setState({ namePage: e.target.value});};
  handleChange = (event, value) => {this.setState({ value });};
  handleChangeIndex = index => {this.setState({ value: index });};
  popup = name=> () => {this.setState({ [name]: true });};
  popupClose = name=> () => {this.setState({ [name]: false });};

  saveEdit=()=>{
    if(this.state.namePage){
      let pathUpper =this.state.namePage;
      let pathLower =pathUpper.toLowerCase();
      let dbCon = config.database().ref('project/'+this.props.email+'/'+this.props.tabs);
      dbCon.update({
      pageName: this.state.namePage,
      pathName: pathLower,
      path: "/"+this.props.email+"/"+pathLower,
      hero: this.state.selectedHero,
      carousel: this.state.selectedCarousel,
      welcome: this.state.selectedWelcome,
      about : this.state.selectedAbout,
      gallery :this.state.selectedGallery,
      contact : this.state.selectedContact,
      menubar:this.state.selectedMenubar,
      footer:this.state.selectedFooter,
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

  addGlobal=()=>{
      let dbCon = config.database().ref('global/'+this.props.email+'/');
      dbCon.update({
        menubarLogo:{
         image: "https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2Flogo2.png?alt=media&token=9921fb9f-f0b0-4d97-bfd1-41195d22d594",
        },
        menubarSetting:{
          menubarbackgroundColor:'#ffffff',
         },
        content:{
        footerTitle:'Title',
        footerDescription:'Description',
        footerbackgroundColor:'#b5b5b5',
        footerTitleAnimate:'none',
        footerTitleDuration:'1s',
        footerTitleFontFamily:'Roboto Mono',
        footerTitleFontSize:'30',
        footerTitleFontWeight:'400',
        footerTitleFontStyle:'normal',
        footerTitleStatus:'block',
        footerTitleColor:'#ffffff',
    
        footerDescriptionAnimate:'none',
        footerDescriptionDuration:'1s',
        footerDescriptionFontFamily:'Roboto Mono',
        footerDescriptionFontSize:'20',
        footerDescriptionFontWeight:'400',
        footerDescriptionFontStyle:'normal',
        footerDescriptionStatus:'block',
        footerDescriptionColor:'#ffffff',
        },
        menubarContent:{
          Link1:{
            typeGroup:false,
            label:'Link',
            link:'#',
            linkTarget:'_blank',
            Animate:'none',
            Duration:'1s',
            FontFamily:'Roboto Mono',
            FontSize:'16',
            FontWeight:'400',
            FontStyle:'normal',
            Status:'block',
            Color:'#000000',
          }
        },
        footerContent:{
          Link1:{
            typeGroup:false,
            label:'Link',
            link:'#',
            linkTarget:'_blank',
            Animate:'none',
            Duration:'1s',
            FontFamily:'Roboto Mono',
            FontSize:'16',
            FontWeight:'400',
            FontStyle:'normal',
            Status:'block',
            Color:'#000000',
          }
        },
    });  
    this.handleOpen(); 
    }

  addNewTab=()=>{
    if(this.state.namePage){
      let pathUpper =this.state.namePage;
      let pathLower =pathUpper.toLowerCase();
      let dbCon = config.database().ref('project/'+this.props.email+'/');
      dbCon.push({
      key:this.state.num,
      pageName: this.state.namePage,
      pathName:pathLower,
      path: "/"+this.props.email+"/"+pathLower,
      menubar:this.state.selectedMenubar,
      footer:this.state.selectedFooter,
      hero: this.state.selectedHero,
      carousel: this.state.selectedCarousel,
      welcome: this.state.selectedWelcome,
      about : this.state.selectedAbout,
      gallery :this.state.selectedGallery,
      contact : this.state.selectedContact,
      heroContent: {  
        backgroundColor:'#000000',  
        image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2Fbusiness-2884023_1920.jpg?alt=media&token=f9810600-21b1-423a-8950-6e4f1d13a8e8',
        heroTitle:'Title',
        heroTitleAnimate:'none',
        heroTitleDuration:'1s',
        heroTitleFontFamily:'Roboto Mono',
        heroTitleFontSize:'130',
        heroTitleFontWeight:'400',
        heroTitleFontStyle:'normal',
        heroTitleStatus:'block',
        heroTitleColor:'#ffffff',
        heroDescription:'description',
        heroDescriptionAnimate:'none',
        heroDescriptionDuration:'1s',
        heroDescriptionFontFamily:'Roboto Mono',
        heroDescriptionFontSize:'30',
        heroDescriptionFontWeight:'400',
        heroDescriptionFontStyle:'normal',
        heroDescriptionStatus:'block',
        heroDescriptionColor:'#ffffff',
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
        heroButtonLink:"#",
        heroButtonLinkTarget:"_blank",
        heroButtonRadius:"10px",
        heroButtonBGColor:"#d4d1d1",
        heroButtonHBGColor:"#080404",
        heroButtonBDColor:"#121214",
        heroButtonHBDColor:"#FFFFFF",
        heroButtonHoverColor:"#FFFFFF",
      },
      carouselMain:{ 
        carouselTitle:'Title',
        carouselDescription:'Description',
        carouselTitleFontFamily:'Montserrat',
        carouselTitleFontWeight:'700',
        carouselTitleFontSize:'70',
        carouselTitleFontStyle:'normal',
        carouselTitleStatus:'block',
        carouselTitleColor:'#000000',
        carouselTitleAnimate:'none',
        carouselTitleDuration:'1s',
        carouselDescriptionFontFamily:'Montserrat',
        carouselDescriptionFontWeight:'400',
        carouselDescriptionFontSize:'30',
        carouselDescriptionFontStyle:'normal',
        carouselDescriptionStatus:'block',
        carouselDescriptionColor:'#000000',
        carouselDescriptionAnimate:'none',
        carouselDescriptionDuration:'1s',
        carouselBackgroundColor:'#ffffff'
      },
      carouselSetting:{ 
        speed:'1000',
        pauseOnHover:true,
        dots:true,
        autoplay:true,
        vertical:true,
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
      },
      galleryContent:{
        title:'Title',
        description:'Description',
        titleFontFamily:'Montserrat',
        titleFontWeight:'700',
        titleFontSize:'80',
        titleFontStyle:'normal',
        titleStatus:'block',
        titleColor:'#000000',
        titleAnimate:'none',
        titleDuration:'1s',
        descriptionFontFamily:'Montserrat',
        descriptionFontWeight:'400',
        descriptionFontSize:'20',
        descriptionFontStyle:'normal',
        descriptionStatus:'block',
        descriptionColor:'#000000',
        descriptionAnimate:'none',
        descriptionDuration:'1s',
        backgroundColor:'#ffffff',
      },
      galleryItem:{
        content1:{
          image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2F1.jpg?alt=media&token=ce74df4f-e4ea-437f-90b0-c39ec8970086', 
          title:'title',
          titleAnimate:'none',
          titleDuration:'1s',
          titleFontFamily:'Roboto Mono',
          titleFontSize:'25',
          titleFontWeight:'400',
          titleFontStyle:'normal',
          titleStatus:'block',
          titleColor:'#ffffff',
          description:'description',
          descriptionAnimate:'none',
          descriptionDuration:'1s',
          descriptionFontFamily:'Roboto Mono',
          descriptionFontSize:'13',
          descriptionFontWeight:'400',
          descriptionFontStyle:'normal',
          descriptionStatus:'block',
          descriptionColor:'#ffffff',
          link:'#',
          linkTarget:'_blank',
          galleryHover:'none'
        },
        content2:{
          image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2Fbeard-2326422_1920.jpg?alt=media&token=b3a12c18-fe28-4574-a6cb-4076503312ea' ,
          title:'title',
          titleAnimate:'none',
          titleDuration:'1s',
          titleFontFamily:'Roboto Mono',
          titleFontSize:'25',
          titleFontWeight:'400',
          titleFontStyle:'normal',
          titleStatus:'block',
          titleColor:'#ffffff',
          description:'description',
          descriptionAnimate:'none',
          descriptionDuration:'1s',
          descriptionFontFamily:'Roboto Mono',
          descriptionFontSize:'13',
          descriptionFontWeight:'400',
          descriptionFontStyle:'normal',
          descriptionStatus:'block',
          descriptionColor:'#ffffff',
          link:'#',
          linkTarget:'_blank',
          galleryHover:'none'
        },
        content3:{
          image:'https://firebasestorage.googleapis.com/v0/b/cms-project-35e34.appspot.com/o/Default%2F3038591-poster-p-1-secrets-of-the-most-productive-peoplehow-to-work-different-productivity-styles.jpg?alt=media&token=aca301c1-8ed2-4353-942e-39df3bff3ed0',  
          title:'title',
          titleAnimate:'none',
          titleDuration:'1s',
          titleFontFamily:'Roboto Mono',
          titleFontSize:'25',
          titleFontWeight:'400',
          titleFontStyle:'normal',
          titleStatus:'block',
          titleColor:'#ffffff',
          description:'description',
          descriptionAnimate:'none',
          descriptionDuration:'1s',
          descriptionFontFamily:'Roboto Mono',
          descriptionFontSize:'13',
          descriptionFontWeight:'400',
          descriptionFontStyle:'normal',
          descriptionStatus:'block',
          descriptionColor:'#ffffff',
          link:'#',
          linkTarget:'_blank',
          galleryHover:'none'
        },
      }
      
    });     
    }
    this.setNullValue();
    this.handleClose();
  };


  deletePage=()=>{
    this.props.dispatch(checkTab('null'));
    let dbCon = config.database().ref('project/'+this.props.email+'/');
    dbCon.child(this.props.tabs).remove();
    this.setState({popupDelete:false,messageDeleteOpen:true});
  };

  save=()=>{
    let dbCon = config.database().ref('project/'+this.props.email+'/'+this.props.tabs);
    dbCon.update({
    heroContent:{
      image:this.props.heroBackgroundImage,
      backgroundColor:this.props.herobackgroundColor,
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
    carouselMain:{
      carouselBackgroundColor:this.props.carouselBackgroundColor,
      carouselTitle:this.props.carouselTitle,
      carouselDescription:this.props.carouselDescription,
      carouselTitleAnimate:this.props.carouselTitleAnimate,
      carouselTitleDuration:this.props.carouselTitleDuration,
      carouselTitleFontFamily:this.props.carouselTitleFontFamily,
      carouselTitleFontSize:this.props.carouselTitleFontSize,
      carouselTitleFontWeight:this.props.carouselTitleFontWeight,
      carouselTitleFontStyle:this.props.carouselTitleFontStyle,
      carouselTitleStatus:this.props.carouselTitleStatus,
      carouselTitleColor:this.props.carouselTitleColor,
      carouselDescriptionAnimate:this.props.carouselDescriptionAnimate,
      carouselDescriptionDuration:this.props.carouselDescriptionDuration,
      carouselDescriptionFontFamily:this.props.carouselDescriptionFontFamily,
      carouselDescriptionFontSize:this.props.carouselDescriptionFontSize,
      carouselDescriptionFontWeight:this.props.carouselDescriptionFontWeight,
      carouselDescriptionFontStyle:this.props.carouselDescriptionFontStyle,
      carouselDescriptionStatus:this.props.carouselDescriptionStatus,
      carouselDescriptionColor:this.props.carouselDescriptionColor,
    },
    carouselSetting:{
      speed:this.props.carouselSpeed,
      pauseOnHover:this.props.carouselPauseOnHover,
      dots:this.props.carouselDots,
      autoplay:this.props.carouselAutoplay,
      vertical:this.props.carouselVertical,
    },
    galleryContent:{
      title:this.props.galleryTitle,
      description:this.props.galleryDescription,
      titleFontFamily:this.props.galleryTitleFontFamily,
      titleFontWeight:this.props.galleryTitleFontWeight,
      titleFontSize:this.props.galleryTitleFontSize,
      titleFontStyle:this.props.galleryTitleFontStyle,
      titleStatus:this.props.galleryTitleStatus,
      titleColor:this.props.galleryTitleColor,
      titleAnimate:this.props.galleryTitleAnimate,
      titleDuration:this.props.galleryTitleDuration,
      descriptionFontFamily:this.props.galleryDescriptionFontFamily,
      descriptionFontWeight:this.props.galleryDescriptionFontWeight,
      descriptionFontSize:this.props.galleryDescriptionFontSize,
      descriptionFontStyle:this.props.galleryDescriptionFontStyle,
      descriptionStatus:this.props.galleryDescriptionStatus,
      descriptionColor:this.props.galleryDescriptionColor,
      descriptionAnimate:this.props.galleryDescriptionAnimate,
      descriptionDuration:this.props.galleryDescriptionDuration,
      backgroundColor:this.props.galleryBackgroundColor,
    }
    });
    let global = config.database().ref('global/'+this.props.email+'/');
    global.update({ 
      menubarSetting:{
        menubarbackgroundColor:this.props.menubarbackgroundColor
      },  
      content:{
      footerTitle:this.props.footerTitle,
      footerDescription:this.props.footerDescription,
      footerbackgroundColor:this.props.footerbackgroundColor,
      footerTitleAnimate:this.props.footerTitleAnimate,
      footerTitleDuration:this.props.footerTitleDuration,
      footerTitleFontFamily:this.props.footerTitleFontFamily,
      footerTitleFontSize:this.props.footerTitleFontSize,
      footerTitleFontWeight:this.props.footerTitleFontWeight,
      footerTitleFontStyle:this.props.footerTitleFontStyle,
      footerTitleStatus:this.props.footerTitleStatus,
      footerTitleColor:this.props.footerTitleColor,
  
      footerDescriptionAnimate:this.props.footerDescriptionAnimate,
      footerDescriptionDuration:this.props.footerDescriptionDuration,
      footerDescriptionFontFamily:this.props.footerDescriptionFontFamily,
      footerDescriptionFontSize:this.props.footerDescriptionFontSize,
      footerDescriptionFontWeight:this.props.footerDescriptionFontWeight,
      footerDescriptionFontStyle:this.props.footerDescriptionFontStyle,
      footerDescriptionStatus:this.props.footerDescriptionStatus,
      footerDescriptionColor:this.props.footerDescriptionColor,
      }
    })
    this.setState({popupSave:false,messageSaveOpen:true});
    this.setNullValue();
  };
  inputPageName=()=>{
   alert("Please input page name")
  }
  render() {
    const { classes, theme } = this.props;
    return (
    <div>
      <Popup
      open={this.state.popupSave}
      close={this.popupClose('popupSave')}
      title="Are you sure save"
      description="eeeeeeeeeeeeeeee"
      yes={this.save}
      no={this.popupClose('popupSave')}
      message="Page Saved"
      messageOpen={this.state.messageSaveOpen}
      messageClose={this.popupClose('messageSaveOpen')}
      />
      <Popup
      open={this.state.popupDelete}
      close={this.popupClose('popupDelete')}
      title="Are you sure delete"
      description="eeeeeeeeeeeeee"
      yes={this.deletePage}
      no={this.popupClose('popupDelete')}
      message="Page Deteled"
      messageOpen={this.state.messageDeleteOpen}
      messageClose={this.popupClose('messageDeleteOpen')}
      />
      {this.props.undefinedOneTab === true?
      <Button variant="contained" color="secondary" className={classes.button} onClick={this.addGlobal}>Start Your Project</Button>
      :
      <Button variant="contained" color="secondary" onClick={this.popup('popupSave')} className={classes.button}>
        SAVE
        <SaveIcon className={classes.rightIcon} />
      </Button>
      }
      <div>
      <ButtonForNewTab
      undefinedOneTab={this.props.undefinedOneTab}
      icon="add"
      labelbox="Create page"
      labelButton="ADD"
      onClickSave={this.state.namePage? this.addNewTab:this.inputPageName}
      handleClose={this.handleClose}
      handleOpen={this.handleOpen}
      open={this.state.open}
      onClose={this.handleClose}
      TransitionComponent={Transition}
      onChangeName={this.onChangeName}
      valueName={this.state.namePage}
      selectedMenubar={this.state.selectedMenubar}
      handleChangeMenubar={this.onChangeValue('selectedMenubar')}
      valueMenubar1="none"
      valueMenubar2="MenubarNo1"
      valueMenubar3="MenubarNo2"
      valueMenubar4="MenubarNo3"
      selectedHero={this.state.selectedHero}
      handleChangeHero={this.onChangeValue('selectedHero')}
      valueHero1="none"
      valueHero2="HeroNo1"
      valueHero3="HeroNo2"
      valueHero4="HeroNo3"
      selectedCarousel={this.state.selectedCarousel}
      handleChangeCarousel={this.onChangeValue('selectedCarousel')}
      valueCarousel1="none"
      valueCarousel2="CarouselNo1"
      valueCarousel3="CarouselNo2"
      valueCarousel4="CarouselNo3"
      selectedGallery={this.state.selectedGallery}
      handleChangeGallery={this.onChangeValue('selectedGallery')}
      valueGallery1="none"
      valueGallery2="GalleryNo1"
      valueGallery3="GalleryNo2"
      valueGallery4="GalleryNo3"
      selectedFooter={this.state.selectedFooter}
      handleChangeFooter={this.onChangeValue('selectedFooter')}
      valueFooter1="none"
      valueFooter2="FooterNo1"
      valueFooter3="FooterNo2"
      valueFooter4="FooterNo3"
      />
      <ButtonForNewTab
      undefinedOneTab={this.props.undefinedOneTab}
      icon="edit"
      labelbox="Edit page"
      labelButton="Edit"
      onClickSave={this.state.namePage? this.saveEdit:this.inputPageName}
      handleClose={this.handleCloseEdit}
      handleOpen={this.handleOpenEdit}
      open={this.state.openEdit}
      onClose={this.handleCloseEdit}
      TransitionComponent={Transition}
      onChangeName={this.onChangeName}
      valueName={this.state.namePage}
      selectedMenubar={this.state.selectedMenubar}
      handleChangeMenubar={this.onChangeValue('selectedMenubar')}
      valueMenubar1="none"
      valueMenubar2="MenubarNo1"
      valueMenubar3="MenubarNo2"
      valueMenubar4="MenubarNo3"
      selectedHero={this.state.selectedHero}
      handleChangeHero={this.onChangeValue('selectedHero')}
      valueHero1="none"
      valueHero2="HeroNo1"
      valueHero3="HeroNo2"
      valueHero4="HeroNo3"
      selectedCarousel={this.state.selectedCarousel}
      handleChangeCarousel={this.onChangeValue('selectedCarousel')}
      valueCarousel1="none"
      valueCarousel2="CarouselNo1"
      valueCarousel3="CarouselNo2"
      valueCarousel4="CarouselNo3"
      selectedGallery={this.state.selectedGallery}
      handleChangeGallery={this.onChangeValue('selectedGallery')}
      valueGallery1="none"
      valueGallery2="GalleryNo1"
      valueGallery3="GalleryNo2"
      valueGallery4="GalleryNo3"
      selectedFooter={this.state.selectedFooter}
      handleChangeFooter={this.onChangeValue('selectedFooter')}
      valueFooter1="none"
      valueFooter2="FooterNo1"
      valueFooter3="FooterNo2"
      valueFooter4="FooterNo3"
      />
      {this.props.undefinedOneTab !== true?
      <div>
      <Button variant="contained" color="secondary" className={classes.button} onClick={this.popup('popupDelete')}>Delete
      <DeleteIcon className={classes.rightIcon}/>
      </Button>
      <Button variant="contained" color="secondary" style={{float:'right'}} className={classes.button} ><a href={'https://webshow-efb30.firebaseapp.com'+this.props.path} style={{color:'#ffffff'}} target="_blank">Preview</a>
      <PreviewIcon className={classes.rightIcon}/>
      </Button>
      </div>
      :null
      }
      </div>
      {this.props.undefinedOneTab !== true?
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
          className={classes.gg}
        >            
          {this.state.news.map((New => (
            <div key={New._key} className={classes.content}>
            <IN         
              Hero={New.hero}
              Carousel={New.carousel}
              Welcome={New.welcome}
              About={New.about} 
              Gallery={New.gallery}  
              Menubar={New.menubar}
              Footer={New.footer}

              menubarLogo={this.props.menubarLogo}
              menubarbackgroundColor={this.props.menubarbackgroundColor}
              menubarContent={this.props.menubarContent}
              herobackgroundColor={this.props.herobackgroundColor}
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

              carouselBackgroundColor={this.props.carouselBackgroundColor}
              carouselContent={this.props.carouselContent}
              carouselSpeed={this.props.carouselSpeed}
              carouselPauseOnHover={this.props.carouselPauseOnHover}
              carouselDots={this.props.carouselDots}
              carouselAutoplay={this.props.carouselAutoplay}
              carouselVertical={this.props.carouselVertical}
              carouselTitle={this.props.carouselTitle}
              carouselDescription={this.props.carouselDescription}
              carouselTitleAnimate={this.props.carouselTitleAnimate}
              carouselTitleDuration={this.props.carouselTitleDuration}
              carouselTitleFontFamily={this.props.carouselTitleFontFamily}
              carouselTitleFontSize={this.props.carouselTitleFontSize}
              carouselTitleFontWeight={this.props.carouselTitleFontWeight}
              carouselTitleFontStyle={this.props.carouselTitleFontStyle}
              carouselTitleStatus={this.props.carouselTitleStatus}
              carouselTitleColor={this.props.carouselTitleColor}
              carouselDescriptionAnimate={this.props.carouselDescriptionAnimate}
              carouselDescriptionDuration={this.props.carouselDescriptionDuration}
              carouselDescriptionFontFamily={this.props.carouselDescriptionFontFamily}
              carouselDescriptionFontSize={this.props.carouselDescriptionFontSize}
              carouselDescriptionFontWeight={this.props.carouselDescriptionFontWeight}
              carouselDescriptionFontStyle={this.props.carouselDescriptionFontStyle}
              carouselDescriptionStatus={this.props.carouselDescriptionStatus}
              carouselDescriptionColor={this.props.carouselDescriptionColor}

              galleryContent={this.props.galleryContent}
              galleryBackgroundColor={this.props.galleryBackgroundColor}
              galleryTitle={this.props.galleryTitle}  
              galleryTitleAnimate={this.props.galleryTitleAnimate} 
              galleryTitleDuration={this.props.galleryTitleDuration}   
              galleryTitleFontFamily={this.props.galleryTitleFontFamily}
              galleryTitleFontSize={this.props.galleryTitleFontSize}
              galleryTitleFontWeight={this.props.galleryTitleFontWeight}
              galleryTitleFontStyle={this.props.galleryTitleFontStyle}
              galleryTitleStatus={this.props.galleryTitleStatus}
              galleryTitleColor={this.props.galleryTitleColor}
          
              galleryDescription={this.props.galleryDescription}  
              galleryDescriptionAnimate={this.props.galleryDescriptionAnimate} 
              galleryDescriptionDuration={this.props.galleryDescriptionDuration}   
              galleryDescriptionFontFamily={this.props.galleryDescriptionFontFamily}
              galleryDescriptionFontSize={this.props.galleryDescriptionFontSize}
              galleryDescriptionFontWeight={this.props.galleryDescriptionFontWeight}
              galleryDescriptionFontStyle={this.props.galleryDescriptionFontStyle}
              galleryDescriptionStatus={this.props.galleryDescriptionStatus}
              galleryDescriptionColor={this.props.galleryDescriptionColor}

              footerContent={this.props.footerContent}
              footerTitle={this.props.footerTitle}
              footerDescription={this.props.footerDescription}
              footerbackgroundColor={this.props.footerbackgroundColor}
              footerTitleAnimate={this.props.footerTitleAnimate}
              footerTitleDuration={this.props.footerTitleDuration}
              footerTitleFontFamily={this.props.footerTitleFontFamily}
              footerTitleFontSize={this.props.footerTitleFontSize}
              footerTitleFontWeight={this.props.footerTitleFontWeight}
              footerTitleFontStyle={this.props.footerTitleFontStyle}
              footerTitleStatus={this.props.footerTitleStatus}
              footerTitleColor={this.props.footerTitleColor}
          
              footerDescriptionAnimate={this.props.footerDescriptionAnimate}
              footerDescriptionDuration={this.props.footerDescriptionDuration}
              footerDescriptionFontFamily={this.props.footerDescriptionFontFamily}
              footerDescriptionFontSize={this.props.footerDescriptionFontSize}
              footerDescriptionFontWeight={this.props.footerDescriptionFontWeight}
              footerDescriptionFontStyle={this.props.footerDescriptionFontStyle}
              footerDescriptionStatus={this.props.footerDescriptionStatus}
              footerDescriptionColor={this.props.footerDescriptionColor}
            />
            </div>
          )))}   
        </SwipeableViews>
      </div>
      :null}
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
  user:state.user,
  email:state.email
})

export default connect(mapStateToPropsTabs)(withStyles(styles, { withTheme: true })(TabWebsite));
