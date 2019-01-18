import React from 'react';
import '../../css/animate.min.css';
import HeroNo1 from './Hero/HeroNo1'
import HeroNo2 from './Hero/HeroNo2'
import MenubarNo1 from './Menubar/menubarNo1'
import MenubarNo2 from './Menubar/menubarNo2'
// import WelcomeNo1 from './Welcome/WelcomeNo1'
// import WelcomeNo2 from './Welcome/WelcomeNo2'
import CarouselNo1 from './Carousel/CarouselNo1'
import GalleryNo1 from './Gallery/GalleryNo1'
import GalleryNo2 from './Gallery/GalleryNo2'
import FooterNo1 from './Footer/FooterNo1'

class IN extends React.Component {

  render() {
  const End={
    height:200,
    backgroundColor:'none',
  };
  let menubar;
  let Hero;
  let Carousel;
  let Gallery;

  if( this.props.Menubar === "MenubarNo1"){
  menubar=<MenubarNo1
  menubarContent={this.props.menubarContent}
  menubarbackgroundColor={this.props.menubarbackgroundColor}
  />
  }
  if( this.props.Menubar === "MenubarNo2"){
    menubar=<MenubarNo2
    menubarbackgroundColor={this.props.menubarbackgroundColor}
    menubarLogo={this.props.menubarLogo}
    menubarContent={this.props.menubarContent}
    />
  }
  if( this.props.Hero === "HeroNo1"){
    Hero = <HeroNo1
    heroImagePick={this.props.heroImagePick}
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
    />
  }
  if( this.props.Hero === "HeroNo2"){
    Hero = <HeroNo2
    herobackgroundColor={this.props.herobackgroundColor}
    heroImagePick={this.props.heroImagePick}
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
    />
  }
  if( this.props.Carousel === "CarouselNo1"){
    Carousel = <CarouselNo1
    carouselContent={this.props.carouselContent}
    carouselSpeed={this.props.carouselSpeed}
    carouselPauseOnHover={this.props.carouselPauseOnHover}
    carouselDots={this.props.carouselDots}
    carouselAutoplay={this.props.carouselAutoplay}
    carouselVertical={this.props.carouselVertical}
    />
  }

  if( this.props.Gallery === "GalleryNo1"){
  Gallery =
  <GalleryNo2
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
  />
  }
  
  let Footer;
  if( this.props.Footer === "FooterNo1"){
  Footer=<FooterNo1
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
  }
return (
      <div> 
      {menubar}  
      {Hero}
      {Carousel}
      {Gallery}
      {Footer}
      <div style={End}></div>
      </div>
);
  }
}



export default IN;
